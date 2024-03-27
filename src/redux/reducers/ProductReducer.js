import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from "../actionTypes";

const initialProductState = {
    data: [],
    isError : false
}



export const ProductReducer = (state=initialProductState,action)=>{
    switch (action.type) {

        case GET_PRODUCTS:
            return {
                ...state,
            data: action?.payload,
            isError:false,
            };

            case GET_PRODUCTS_ERROR:
                return {
                    ...state,
                    isError:true,
                 }

         default: 
            return state;
    
        }

    }



export const getProductsState = state=> state?.products;