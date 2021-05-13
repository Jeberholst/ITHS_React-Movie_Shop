import { combineReducers } from "redux";
import { reducer as shoppingCartReducer } from './shoppingCart'
import navbarReducer from './navbarSlice' 

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    navbar : navbarReducer,
})

export { rootReducer };