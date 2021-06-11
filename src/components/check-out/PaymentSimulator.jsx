
import { LinearProgress, makeStyles, Slide } from "@material-ui/core";
import { AttachMoneyRounded } from '@material-ui/icons';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import {  actions, PAYMENT_PROCESSING_STATE } from '../../redux/features/paymentProcessor';
import authService from '../../util/auth-service';
import { sendReceipt } from './payment-functions'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'column',
      width: '100%',
      height: '100%',
      marginTop: 10,
      marginBottom: 10,
      color: 'white',
      justifyContent: 'center',
      justifyItems: 'center',
      alignContent: 'center'
    },
    containerIcon: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerText: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    containerProgress: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        marginTop: 5,
    }

}))

const PaymentSimulator = ({ status }) => {
    
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    const cartItems = useSelector(state => state.shoppingCart.listOfMovies)
   
    let content = null;
    let displayIcon = null;

    if (status.message === PAYMENT_PROCESSING_STATE.DEFAULT.message) {
        console.log('STATUS 0', status)

    } 
    else if ( status.message ===  PAYMENT_PROCESSING_STATE.START.message) {

        console.log('STATUS 1', status)
        content = PAYMENT_PROCESSING_STATE.START

        setTimeout(function(){
                dispatch(actions.startPaymentProcess(PAYMENT_PROCESSING_STATE.VALIDATING_INFO))

            }, 1000
        );

    } 
    else if ( status.message ===  PAYMENT_PROCESSING_STATE.VALIDATING_INFO.message) {

        console.log('STATUS 2', status)
        content =  PAYMENT_PROCESSING_STATE.VALIDATING_INFO

        setTimeout(function(){
                dispatch(actions.startPaymentProcess(PAYMENT_PROCESSING_STATE.COMPLETED))
            }, 2000
        );

    } 
    else if ( status.message ===  PAYMENT_PROCESSING_STATE.COMPLETED.message) {
        
        console.log('STATUS 3', status)

        content =  PAYMENT_PROCESSING_STATE.COMPLETED
            setTimeout(function(){
                dispatch(actions.startRedirect(PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_2))

            }, 2000
        );
    } 
    else if ( status.message ===  PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_2.message) {
        
        console.log('STATUS 4', status)

        content =  PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_2
       
        setTimeout(function(){
           
            dispatch(actions.startRedirect(PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_1))
            sendReceipt(authService.getCurrentUser().uid, cartItems.length, cartItems )
            
        }, 1000
    );
    }
    else if ( status.message ===  PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_1.message) {
        
        content =  PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_1

        setTimeout(function(){
         
            dispatch(actions.startRedirect(PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_0))
            }, 1000
        );
    
    } 
    else if ( status.message ===  PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_0.message) {
       
        // displayIcon = <AttachMoneyRounded/> 
        content =  PAYMENT_PROCESSING_STATE.DISPLAY_REDIRECT_0

        setTimeout(function(){
                content =  PAYMENT_PROCESSING_STATE.COMPLETED
                history.push("/profile")
                dispatch(actions.startRedirect(PAYMENT_PROCESSING_STATE.DEFAULT))
            }, 200
        );
       
    }
    else {
        content = null;
    }

    if(content !== null){
        return (
         
            <div className={classes.root}>

                <div className={classes.containerIcon} style={{ display: displayIcon ? 'flex' : 'none'}}>
                    {displayIcon}{displayIcon}{displayIcon}
                </div>
                
                <div className={classes.containerText}>
                    <div>
                        <h3>{content.message}</h3>
                    </div>
                </div>
    
                <div className={classes.containerProgress} style={{ display: displayIcon ? 'none' : 'flex'}}>
                    <div style={{marginBottom: 15}}>
                        <i>{content.status ? content.status : ''}</i>
                        <i>{' / '}</i>
                        <i>{'6'}</i>
                    </div>
                    <LinearProgress color="secondary" />
                </div>
    
            </div>
      
          );

    } else {
        return (
            null
          );
    }
   
  }

  export default PaymentSimulator;