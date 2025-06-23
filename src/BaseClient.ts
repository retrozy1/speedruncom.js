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

export interface config {
    PHPSESSID?: string;
    userAgent?: string;
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

    private username!: string;
    private password!: string;

    private headers = this.axiosClient.defaults.headers.common;

    constructor(config?: config) {
        if (config) this.config(config);

        this.axiosClient.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => {
                const data = error.response.data as { error?: string };
                throw new APIError(data.error || 'Unknown error', error.response.status);
            }
        );
    }

    config(config: config) {
        if (!isBrowser) this.headers['User-Agent'] = BASE_USER_AGENT + (config.userAgent ? `/${config.userAgent}` : '');

        if (config.PHPSESSID) {
            if (isBrowser) {
                console.error('You cannot use a PHPSESSID to authenticate in a browser environment.');
            } else {
                this.headers['Cookie'] = `PHPSESSID=${config.PHPSESSID}`;
            }
        }
    }

    async request<T>(endpoint: string, params: object = {}): Promise<T> {
        const response = await this.axiosClient.post<T>(endpoint, params);
        
        const cookie = response.headers['set-cookie'];
        if (cookie && !isBrowser) this.headers['Cookie'] = cookie[0].split(';')[0];

        return response.data;
    }

    static async request<T>(endpoint: string, params: object = {}): Promise<T> {
        return (await this.axiosClient.get(`${endpoint}?_r=${objectToBase64(params)}`)).data;
    }

    /**
     * Attempts to remove the PHPSESSID cookie if using a browser, otherwise removes your Client's authentication.
     */
    async logout() {
        if (isBrowser) return await this.request('PutAuthLogout');

        delete this.headers['Cookie'];
    }

    // Endpoints (auto-generated with build-client)
}