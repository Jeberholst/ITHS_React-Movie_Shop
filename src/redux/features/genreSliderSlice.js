
import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {fetchGenre} from '../../util/ApiFetcher'



export const fetchGenerSlides = createAsyncThunk(
  `genre/status`,
 async (action,thunkAPI) => {
    try{
      let response = await fetchGenre(action.genere,action.amount)
      return {movies:response,id:action.genere}
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
      translateX:10,
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
        state.sliders = state.sliders.concat({slider:actions.payload,translateX:-100,movieList:[],width:0})
      },
      setWidth:(state,action) => {
        let w = window.innerWidth > 1100 ? ((window.innerWidth*1.20) * 0.15 + 15) * state.sliders.find( obj => obj.slider === action.payload.id ).movieList.length : (window.innerWidth * 0.30 + 15.5) * state.sliders.find( obj => obj.slider === action.payload.id ).movieList.length
        let translate = (state.sliders.find( obj => obj.slider === action.payload.id ).translateX * -1) > w/2 ? (w/2) * -1 + 45 : state.sliders.find( obj => obj.slider === action.payload.id ).translateX
        console.log(w,(state.sliders.find( obj => obj.slider === action.payload.id ).translateX * -1))
        let newArray = updateItemInArray(current(state.sliders),action.payload.id, item => {
          return updateSlider(item,{width:w,translateX:translate})
      })
        
       state.sliders = newArray
       

      }
    
    },
    extraReducers:{
      [fetchGenerSlides.fulfilled]: (state,action) =>{
        console.log("fetch done") 
        let w = window.innerWidth > 1100 ? ((window.innerWidth*1.20) * 0.15 + 15) * action.payload.movies.length : (window.innerWidth * 0.30 + 15.5) * action.payload.movies.length
        let newArray = updateItemInArray(current(state.sliders),action.payload.id, item => {
          return updateSlider(item,{movieList:action.payload.movies,width:w})
      })
   
       state.sliders = newArray
      
      },
      [fetchGenerSlides.rejected]:(state,action) => { console.log(action.payload) }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { swipeGenre, addSlider, setWidth } = genreSliderSlice.actions
  
  export default genreSliderSlice.reducer