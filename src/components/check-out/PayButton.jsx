import { Button } from "@material-ui/core";
import { Payment } from '@material-ui/icons';
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {  actions, PAYMENT_PROCESSING_STATE } from '../../redux/features/paymentProcessor';
import PaymentSimulator from './PaymentSimulator'

const PayButton = (props) => {

    const [startPayment, setStartPayment] =  useState(false)
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