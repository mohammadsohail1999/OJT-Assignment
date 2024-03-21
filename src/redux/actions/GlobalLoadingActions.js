import { PRODUCTS_LIST_LOADING_START, PRODUCTS_LIST_LOADING_STOP } from "../actionTypes"

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