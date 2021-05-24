import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {listPopular,fetchers} from '../../mockData/mock-data-fetcher'

 
export const fetchSearchResult = createAsyncThunk(
  'navbar/searchStatus', 
  async (search, thunkAPI) => {
   try{
     fetchers.fetchPopular()
     let response = listPopular
     return response
   }catch(error){
      throw Error(error)
   }

}
)

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
      menuOpen: false,
      searchbarOpen:false,
      searchResult: [],
    },
    reducers: {
      toggelMenu: (state) => { 
        state.menuOpen = !state.menuOpen
      },
      setSearchResults: (state,actions) => {
        state.searchResult = actions.payload
      },
      toggelSearch: (state) => {
        state.searchbarOpen = !state.searchbarOpen
        state.searchResult = [];
      },
    },
    extraReducers:{
      [fetchSearchResult.fulfilled]: (state,action) => {
        state.searchResult = action.payload
      },
      [fetchSearchResult.rejected]:(state,action) => {
        console.log(action.type)
      }
    }

  })
  
  
  // Action creators are generated for each case reducer function
  export const { toggelMenu, setSearchResults,toggelSearch } = navbarSlice.actions
  
  export default navbarSlice.reducer