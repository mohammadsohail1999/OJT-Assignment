import { getProducts } from "../../service/productService"
import { GET_PRODUCTS } from "../actionTypes";
import { ProductListLoadingStartAction, ProductListLoadingStopAction } from "./GlobalLoadingActions";

export const getProductListAction = (queries="")=>async(dispatch,thunkargs)=>{
    getProducts(queries).then(res=>{
        dispatch(getProductsList(res?.data || []));
    }).catch(err=>{
        console.log(err,"error");
    }).finally(()=>{
    })
}



export const getProductsList = (data=[])=>{

    return {
       type: GET_PRODUCTS,
       payload:data
    }

}
