import axios, { Axios } from "axios";

export const Api = axios.create({
    baseURL: 'http://localhost:8080/api/v1/',
    headers: {
        'Content-Type': 'application/json'
    }
})
