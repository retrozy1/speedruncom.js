import { Project, InterfaceDeclaration, TypeAliasDeclaration, ExportDeclaration } from 'ts-morph';

const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

const baseClient = project.getSourceFileOrThrow('src/BaseClient.ts');
const clientFile = project.createSourceFile('src/Client.ts', baseClient.getFullText(), { overwrite: true });
const clientClass = clientFile.getClasses()[1];

const endpointsFile = project.getSourceFileOrThrow('src/endpoints.ts');
const responsesFile = project.getSourceFileOrThrow('src/responses.ts');

const endpointNames = Array.from(endpointsFile.getExportedDeclarations().keys())

const responseNames = new Set(Array.from(responsesFile.getExportedDeclarations().keys()));

for (const endpointName of endpointNames) {
    const returnType = responseNames.has(endpointName) ? `Promise<Responses.${endpointName}>` : 'Promise<void>';

    clientClass.addMethod({
        name: endpointName,
        isAsync: true,
        parameters: [{ name: 'params', type: `Endpoints.${endpointName}` }],
        returnType,
        statements: [`return await this.request('${endpointName}', params);`]
    });
}

clientFile.saveSync();