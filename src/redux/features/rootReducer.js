import { combineReducers } from "redux";
import { reducer as shoppingCartReducer } from './shoppingCart'
import navbarReducer from './navbarSlice';
import { reducer as snackBarsReducer } from './snackbars'
import { reducer as firebaseUserReducer } from './firebaseUser'

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    navbar: navbarReducer,
    snackbar: snackBarsReducer,
    firebaseUser: firebaseUserReducer,
})

export { rootReducer };