import * as Endpoints from './endpoints';
import * as Responses from './responses';
import fs from 'fs';

const endpointNames = Object.keys(Endpoints);

let clientBase = fs.readFileSync('./ClientBase.ts');
clientBase = clientBase.slice(0, -1); // Removes the '}' to insert these methods.

for (const endpoint of endpointNames) {
    const response = Responses[endpoint] ? `Responses.${endpoint}` : 'void';
    clientBase += `async ${endpoint}(params: Endpoints.${endpoint}): Promise<${response}> {
        return await this.request<${response}>('${endpoint}', params);
    }
    
    `
}

clientBase += '}'; // Adds it back

fs.writeFileSync('./Client.ts', clientBase);