import { ADD_USER, REMOVE_USER } from "../actionTypes";

export default function(state = [],action){

    switch (action?.type) {
        case ADD_USER:

         return [...state,action?.payload];


         case  REMOVE_USER:
            return state.filter(el=>  el?.id !== action?.payload);

    
        default:
            return state;

      }

}


export const getUsersState = state =>  state?.users



