import {createStore,applyMiddleware, combineReducers} from "redux";
import {thunk} from "redux-thunk";
import { ProductReducer } from "./reducers/ProductReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import { LoadingReducer } from "./reducers/LoadingReducer";
import ThemeReducer from "./reducers/ThemeReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import categoriesReducer from "./reducers/categoriesReducer";
 
import { ProductDetailReducer } from "./reducers/ProductDetailReducer";
import authReducer from "./reducers/authReducer";
import CartReducer from "./reducers/CartReducer";
import userReducer from "./reducers/userReducer";


const rootReducer = combineReducers({
    cart: CartReducer,
    products:ProductReducer,
    categoriesReducer:categoriesReducer,
    loader: LoadingReducer,
    // GlobalLoading: GlobalLoadingReducer,
    theme:ThemeReducer,
    productDetail: ProductDetailReducer,
    auth: authReducer,
    users:userReducer,
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["theme","auth","cart","users"],
  }
   

  const persistedReducer = persistReducer(persistConfig, rootReducer)


 export   const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
 export   const persistor = persistStore(store)
   


