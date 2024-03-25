import {createStore,applyMiddleware, combineReducers} from "redux";
import {thunk} from "redux-thunk";
import { CartReducer } from "./reducers/CartReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import {composeWithDevTools} from "@redux-devtools/extension";
import { GlobalLoadingReducer } from "./reducers/GlobalLoaderReducer";
import ThemeReducer from "./reducers/ThemeReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import categoriesReducer from "./reducers/categoriesReducer";
 


const rootReducer = combineReducers({
    cart: CartReducer,
    products:ProductReducer,
    categoriesReducer:categoriesReducer,
    // GlobalLoading: GlobalLoadingReducer,
    theme:ThemeReducer,
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["theme"],
  }
   

  const persistedReducer = persistReducer(persistConfig, rootReducer)


 export   const store = createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));
 export   const persistor = persistStore(store)
   


// export const store = createStore(rootReducer,  composeWithDevTools(applyMiddleware(thunk)));
