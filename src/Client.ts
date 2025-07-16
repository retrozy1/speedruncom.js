import axios, { AxiosRequestConfig } from 'axios';
import GETEndpoints from './endpoints/endpoints.get.js';
import POSTEndpoints from './endpoints/endpoints.post.js'
import Responses from './responses.js';

type Endpoints = GETEndpoints & POSTEndpoints;

const objectToBase64 = (obj: object) => {
    const jsonString = JSON.stringify(obj).replace(/\s+/g, '');
    return Buffer.from(jsonString).toString('base64');
};

export default class Client {
    axiosClient = axios.create({
        baseURL: 'https://www.speedrun.com/api/v2/',
        headers: {
            'Accept-Language': 'en',
            'Accept': 'application/json'
        },
        withCredentials: true
    });

    async get<E extends keyof GETEndpoints, P extends GETEndpoints[E]>(endpoint: E, params: P, axiosConfig?: AxiosRequestConfig) {
        return await this.axiosClient.get<Responses[E]>(`${endpoint}?_r=${objectToBase64(params)}`, axiosConfig);
    }

    async post<E extends keyof Endpoints, P extends Endpoints[E]>(endpoint: E, params: P, axiosConfig?: AxiosRequestConfig) {
        return await this.axiosClient.post<E extends keyof Responses ? Responses[E] : void>(endpoint, params, axiosConfig);
    }
}