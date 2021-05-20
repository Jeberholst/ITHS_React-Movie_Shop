
import { createSlice, current } from "@reduxjs/toolkit";




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
        state.sliders = state.sliders.concat({slider:actions.payload,translateX:-3})
      },
    
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { swipeGenre, addSlider } = genreSliderSlice.actions
  
  export default genreSliderSlice.reducer