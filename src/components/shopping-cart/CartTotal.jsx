import { makeStyles} from "@material-ui/core";
import React from "react";

const cartTotalStyle = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        marginBottom: 10,
    },
    label: {
        marginLeft: 10,
        padding: 3,
        fontSize: 12,
    },
}));


const CartTotal = () => {

    const classes = cartTotalStyle();
    
    return(
      <React.Fragment>
          <div className={classes.root}>
                

            <Label text={'Total'}></Label>
            <Label text={'VAT'}></Label>
          </div>
      </React.Fragment>
  
    );
  
};

export default CartTotal;
  
const Label = ({ text }) => {

    const classes = cartTotalStyle();

    return (
        <div className={classes.label}>{text}</div>
    );
};