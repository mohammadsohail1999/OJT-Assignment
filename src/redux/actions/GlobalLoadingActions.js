import { GLOBAL_LOADER_START, GLOBAL_LOADER_STOP, PRODUCTS_LIST_LOADING_START, PRODUCTS_LIST_LOADING_STOP } from "../actionTypes"




export const GlobalLoaderStart = ()=>{
    return {
        type:GLOBAL_LOADER_START
    }
}


export const GlobalLoaderStop = ()=>{
    return {
        type:GLOBAL_LOADER_STOP
    }
}


export const ProductListLoadingStartAction = ()=>{
    return {
        type:PRODUCTS_LIST_LOADING_START,
    }
}


export const ProductListLoadingStopAction = ()=>{
    return {
        type:PRODUCTS_LIST_LOADING_STOP,
    }
}