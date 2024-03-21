import { PRODUCTS_LIST_LOADING_START, PRODUCTS_LIST_LOADING_STOP } from "../actionTypes";

export  const GlobalLoadingReducer = (state = {
    productListingLoading: false,
    productDetailLoading: false,
},action)=>{

    const type =  action?.type;

    switch (type) {
        case PRODUCTS_LIST_LOADING_START:
            return {
                ...state,
                productListingLoading:true,
            }

            case PRODUCTS_LIST_LOADING_STOP:
                return {
                    ...state,
                    productListingLoading:false
                }
    
        default:
        return state;

    }

}