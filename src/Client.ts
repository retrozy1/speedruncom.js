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

    async get<T extends keyof GETEndpoints, A extends GETEndpoints[T]>(endpoint: T, params: A, axiosConfig?: AxiosRequestConfig) {
        return await this.axiosClient.get<Responses[T]>(`${endpoint}?_r=${objectToBase64(params)}`, axiosConfig);
    }

    async post<T extends keyof Endpoints, A extends Endpoints[T]>(endpoint: T, params: A, axiosConfig?: AxiosRequestConfig) {
        type Response = T extends keyof Responses ? T : void;

        return await this.axiosClient.post<Response>(endpoint, params, axiosConfig);
    }
}