import {createStore,applyMiddleware, combineReducers} from "redux";
import {thunk} from "redux-thunk";
import { CartReducer } from "./reducers/CartReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import {composeWithDevTools} from "@redux-devtools/extension";


const rootReducer = combineReducers({
    cart: CartReducer,
    products:ProductReducer,
})



export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));
