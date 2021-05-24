import { createAction, createReducer } from "@reduxjs/toolkit";

const startPaymentProcess = createAction('start payment process');
const startValidation = createAction('start validation');
const setPaymentSuccess = createAction('payment completed');

const actions = { startPaymentProcess, startValidation, setPaymentSuccess };


const PAYMENT_PROCESSING_STATE = 
{
  DEFAULT: {
    status: 0,
    message: 'default',
  },
  START: {
    status: 1,
    message: 'Started payment processing',
  },
  VALIDATING_INFO: {
    status: 2,
    message: 'Started payment validation',
  },
  COMPLETED: {
    status: 3,
    message: 'Payment completed, thank you!',
  }
}

const initialState = {
    STATUS : PAYMENT_PROCESSING_STATE.DEFAULT,
}

const reducer = createReducer(initialState, {
  [startPaymentProcess]: (state, action) => {
      console.log("Start payment with: ", action.payload)
      const value = action.payload
      state.STATUS = value
  },  
  [startValidation]: (state, action) => {
      console.log("Start validation: ", action.payload)
      const value = action.payload
      state.STATUS = value
  },
  [setPaymentSuccess]: (state, action) => {
    console.log("Start validation: ", action.payload)
    const value = action.payload
    state.STATUS = value
  }

})



export { actions, reducer, PAYMENT_PROCESSING_STATE };