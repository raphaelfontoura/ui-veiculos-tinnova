import axios, { Method } from "axios";

type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";

export const makeRequest = ({ method = "GET", url, data, params }:RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params
    });
}