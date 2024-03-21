import { GET_PRODUCTS } from "../actionTypes";

const initialProductState = [];


export const ProductReducer = (state=initialProductState,action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
            return action?.payload ?  action.payload : [];

        default:
            return [];
    }
}



export const getProductsState = state=> state?.products;