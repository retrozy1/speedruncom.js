import GETEndpoints from './endpoints/endpoints.get.js';
import POSTEndpoints from './endpoints/endpoints.post.js'
import Responses from './responses.js';

type Endpoints = GETEndpoints & POSTEndpoints;

const objectToBase64 = (obj: object) => {
    const jsonString = JSON.stringify(obj).replace(/\s+/g, '');
    return Buffer.from(jsonString).toString('base64').replace(/=+$/, '');
};

const baseUrl = 'https://www.speedrun.com/api/v2';

export async function get<E extends keyof GETEndpoints, P extends GETEndpoints[E]>(endpoint: E, params: P): Promise<Responses[E]> {
    const res = await fetch(`${baseUrl}/${endpoint}?_r=${objectToBase64(params)}`);
    return await res.json();
}

export async function post<E extends keyof Endpoints, P extends Endpoints[E]>(endpoint: E, params: P): Promise<E extends keyof Responses ? Responses[E] : void> {
    const res = await fetch(`${baseUrl}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    });
    return await res.json();
}