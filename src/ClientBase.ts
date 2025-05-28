import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import * as Endpoints from './endpoints';
import * as Responses frm './responses';

const LANG = 'en';
const ACCEPT = 'application/json';
const BASE_USER_AGENT = 'speedrun.js';

class APIError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.status = status;
    }
}

export default class Client {
    private axiosClient: AxiosInstance = axios.create({
        baseURL: 'https://www.speedrun.com/api/v2/',
        withCredentials: true,
        headers: {
            'Accept-Language': LANG,
            'Accept': ACCEPT,
        }
    });

    private user: string;
    private pass: string;
    isBrowser = typeof window !== 'undefined';

    constructor({ PHPSESSID, userAgent }: { PHPSESSID?: string, userAgent?: string }) {
        if (!this.isBrowser) this.axiosClient.defaults.headers.common['User-Agent'] = BASE_USER_AGENT + (userAgent ? `/${userAgent}` : '');

        if (PHPSESSID) {
            if (this.isBrowser) {
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

    private async request<T>(endpoint: string, params: object = {}): Promise<T> {
        const response = await this.axiosClient.post<T>(endpoint, params);
        
        const cookie = response.headers['set-cookie'];
        if (cookie && !this.isBrowser) this.axiosClient.defaults.headers.common['Cookie'] = `PHPSESSID=${cookie[0].split('=')[1].split(';')[0]}`;

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
     * Attempts to remove the PHPSESSID cookie if using a browser, otherwise removes your Client's authentication
     */
    async logout() {
        if (this.isBrowser) return await this.request('PutAuthLogout');

        delete this.axiosClient.defaults.headers.common['Cookie'];
    }

    // Endpoints (auto-generated with build-client.ts)

}