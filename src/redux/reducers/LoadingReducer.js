import { GLOBAL_LOADER_START, GLOBAL_LOADER_STOP, PRODUCTS_LIST_LOADING_START, PRODUCTS_LIST_LOADING_STOP } from "../actionTypes";

export  const LoadingReducer = (state = {
    globalLoader:false,
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

                case GLOBAL_LOADER_START:
                    return {
                        ...state,
                        globalLoader: true,
                    }

                    case GLOBAL_LOADER_STOP:
                        return {
                            ...state,
                            globalLoader:false
                        }
    
        default:
        return state;

    }

}


export const getGlobalLoaderState =  state=> state?.loader?.globalLoader