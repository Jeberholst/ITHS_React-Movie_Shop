import { Button, Checkbox, FormControlLabel, makeStyles } from "@material-ui/core";
import { Payment } from '@material-ui/icons';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TempPolicy from './shipping-policy-template.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      alignContent: 'center',
      height: '100%',
    },
    dividerSection: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    cartListItems: {
      width: '100%',
    },
    containerPolicy: {
      width: '100%',
    },
    cartItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    checkOutContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginTop: '5%'
    },
    sectionHeader: {
      width: '100%',
      textIndent: 5,
    }
}));


const CheckOutRedux = () => {

    const classes = useStyles();
    const displayCheckoutComp = useSelector(state => !state.checkOut.visibility)
    // console.log('DisplayCheckOutComp?: ', displayCheckoutComp)
    
    const [checked, setChecked] = useState(false);
    
    const [displayTerms, setDisplayTerms] = useState(({
        hidden: true, 
        text: 'Show Terms'
    }));

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const handleDisplayTerms = () => {
        setDisplayTerms({
          ...displayTerms,
          hidden: !displayTerms.hidden,
          text: !displayTerms.hidden ? 'Show Terms' : 'Hide Terms'
        })
    }

    return (
        <div className={classes.root} style={{ display: displayCheckoutComp ? 'flex' : 'none'}}>

            <div className={classes.header}>
                <h2>Checkout</h2>
            </div>

            <div 
                className={classes.containerPolicy}> 
                  
                   <div className={classes.sectionHeader}>
                         <Button
                          variant={'contained'}
                          color={'default'}
                          style={{marginBottom: 15}}
                          onClick={() => {
                             handleDisplayTerms();
                          }}
                         
                         >{displayTerms.text}</Button>   
                  </div>
                         
                  <ShippingTermsIFrame hidden={displayTerms.hidden}/>
                  
                  <ShippingTerms 
                      checked={checked} 
                      handleChange={() => handleChange} 
                    />
             
            </div>
         
         
            <div 
                className={classes.checkOutContainer}>
                  <PayButton enabled={checked} signedIn={true} hasItems={true}/>
            </div>
        

        </div>
    )
}

const ShippingTermsIFrame = ({ hidden }) => {

  return(

      <iframe 
        title={'Shipping Policy'} 
        src={TempPolicy} 
        hidden={hidden}
        style={{border: 'none', width: '100%', minHeight: '300px'}}
      />

  );

};


const ShippingTerms = ({ checked, handleChange}) => {

  const style = makeStyles((theme) => ({  
      formControl: {
        padding: theme.spacing(1),
        marginBottom:  theme.spacing(2),
      }
  }));

  return(

        <div className={style.formControl}>
                  
          <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange()}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }   
            label="I have read and accepted the Shipping terms"
          />

      </div>

  );

};

const PayButton = (props) => {

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
              <Button
                    style={{width: '75%'}}
                    variant={'contained'}
                    color={'primary'}
                    // className={classes.button}
                    startIcon={<Payment/>}
                      onClick={() => {
                          console.log('PAYMENT INITIATED')
                        }
                      }>
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

export default CheckOutRedux;