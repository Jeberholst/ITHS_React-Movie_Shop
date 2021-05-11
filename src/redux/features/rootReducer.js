import { combineReducers } from "redux";
import { reducer as shoppingCartReducer } from './shoppingCart'

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
})

export { rootReducer };