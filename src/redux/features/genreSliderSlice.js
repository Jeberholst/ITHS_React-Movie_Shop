
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {fetchGenre} from '../../util/ApiFetcher'
import { actions } from "./movieSection";


export const fetchGenerSlides = createAsyncThunk(
  `genre/status`,
 async (genere,thunkAPI) => {
    try{
      let response = await fetchGenre(genere)
      return {movies:response,id:genere}
    }catch(error){
      throw Error(error)
    }
  }

)

function updateSlider(oldObject, newValues){
    let newObj = Object.assign({},oldObject,newValues)
    return newObj
}

function updateItemInArray(array,itemId,updateCallbackItem){
    let updatedArray = array.map((item) => {
        
        if(item.slider !== itemId){
            return item
        }else{
            var updatedPositionItem = updateCallbackItem(item)
            
            return updatedPositionItem

        }
    })
    
    return updatedArray
}


export const genreSliderSlice = createSlice({
    name: 'genreSlider',
    initialState: {
      // truns in to sliders[{slider:"action", translateX:-3,movieList:[list of movies]}]
      sliders:[],
      translateX:-3,
    },
    reducers: {
      swipeGenre: (state,action) => {
          
       let newArray = updateItemInArray(current(state.sliders),action.payload.id, item => {
           return updateSlider(item,{translateX:item.translateX + action.payload.translateX})
       })
    
        state.sliders = newArray
       
      },
      addSlider: (state,actions) => {
        //add slider with id and translateX tracker.
        state.sliders = state.sliders.concat({slider:actions.payload,translateX:-3,movieList:[]})
      },
    
    },
    extraReducers:{
      [fetchGenerSlides.fulfilled]: (state,action) =>{ console.log(action.payload.movies)
        let newArray = updateItemInArray(current(state.sliders),action.payload.id, item => {
          return updateSlider(item,{movieList:action.payload.movies})
      })
   
       state.sliders = newArray
      
      },
      [fetchGenerSlides.rejected]:(state,action) => { console.log(action.payload) }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { swipeGenre, addSlider } = genreSliderSlice.actions
  
  export default genreSliderSlice.reducer