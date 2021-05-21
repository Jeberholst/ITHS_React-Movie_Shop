import { Button, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, makeStyles } from "@material-ui/core";
import { CheckBox, Payment } from '@material-ui/icons';
import React, { useState } from "react";
import { useSelector } from "react-redux"

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
    cartItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    checkOutContainer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: '100%'
    },  
    formControl: {
      // margin: theme.spacing(1),
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

            <Divider className={classes.dividerSection}></Divider> 
         

            <div className={classes.formControl}>

              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                  }   
                label="I have read and accepted the delivery terms"
              />

              <p style={{fontSize: 12}}>Leveransvilkor</p>
            </div>
         
        
            {/* <Divider className={classes.dividerSection}></Divider>  */}

            <div 
                className={classes.checkOutContainer}>

                  <Button
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

            </div>
        
            {/* <Divider className={classes.dividerSection}></Divider>  */}


        </div>
    )
}

export default CheckOutRedux;