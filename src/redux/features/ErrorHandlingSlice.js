import { createSlice } from '@reduxjs/toolkit'

export const errorHandlingSlice = createSlice({
  name: 'ErrorHandling',
  initialState: {
    ErrorState: false
  },
  reducers: {
    setError: (state, action) => {
      state.ErrorState = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const {setError } = errorHandlingSlice.actions

export default errorHandlingSlice.reducer