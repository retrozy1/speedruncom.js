import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import * as GetEndpoints from './endpoints/endpoints.get.js';
import * as PostEndpoints from './endpoints/endpoints.post.js'
import * as Responses from './responses.js';

const LANG = 'en';
const ACCEPT = 'application/json';
const BASE_USER_AGENT = 'speedrun.js';

const isBrowser = typeof window !== 'undefined';

const objectToBase64 = (obj: object) => {
    const jsonString = JSON.stringify(obj).replace(/\s+/g, '');
    return Buffer.from(jsonString).toString('base64');
}

class APIError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

export default class Client {

    axiosClient: AxiosInstance = axios.create({
        baseURL: 'https://www.speedrun.com/api/v2/',
        withCredentials: true,
        headers: {
            'Accept-Language': LANG,
            'Accept': ACCEPT,
        }
    });

    static axiosClient: AxiosInstance = axios.create({
        baseURL: 'https://www.speedrun.com/api/v2/',
        headers: {
            'Accept-Language': LANG,
            'Accept': ACCEPT,
        }
    });

    user!: string;
    pass!: string;

    constructor({ PHPSESSID, userAgent }: { PHPSESSID?: string, userAgent?: string }) {
        if (!isBrowser) this.axiosClient.defaults.headers.common['User-Agent'] = BASE_USER_AGENT + (userAgent ? `/${userAgent}` : '');

        if (PHPSESSID) {
            if (isBrowser) {
                console.error('You cannot use a PHPSESSID to authenticate in a browser environment.');
            } else {
                this.axiosClient.defaults.headers.common['Cookie'] = `PHPSESSID=${PHPSESSID}`;
            }
        }

        this.axiosClient.interceptors.response.use(
            (response: AxiosResponse) => response,
            (error: AxiosError) => {
                if (error.response) {
                    const data = error.response?.data as { error?: string };
                    throw new APIError(data?.error || 'Unknown error', error.response.status);
                }
            }
        );
    }

    async request<T>(endpoint: string, params: object = {}, method: string = 'post'): Promise<T> {
        let response: any;
        if (method === 'post') {
            response = await this.axiosClient.post<T>(endpoint, params);
        } else {
            response = await this.axiosClient.get(`${endpoint}?_r=${objectToBase64(params)}`);
        }
        
        const cookie = response.headers['set-cookie'];
        if (cookie && !isBrowser) this.axiosClient.defaults.headers.common['Cookie'] = `PHPSESSID=${cookie[0].split('=')[1].split(';')[0]}`;

        return response.data;
    }

    static async request<T>(endpoint: string, params: object = {}, method: string = 'post'): Promise<T> {
        let response: any;
        if (method === 'post') {
            response = await this.axiosClient.post<T>(endpoint, params);
        } else {
            response = await this.axiosClient.get(`${endpoint}?_r=${objectToBase64(params)}`);
        }
        
        const cookie = response.headers['set-cookie'];
        if (cookie && !isBrowser) this.axiosClient.defaults.headers.common['Cookie'] = `PHPSESSID=${cookie[0].split('=')[1].split(';')[0]}`;

        return response.data;
    }

    //Built-in endpoints for auth

    /**
     * Attempts to authorize your cookies if using a browser, or authorizes this Client if otherwise.
     * If the account has two factor authentication, you have to use `setToken` with the token sent to the account's email address.
     */
    async login(username: string, password: string) {
        this.user = username;
        this.pass = password;

        return await this.request('PutAuthLogin', {
            name: username,
            password
        });
    }

    /**
     * Attempts to authorize your cookies if using a browser, or authorizes this Client if otherwise, with the token that `login()` sent to the account's email address.
     * @param token The 5-digit code sent to your email after a successful `login()`.
     */
    async setToken(token: string) {
        return await this.request('PutAuthLogin', {
            name: this.user,
            password: this.pass,
            token
        });
    }

    /**
     * Attempts to remove the PHPSESSID cookie if using a browser, otherwise removes your Client's authentication.
     */
    async logout() {
        if (isBrowser) return await this.request('PutAuthLogout');

        delete this.axiosClient.defaults.headers.common['Cookie'];
    }

    // Endpoints (auto-generated with build-client)

}