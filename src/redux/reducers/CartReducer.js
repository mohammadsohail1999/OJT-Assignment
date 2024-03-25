import { ADD_TO_CART, CLEAR_CART, GET_PRODUCTS, REMOVE_FROM_CART } from "../actionTypes";

const initialCartState = [];


export const CartReducer = (state=initialCartState,action)=>{
    switch (action.payload) {
        case ADD_TO_CART:

        return state;
            
            case REMOVE_FROM_CART:
                return [];
      
                case CLEAR_CART:
                    return [];

        default:
            return [];
    }
}

 
export const getCartState = state => state?.cart