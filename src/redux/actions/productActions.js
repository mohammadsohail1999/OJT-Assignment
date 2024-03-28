import { getProducts } from "../../service/productService"
import { GET_PRODUCTS, GET_PRODUCTS_ERROR } from "../actionTypes";
import { GlobalLoaderStart, GlobalLoaderStop, ProductListLoadingStartAction, ProductListLoadingStopAction } from "./GlobalLoadingActions";

export const getProductListAction = (queries="")=>async(dispatch,thunkargs)=>{
    dispatch(GlobalLoaderStart());
    getProducts(queries).then(res=>{
        dispatch(getProductsList(res?.data || []));
    }).catch(err=>{
        // console.log(err,"error");
        dispatch(getProductError());
    }).finally(()=>{
        dispatch(GlobalLoaderStop());
    })

}
 
 
 
export const getProductsList = (data=[])=>{
 
    return {
       type: GET_PRODUCTS,
       payload:data
    }
 
}

export const getProductError = ()=>{

    return {
        type:GET_PRODUCTS_ERROR,
    }

}

 