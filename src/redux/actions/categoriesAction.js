import { fakeStoreService } from "../../service/axiosInstance"
import { GET_PRODUCT_CATEGORIES } from "../actionTypes";

export const getCategoriesAction = ()=>async(dispatch,thunkArgs)=>{


       fakeStoreService.get("/products/categories").then(res=>{
        dispatch({
            type:GET_PRODUCT_CATEGORIES,
            payload:res?.data || []
        })
       }).catch((err)=>{
        console.log(err);
       });
    

}