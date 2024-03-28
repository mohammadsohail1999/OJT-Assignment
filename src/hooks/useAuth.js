import { useDispatch, useSelector } from "react-redux"
import { getAuthState } from "../redux/reducers/authReducer"
import { logoutSuccess } from "../redux/actions/authActions";

const useAuth = () => {

    const {user,isAuthenticated}  =  useSelector(getAuthState);

    const dispatch =  useDispatch();


    const logout =  ()=>{
        dispatch(logoutSuccess());
    }


    return {
        logout,
        user,
        isAuthenticated,
    }

}

export default useAuth;