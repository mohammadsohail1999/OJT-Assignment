import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART } from "../actionTypes";

function addToCart(product){
    return {
        type: ADD_TO_CART,
        payload:product
    }
}

function updateCart(product){
    return {
        type: UPDATE_CART,
        payload:product
    }
}




function removefromCartAction(id){
    return {
        type:REMOVE_FROM_CART,
        payload:id,
    }
}


function clearCart(){
    return {
        type:CLEAR_CART
    }
}


export {addToCart, clearCart,removefromCartAction,updateCart}