import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, UPDATE_CART } from "../actionTypes";

const initialState = {
  items: [], // Array to hold items in the cart
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      return {
        ...state,
        items: state?.items?.filter(el=> el?.id === action?.payload?.id)?.length ? state?.items  :  [...state.items, {...action?.payload,quantity:action?.payload?.quantity || 1}],
      };

      case UPDATE_CART:

      return {
        ...state,
        items:state?.items?.map(el=> el?.id === action?.payload?.id ? action?.payload : el)
      }

    case REMOVE_FROM_CART:

    console.log("Reducer called",action);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

export default CartReducer;



export const getCartState =  state=> state?.cart;