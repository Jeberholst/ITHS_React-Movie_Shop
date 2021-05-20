import { combineReducers } from "redux";
import { reducer as shoppingCartReducer } from './shoppingCart'
import { reducer as snackBarsReducer } from './snackbars'
import { reducer as movieSectionReducer } from './movieSection'
import navbarReducer from './navbarSlice'
import mainSliderReducer from './mainSliderSlice' 
import genreSliderReducer from './genreSliderSlice'

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    navbar: navbarReducer,
    snackbar: snackBarsReducer,
    movieSection: movieSectionReducer,
    mainslider : mainSliderReducer,
    genreSlider: genreSliderReducer,
})

export { rootReducer };