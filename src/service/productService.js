import { fakeStoreService } from "./axiosInstance"

export const getProducts =  (query)=>{
    return fakeStoreService.get(`/products`)
}