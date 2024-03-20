import { GET_PRODUCTS } from "../actionTypes";

const initialProductState = [];


export const ProductReducer = (state=initialProductState,action)=>{
    switch (action.payload) {
        case GET_PRODUCTS:
            return [];

        default:
            return [];
    }
}