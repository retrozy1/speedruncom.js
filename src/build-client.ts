import { Project, SourceFile, InterfaceDeclaration } from 'ts-morph';
import { execSync } from 'child_process';

const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

const isInterfaceEmpty = (interfaceName: string, sourceFile: SourceFile): boolean => {
    const declarations = sourceFile.getExportedDeclarations().get(interfaceName);
    if (!declarations || declarations.length === 0) return false;

    const decl = declarations[0];
    if (!decl || !decl.getKindName || decl.getKindName() !== "InterfaceDeclaration") return false;

    const props = (decl as InterfaceDeclaration).getProperties();
    return props.length === 0;
}

const baseClient = project.getSourceFileOrThrow('src/BaseClient.ts');
const clientFile = project.createSourceFile('src/Client.ts', baseClient.getFullText(), { overwrite: true });
const clientClass = clientFile.getClasses()[1];

const getEndpointsFile = project.getSourceFileOrThrow('src/endpoints/endpoints.get.ts');
const postEndpointsFile = project.getSourceFileOrThrow('src/endpoints/endpoints.post.ts');
const responsesFile = project.getSourceFileOrThrow('src/responses.ts');

const getEndpointNames = Array.from(getEndpointsFile.getExportedDeclarations().keys());
const postEndpointNames = Array.from(postEndpointsFile.getExportedDeclarations().keys());

const responseNames = new Set(Array.from(responsesFile.getExportedDeclarations().keys()));

for (const endpointName of getEndpointNames) {
    const returnType = responseNames.has(endpointName) ? `Promise<Responses.${endpointName}>` : 'Promise<void>';
    const isEmpty = isInterfaceEmpty(endpointName, getEndpointsFile);

    const parameters = [{
        name: 'params',
        type: `GetEndpoints.${endpointName}`,
        hasQuestionToken: isEmpty
    }];

    clientClass.addMethod({
        name: endpointName,
        isAsync: true,
        parameters,
        returnType,
        statements: [`return await this.request('${endpointName}', params, 'post');`]
    });

    clientClass.addMethod({
        name: endpointName,
        isStatic: true,
        isAsync: true,
        parameters,
        returnType,
        statements: [`return await this.request('${endpointName}', params, 'get');`]
    });
}

for (const endpointName of postEndpointNames) {
    const returnType = responseNames.has(endpointName) ? `Promise<Responses.${endpointName}>` : 'Promise<void>';
    const isEmpty = isInterfaceEmpty(endpointName, postEndpointsFile);

    const parameters = [{
        name: 'params',
        type: `PostEndpoints.${endpointName}`,
        hasQuestionToken: isEmpty
    }];

    clientClass.addMethod({
        name: endpointName,
        isAsync: true,
        parameters,
        returnType,
        statements: [`return await this.request('${endpointName}', params, 'post');`]
    });
}

clientFile.saveSync();

execSync('git config user.name "github-actions[bot]"');
execSync('git config user.email "github-actions[bot]@users.noreply.github.com"');
execSync('git add .');
execSync(`git commit -m "Updated Client.ts"`);
execSync('git push');
