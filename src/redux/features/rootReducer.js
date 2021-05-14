import { combineReducers } from "redux";
import { reducer as shoppingCartReducer } from './shoppingCart'
import navbarReducer from './navbarSlice'
import mainSliderReducer from './mainSliderSlice' 

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    navbar : navbarReducer,
    mainslider : mainSliderReducer,
})

export { rootReducer };