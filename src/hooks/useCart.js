import { useDispatch, useSelector } from 'react-redux'
import { getCartState } from '../redux/reducers/CartReducer'
import { removefromCartAction, updateCart } from '../redux/actions/cartActions';
import { REMOVE_FROM_CART } from '../redux/actionTypes';

const useCart = () => {
    const {items}  =  useSelector(getCartState);

    const dispatch  =  useDispatch();

    const incrementQuantity = item => {
        dispatch(
          updateCart({
            ...item,
            quantity: item?.quantity + 1 || 1,
          }),
        )
      }
    
      const decrementQuantity = item => {
        dispatch(
          updateCart({
            ...item,
            quantity: item?.quantity - 1 || 1,
          }),
        )
      }


      const removeFromCart = itemId => {


        dispatch(removefromCartAction(itemId))
     
     }





    

    return {
        items,
        incrementQuantity,
        decrementQuantity,
        removeFromCart
    }
}

export default useCart