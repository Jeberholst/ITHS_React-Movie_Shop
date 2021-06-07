import { Button, Checkbox, FormControlLabel, makeStyles, Radio, styled } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PayButton from './PayButton'
import ShippingPolicy from './../../docs/shipping-policy.json'
import PageLableWithIcon from '../../pages/PageLabelWithIcon';
import { AccountBalance } from '@material-ui/icons';

const CustomCheckB = styled(({ color, ...other }) => <Checkbox {...other} />)({
  background: (props) =>
    props.color === 'white',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: '100%',
  padding: '0 10px',
});

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      alignItems: 'center',
      alignContent: 'center',
      paddingTop: 30,
      paddingBottom: 30,
    },
    containerPolicy: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
    },
    checkOutContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      marginTop: '5%',
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
    const [termsDisplay, setTermsDisplay] = useState(true);
    
    const handleChange = (event) => {
       setChecked(event.target.checked);
    };

    const handleDisplayTerms = () => {
        setTermsDisplay(!termsDisplay)

        return termsDisplay ? (
          <ShippingTermsText/>

        ): null
    }

    return (
        <div className={classes.root} style={{ display: displayCheckoutComp ? 'flex' : 'none'}}>

            <div className={classes.header}>
                <PageLableWithIcon {...{ text: 'Checkout', icon: <AccountBalance/>}}/>
            </div>

            <div 
                className={classes.containerPolicy}> 
                  
                   <div className={classes.sectionHeader}>
                        
                         <Button
                          variant={'contained'}
                          color={'default'}
                          style={{marginBottom: 15}}
                          onClick={() => {
                              handleDisplayTerms()
                          }}
                         
                         >{termsDisplay ? 'Show Terms' : 'Hide Terms'}</Button>   
                  </div>

                  <ShippingTermsText
                      hidden={termsDisplay} 
                    />
                  
                  <ShippingTerms
                      hidden={termsDisplay} 
                      handleChange={() => handleChange} 
                    />
             
            </div>
         
         
            <div 
                className={classes.checkOutContainer}>
                  <PayButton 
                    enabled={checked} 
                    signedIn={true} 
                    hasItems={true}
                    />
            </div>
        

        </div>
    )
}

const ShippingTermsText = ({ hidden }) => {

  const shipPolicy = ShippingPolicy.policy
 
  return(
      <div style={{border: 'none', width: '75%'}} hidden={hidden}>
        {
          shipPolicy.map((item) => (
            <React.Fragment>
              <b style={{fontSize: 14}}>{item.title}</b>
              <p style={{fontSize: 12}}>{item.text}</p>
            </React.Fragment>
          ))
          
        }
      </div>
   
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
                <CustomCheckB
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

export default CheckOutRedux;