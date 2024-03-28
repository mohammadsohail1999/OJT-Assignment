import { ADD_USER, REMOVE_USER } from "../actionTypes"


export const addUserAction = (user)=>{
    return {
      type:ADD_USER,
      payload:user,
    }
}



export const removeUserAction = (id)=>{

    return {
        type: REMOVE_USER,
        payload:id
    }

}