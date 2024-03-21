<<<<<<< HEAD
// import { getProducts } from '../services/productService';

import { getProducts } from "../../service/productService";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await getProducts();
      console.log('API Response:', response.data); // Log the data to console
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error.message });
    }
  };
};
=======
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
>>>>>>> 06bc68b523c5525c408cc849644ed5e8cd2d24d3
