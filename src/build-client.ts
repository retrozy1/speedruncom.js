import { mkdirSync } from 'fs';
import { Project, InterfaceDeclaration } from 'ts-morph';

const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

const baseClient = project.getSourceFileOrThrow('src/BaseClient.ts');
const clientFile = project.createSourceFile('src/Client.ts', baseClient.getFullText(), { overwrite: true });
const clientClass = clientFile.getClasses()[0];

const endpointsFile = project.getSourceFileOrThrow('src/endpoints.ts');
const responsesFile = project.getSourceFileOrThrow('src/responses.ts');

const endpointNames = endpointsFile.getInterfaces().map((i: InterfaceDeclaration) => i.getName());
const responseNames = new Set(responsesFile.getInterfaces().map((i: InterfaceDeclaration) => i.getName()));

for (const endpointName of endpointNames) {
    const returnType = responseNames.has(endpointName) ? `Promise<Responses.${endpointName}>` : 'Promise<void>';

    clientClass.addMethod({
        name: endpointName,
        isAsync: true,
        parameters: [{ name: 'params', type: `Endpoints.${endpointName}` }],
        returnType,
        statements: [`await this.fetch('${endpointName}', params)`]
    });
}

clientFile.saveSync();