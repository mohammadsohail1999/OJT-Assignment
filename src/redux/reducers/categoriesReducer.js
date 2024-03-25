import { GET_PRODUCT_CATEGORIES } from "../actionTypes";

export default function (state =  {
    productCategories:[]
},action){

    switch (action?.type) {
        case GET_PRODUCT_CATEGORIES:

        return {
            ...state,
            productCategories:action?.payload
        }

        default:
            return state;
    }

}


export const getProductCategoryState =  state=> state?.categoriesReducer?.productCategories;