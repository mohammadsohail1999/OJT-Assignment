import { getProductDetailService } from "../../service/productService";
import { GET_PRODUCT_DETAIL } from "../actionTypes";
import { GlobalLoaderStart, GlobalLoaderStop } from "./GlobalLoadingActions";

export const getProductDetailAction = (id) => {
    return function (dispatch,thunkargs){
        dispatch(GlobalLoaderStart());
        getProductDetailService(id).then(res=>{
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: res?.data ? res.data : null
            })
        }).finally(()=>{
            dispatch(GlobalLoaderStop());
        })
    }
}
