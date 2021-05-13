import { makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const cartTotalStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        background: 'rgb(0,0,0, 0.1)',
        borderRadius: 5,
    },
    label: {
        marginLeft: 10,
        marginRight: 10,
        fontSize: 12,
        paddingBottom: 5,
        paddingTop: 5,
    },
    left: {
        width: '50%',
    },
    right: {
        width: '50%',
        alignContent: 'right',
        alignItems: 'right',
        textAlign: 'right',
    }
}));


const CartBillingInfo = () => {

    const classes = cartTotalStyle();

    return(
      <React.Fragment>
          <div className={classes.root}>

                <div className={classes.left}>
                    <Label text={'Name'}/>
                    <Label text={'Address'}/>
                    <Label text={'Postal Code'}/>
                    <Label text={'Country'}/>
                </div>
                
                <div className={classes.right}>
                    <Label text={'Firstname Lastname'}/>
                    <Label text={'Streetaddress 10A'}/>
                    <Label text={'666 66'}/>
                    <Label text={'Sweden'}/>
                </div>

          </div>
      </React.Fragment>
  
    );
  
};

export default CartBillingInfo;
  
const Label = ({ text }) => {

    const classes = cartTotalStyle();

    return (
        <div className={classes.label}>{text}</div>
    );
};