import { fakeStoreService } from "./axiosInstance"

export const getProducts =  (query)=>{
    return fakeStoreService.get(`/products${query}`)
}

export const getProductDetailService =  (id)=>{
    return fakeStoreService.get(`/products/${id}`)
}


