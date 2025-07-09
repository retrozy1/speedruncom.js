import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import * as GetEndpoints from './endpoints/endpoints.get.js';
import * as PostEndpoints from './endpoints/endpoints.post.js'
import * as Responses from './responses.js';

const BASE_USER_AGENT = 'speedruncom.js';
const BASE_URL = 'https://www.speedrun.com/api/v2/';
const HEADERS = {
    'Accept-Language': 'en',
    'Accept': 'application/json'
}

const isBrowser = typeof window !== 'undefined';

const objectToBase64 = (obj: object) => {
    const jsonString = JSON.stringify(obj).replace(/\s+/g, '');
    return Buffer.from(jsonString).toString('base64');
}

export class APIError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

export default class Client {

    /**
     * `AxiosInstance` used on instance-called methods (called with `POST`).
     */
    axiosClient = axios.create({
        baseURL: BASE_URL,
        method: 'POST',
        withCredentials: true,
        headers: HEADERS
    });

    /**
     * `AxiosInstance` used on Client-called methods (called with `GET`).
     */
    static axiosClient = axios.create({
        baseURL: BASE_URL,
        method: 'GET',
        headers: HEADERS
    });

    async request<T>(endpoint: string, params: object = {}): Promise<T> {
        const response = await this.axiosClient.post<T>(endpoint, params);
        
        const cookie = response.headers['set-cookie'];
        if (cookie && !isBrowser) this.axiosClient.defaults.headers['Cookie'] = cookie[0].split(';')[0];

        return response.data;
    }

    static async request<T>(endpoint: string, params: object = {}): Promise<T> {
        return (await this.axiosClient.get(`${endpoint}?_r=${objectToBase64(params)}`)).data;
    }

    // Endpoints (auto-generated with build-client)
}