import { createSlice } from "@reduxjs/toolkit";

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
  })
  
  // Action creators are generated for each case reducer function
  export const { toggelMenu, setSearchResults,toggelSearch } = navbarSlice.actions
  
  export default navbarSlice.reducer