import axios, { AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0c3544fc99424f5f93a72f50fd56779d',
    },
});

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then(response => response.data);
    }

}

export default APIClient;
