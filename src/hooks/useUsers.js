import { useDispatch, useSelector } from "react-redux"
import { getUsersState } from "../redux/reducers/userReducer"
import { addUserAction, removeUserAction } from "../redux/actions/userActions";

const useUsers = () => {

    const users  =  useSelector(getUsersState);
   
    const dispatch =  useDispatch();

    function checkUserExist(user){
    return Boolean(users?.filter(el=> el?.email === user?.email)?.length);
    }


    function addUser(user){
     dispatch(addUserAction(user));
    }


    function deleteUser(id){

        dispatch(removeUserAction(id));

    }

    return {
        users,
        checkUserExist,
        addUser,
        deleteUser
    }
    




}

export default useUsers