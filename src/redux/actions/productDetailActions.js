import { getProductDetailService } from "../../service/productService";
import { GET_PRODUCT_DETAIL } from "../actionTypes";

export const getProductDetailAction = (id) => {

    return function (dispatch,thunkargs){

        getProductDetailService(id).then(res=>{
            dispatch({
                type: GET_PRODUCT_DETAIL,
                payload: res?.data ? res.data : null
            })
        })


    }

}
