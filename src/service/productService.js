import { fakeStoreService } from "./axiosInstance"

export const getProducts =  (query)=>{
    return fakeStoreService.get(`/products`)
}

export const getProductDetailService =  (id)=>{
    return fakeStoreService.get(`/products/${id}`)
}


