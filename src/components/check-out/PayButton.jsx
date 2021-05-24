import { Button, LinearProgress, makeStyles } from "@material-ui/core";
import { Payment } from '@material-ui/icons';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  actions, PAYMENT_PROCESSING_STATE } from '../../redux/features/paymentProcessor';


const PayButton = (props) => {

    const [startPayment, setStartPayment] =  useState(false)
    const [start, setStart] =  useState(false)
    const status = useSelector(state => state.paymentProcessor.STATUS);
    const dispatch = useDispatch();

    console.log(startPayment)


    const startPayProcess = () => {
    
        if(!startPayment){
            console.log('Starting process')
            dispatch(actions.startPaymentProcess(PAYMENT_PROCESSING_STATE.START))
        }
    }

    if(props.enabled && props.signedIn && props.hasItems){
      return(
        <React.Fragment>
                
              <div style={{
                        display: 'flex', 
                        width: '100%', 
                        flexDirection: 'column', 
                        textAlign: 'center',
                        alignItems: 'center'
                        }}>

                <div style={{display: startPayment, flexDirection: 'row', width: '75%'}}>
                    <PaymentSimulator status={  status}/>      
                </div>

                <Button
                      style={{width: '75%'}}
                      variant={'contained'}
                      color={'primary'}
                      // className={classes.button}
                      startIcon={<Payment/>}
                        onClick={() => (
                            startPayProcess()
                        )}>
                      {'Make Payment'}
                </Button>
                
            </div>
  
        </React.Fragment>
      );
  
    } else {
      return (
        <React.Fragment>
  
          <div style={{
                display: 'flex', 
                width: '100%', 
                flexDirection: 'column', 
                textAlign: 'center',
                alignItems: 'center'
                }}>
  
              <i style={{fontSize: 12, maxWidth: '75%'}}>You need to accept the Shipping Terms before we can process a payment.</i>
              
              <Button
                  style={{width: '75%', marginTop: 15}}
                  disabled
                  variant={'contained'}
                  color={'default'}
                  startIcon={<Payment/>}>
                    {'Pay'}
                    
            </Button>
          </div>
        </React.Fragment>
        
      );
    }

}

export default PayButton;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'column',
      width: '100%',
      height: '100%',
      marginTop: 10,
      marginBottom: 10,
      color: 'white'
    }
}))
setTimeout(function(){
    
    
    }, 1000
);

const PaymentSimulator = ({status}) => {
    const classes = useStyles();

    const dispatch = useDispatch();
   
    let content = null;

    if (status.message === PAYMENT_PROCESSING_STATE.DEFAULT.message) {

       // content = PAYMENT_PROCESSING_STATE.DEFAULT.message
        console.log('STATUS 1', status)

    } else if ( status.message ===  PAYMENT_PROCESSING_STATE.START.message) {

       // console.log('STATUS 2', status)
        content = PAYMENT_PROCESSING_STATE.START
 
        setTimeout(function(){
                dispatch(actions.startValidation(PAYMENT_PROCESSING_STATE.VALIDATING_INFO))
    
            }, 3000
        );

    } else if ( status.message ===  PAYMENT_PROCESSING_STATE.VALIDATING_INFO.message) {
        //console.log('STATUS 3', status)
        content =  PAYMENT_PROCESSING_STATE.VALIDATING_INFO


        setTimeout(function(){
                dispatch(actions.setPaymentSuccess(PAYMENT_PROCESSING_STATE.COMPLETED))
    
            }, 3000
        );

    } else if ( status.message ===  PAYMENT_PROCESSING_STATE.COMPLETED.message) {
        content =  PAYMENT_PROCESSING_STATE.COMPLETED
        setTimeout(function(){
            dispatch(actions.setPaymentSuccess(PAYMENT_PROCESSING_STATE.DEFAULT))

        }, 3000
    );
    } else {
        content = null;
    }

    if(content !== null){
        return (
            <div className={classes.root}>
                <h3>{content.message}</h3>
                <i>{content.status} / 3</i>
              <LinearProgress color="secondary" />
            </div>
          );

    } else {
        return (
            null
          );
    }
   
  }