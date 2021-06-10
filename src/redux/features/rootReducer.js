import { combineReducers } from "redux";
import { reducer as shoppingCartReducer } from './shoppingCart'
import { reducer as snackBarsReducer } from './snackbars'
import { reducer as movieSectionReducer } from './movieSection'
import { reducer as checkOutReducer } from './checkOut'
import { reducer as paymentProcessorReducer } from './paymentProcessor'
import { reducer as fetcherApiReducer } from './fetcherApi'
import navbarReducer from './navbarSlice'
import mainSliderReducer from './mainSliderSlice' 
import genreSliderReducer from './genreSliderSlice'
import genrePageReducer from './genrePageSlice'
import filterBarReducer from './filterBarSlice'
import errorHandlingReducer from './ErrorHandlingSlice'
import loadingHandlingReducer from './loadingHandlingSlice'

const rootReducer = combineReducers({
    shoppingCart: shoppingCartReducer,
    navbar: navbarReducer,
    snackbar: snackBarsReducer,
    movieSection: movieSectionReducer,
    mainslider : mainSliderReducer,
    genreSlider: genreSliderReducer,
    checkOut: checkOutReducer,
    paymentProcessor: paymentProcessorReducer,
    fetcherApi: fetcherApiReducer,
    genrePage: genrePageReducer,
    filterBar: filterBarReducer,
    ErrorHandling: errorHandlingReducer,
    loadingHandling: loadingHandlingReducer,
})

export { rootReducer };