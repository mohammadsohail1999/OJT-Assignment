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
