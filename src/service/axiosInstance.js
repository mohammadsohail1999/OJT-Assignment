import axios from "axios";

export const fakeStoreService = axios.create({
    baseURL:'https://fakestoreapi.com',
    timeout:5000
})