import { Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, makeStyles } from "@material-ui/core";
import { CheckBox, Payment } from '@material-ui/icons';
import React, { useState } from "react";
import { useSelector } from "react-redux";
import TempPolicy from './shipping-policy-template.pdf'

const useStyles = makeStyles((theme) => ({
    root: {
      flexDirection: 'column',
      alignItems: 'left',
      textAlign: 'left',
      alignContent: 'left',
      maxWidth: '100%',
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
      width: '100%'
    },  
    formControl: {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      padding: theme.spacing(1),
      marginBottom:  theme.spacing(2),
    }
}));


const CheckOutRedux = () => {

    const classes = useStyles();

    //REMOVE ! BOOLEAN
    const displayCheckoutComp = useSelector(state => !state.checkOut.visibility)
    console.log('DisplayCheckOutComp?: ', displayCheckoutComp)
    
    const [checked, setChecked] = useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    return (
        <div className={classes.root} style={{ display: displayCheckoutComp ? 'flex' : 'none'}}>

            <div className={classes.header}>
                <h2>Checkout</h2>
            </div>

            {/* <Divider className={classes.dividerSection}></Divider>  */}

            <div 
                className={classes.containerPolicy}>               
                  <iframe 
                      title={'Shipping Policy'} 
                      src={TempPolicy} 
                      style={{border: 'none', width: '100%', height: '300px'}}
                    />
            </div>
         
            <div className={classes.formControl}>
              

              <FormControlLabel
                  className={classes.checkBox}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }   
                label="I have read and accepted the delivery terms"
              />

              <p style={{fontSize: 12, fontStyle: 'italic'}}>{'*Show/hide terms'}</p>
            </div>
         
            <div 
                className={classes.checkOutContainer}>

                  <PayButton enabled={checked} signedIn={true} hasItems={true}/>
               

            </div>
        

        </div>
    )
}

const PayButton = (props) => {

  if(props.enabled && props.signedIn && props.hasItems){
    return(
      <React.Fragment>
          <Button
                style={{width: '100%'}}
                variant={'contained'}
                color={'primary'}
                // className={classes.button}
                startIcon={<Payment/>}
                  onClick={() => {
                      console.log('PAYMENT INITIATED')
                    }
                  }>
                {'Pay'}
          </Button>

      </React.Fragment>
    );

  } else {
    return (
      <React.Fragment>

        <div style={{
              display: 'flex', 
              alignItems: 'center', 
              alignContent: 'center',
              width: '100%', 
              flexDirection: 'column', 
              textAlign: 'center'
              }}>

            <i style={{fontSize: 12, width: '50%'}}>You need to Accept Terms, Sign In or Add items to cart before we can process a payment.</i>
            
            <Button
                style={{width: '100%', marginTop: 15}}
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