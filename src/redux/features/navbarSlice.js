import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
      menuOpen: false,
      searchResult: [],
    },
    reducers: {
      toggelMenu: (state) => { 
        state.menuOpen = !state.menuOpen
      },
      setSearchResults: (state,actions) => {
        state.searchResult = actions.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { toggelMenu, setSearchResults } = navbarSlice.actions
  
  export default navbarSlice.reducer