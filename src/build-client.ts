import * as Endpoints from './endpoints.ts';
import * as Responses from './responses.ts';
import fs from 'fs';

const endpointNames = Object.keys(Endpoints);

let clientBase = fs.readFileSync('./src/ClientBase.ts', 'utf-8');
clientBase = clientBase.slice(0, -1); // Removes the '}' to insert these methods.

for (const endpoint of endpointNames) {
    const key = endpoint as keyof typeof Responses;
    const response = key in Responses ? `Responses.${key}` : 'void';

    clientBase += `async ${endpoint}(params: Endpoints.${endpoint}): Promise<${response}> {
        return await this.request<${response}>('${endpoint}', params);
    }

    `;
}

clientBase += '}'; // Adds it back

fs.writeFileSync('./src/Client.ts', clientBase);