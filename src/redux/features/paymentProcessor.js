import { createAction, createReducer } from "@reduxjs/toolkit";

const startPaymentProcess = createAction('start payment process');
const startValidation = createAction('start validation');
const setPaymentSuccess = createAction('payment completed');
const startRedirect = createAction('starting redirect completed');

const actions = { startPaymentProcess, startValidation, setPaymentSuccess, startRedirect };

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
  },
  DISPLAY_REDIRECT_2: {
    status: 4,
    message: 'Moving to receipt in 2 seconds',
  },
  DISPLAY_REDIRECT_1: {
    status: 5,
    message: 'Moving to receipt in 1 seconds',
  },
  DISPLAY_REDIRECT_0: {
    status: 6,
    message: 'Redirecting...',
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
  [startRedirect]: (state, action) => {
    console.log("Start red with: ", action.payload)
    const value = action.payload
    state.STATUS = value
  },  
})



export { actions, reducer, PAYMENT_PROCESSING_STATE };