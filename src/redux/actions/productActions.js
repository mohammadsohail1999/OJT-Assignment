import { getProducts } from "../../service/productService"
import { GET_PRODUCTS } from "../actionTypes";
import { ProductListLoadingStartAction, ProductListLoadingStopAction } from "./GlobalLoadingActions";

export const getProductListAction = (queries)=>async(dispatch,thunkargs)=>{

    // dispatch(ProductListLoadingStartAction());

    getProducts("").then(res=>{
        console.log(res?.data,"res");
        dispatch(getProductsList(res?.data || []));
    }).catch(err=>{
        console.log(err,"error");
    }).finally(()=>{
        // dispatch(ProductListLoadingStopAction());
    })
}



export const getProductsList = (data=[])=>{

    return {
       type: GET_PRODUCTS,
       payload:data
    }

}