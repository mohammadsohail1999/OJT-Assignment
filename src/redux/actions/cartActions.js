import { ADD_TO_CART, CLEAR_CART } from "../actionTypes";

function addToCart(product){

    return {
        type: ADD_TO_CART,
        payload:product
    }

}




function removefromCart(id){


    return {
    }

}


function clearCart(){


    return {
        type:CLEAR_CART
    }

}