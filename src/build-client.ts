import { Project, SourceFile, InterfaceDeclaration, OptionalKind, MethodDeclarationStructure } from 'ts-morph';

const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

const isInterfaceEmpty = (interfaceName: string, sourceFile: SourceFile) => {
    const declarations = sourceFile.getExportedDeclarations().get(interfaceName);
    if (!declarations || declarations.length === 0) return false;

    const decl = declarations[0];
    if (!decl || !decl.getKindName || decl.getKindName() !== "InterfaceDeclaration") return false;

    const props = (decl as InterfaceDeclaration).getProperties();
    return props.length === 0;
};

const isInterfaceAllOptional = (interfaceName: string, sourceFile: SourceFile) => {
    const interfaceDecl = sourceFile.getInterfaceOrThrow(interfaceName);
    return interfaceDecl.getProperties().every(prop => prop.hasQuestionToken());
};

const baseClient = project.getSourceFileOrThrow('src/BaseClient.ts');
const clientFile = project.createSourceFile('src/Client.ts', baseClient.getFullText(), { overwrite: true });
const clientClass = clientFile.getClasses()[1];

const getEndpointsFile = project.getSourceFileOrThrow('src/endpoints/endpoints.get.ts');
const postEndpointsFile = project.getSourceFileOrThrow('src/endpoints/endpoints.post.ts');
const responsesFile = project.getSourceFileOrThrow('src/responses.ts');

const getEndpointNames = Array.from(getEndpointsFile.getExportedDeclarations().keys());
const postEndpointNames = Array.from(postEndpointsFile.getExportedDeclarations().keys());

const responseNames = new Set(Array.from(responsesFile.getExportedDeclarations().keys()));

const makeMethod = (name: string, isStatic: boolean, returnType: string, isEmpty: boolean, interfaces: string, isOptional: boolean) => {
    const method: OptionalKind<MethodDeclarationStructure> = {
        name,
        isStatic,
        isAsync: true,
        returnType,
        statements: [`return await this.request('${name}', params);`]
    }
    if (!isEmpty) method.parameters = [{
        name: 'params',
        type: `${interfaces}.${name}`,
        hasQuestionToken: isOptional
    }];

    clientClass.addMethod(method);
}

for (const endpointName of getEndpointNames) {
    const returnType = responseNames.has(endpointName) ? `Promise<Readonly<Responses.${endpointName}>>` : 'Promise<void>';
    const isEmpty = isInterfaceEmpty(endpointName, getEndpointsFile);
    const isAllOptional = isInterfaceAllOptional(endpointName, getEndpointsFile);

    makeMethod(endpointName, false, returnType, isEmpty, 'GetEndpoints', isAllOptional);
    makeMethod(endpointName, true, returnType, isEmpty, 'GetEndpoints', isAllOptional);
}

for (const endpointName of postEndpointNames) {
    const returnType = responseNames.has(endpointName) ? `Promise<Readonly<Responses.${endpointName}>>` : 'Promise<void>';
    const isEmpty = isInterfaceEmpty(endpointName, postEndpointsFile);
    const isAllOptional = isInterfaceAllOptional(endpointName, postEndpointsFile);

    makeMethod(endpointName, false, returnType, isEmpty, 'PostEndpoints', isAllOptional);
}

clientFile.saveSync();