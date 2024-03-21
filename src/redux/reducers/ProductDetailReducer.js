// import { GET_PRODUCTS } from "../actionTypes";

import { GET_PRODUCT_DETAIL } from "../actionTypes";

const initialProductState = null;


export const ProductDetailReducer = (state=initialProductState,action)=>{
    switch (action.type) {
        case GET_PRODUCT_DETAIL:
            return action.payload;

        default:
            return state;
    }
}