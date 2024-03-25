import { TOGGLE_THEME } from "../actionTypes";

export default function ThemeReducer(state = "light",action){
    const type =  action?.type; 
    switch (type) {
        case TOGGLE_THEME:
        return state === "light" ? "dark" : "light"
        default:
            return state;
    }

}



export const  getThemeState =  state =>  state?.theme;



