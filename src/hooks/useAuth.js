import { useDispatch, useSelector } from "react-redux"
import { getAuthState } from "../redux/reducers/authReducer"
import { logoutSuccess } from "../redux/actions/authActions";
import { useEffect, useState } from "react";
import { getUsersState } from "../redux/reducers/userReducer";

const useAuth = () => {

    const {user,isAuthenticated}  =  useSelector(getAuthState);

    const users  =  useSelector(getUsersState);

    const dispatch =  useDispatch();


    const [userDetail,setUserDetail]  =  useState(null);

    useEffect(()=>{
        if(user){
         let data  =  users?.filter(el=> el?.email ===  user)?.length  ?    users?.filter(el=> el?.email ===  user)[0]   :   null;
         setUserDetail(data);
        }
    },[user])

    


    const logout =  ()=>{
        dispatch(logoutSuccess());
    }


    return {
        logout,
        user,
        isAuthenticated,
        userDetail,
    }

    

}

export default useAuth;