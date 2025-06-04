import { Project } from 'ts-morph';
import { execSync } from 'child_process';

const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

const baseClient = project.getSourceFileOrThrow('src/BaseClient.ts');
const clientFile = project.createSourceFile('src/Client.ts', baseClient.getFullText(), { overwrite: true });
const clientClass = clientFile.getClasses()[1];

const getEndpointsFile = project.getSourceFileOrThrow('src/endpoints/endpoints.get.ts');
const postEndpointsFile = project.getSourceFileOrThrow('src/endpoints/endpoints.post.ts');
const responsesFile = project.getSourceFileOrThrow('src/responses.ts');

const getEndpointNames = Array.from(getEndpointsFile.getExportedDeclarations().keys())
const postEndpointNames = Array.from(postEndpointsFile.getExportedDeclarations().keys())

const responseNames = new Set(Array.from(responsesFile.getExportedDeclarations().keys()));

for (const endpointName of getEndpointNames) {
    const returnType = responseNames.has(endpointName) ? `Promise<Responses.${endpointName}>` : 'Promise<void>';

    clientClass.addMethod({
        name: endpointName,
        isAsync: true,
        parameters: [{ name: 'params', type: `GetEndpoints.${endpointName}` }],
        returnType,
        statements: [`return await this.request('${endpointName}', params, 'post');`]
    });
    clientClass.addMethod({
        name: endpointName,
        isStatic: true,
        isAsync: true,
        parameters: [{ name: 'params', type: `GetEndpoints.${endpointName}` }],
        returnType,
        statements: [`return await this.request('${endpointName}', params, 'get');`]
    });
}

for (const endpointName of postEndpointNames) {
    const returnType = responseNames.has(endpointName) ? `Promise<Responses.${endpointName}>` : 'Promise<void>';

    clientClass.addMethod({
        name: endpointName,
        isAsync: true,
        parameters: [{ name: 'params', type: `PostEndpoints.${endpointName}` }],
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
