import { Grid, makeStyles, TableCell, TableContainer, TableRow} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const cartTotalStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
    },
    label: {
        marginLeft: 10,
        padding: 3,
        fontSize: 12,
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


const CartTotal = () => {

    const classes = cartTotalStyle();
    const shoppingCartCount = useSelector(state => state.shoppingCart.listCount);
    
    return(
      <React.Fragment>
          <div className={classes.root}>

                <div className={classes.left}>
                    <Label text={'Items amount'}/>
                    <Label text={'Base amount'}/>
                    <Label text={'VAT 25%'}/>
                    <Label text={'Total'}/>
                </div>
                
                <div className={classes.right}>
                    <Label text={shoppingCartCount}/>
                    <Label text={'80.00 kr'}/>
                    <Label text={'20.00 kr'}/>
                    <Label text={'100.00 kr'}/>
                </div>

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