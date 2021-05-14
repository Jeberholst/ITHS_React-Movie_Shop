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


const CartTotal = () => {

    const classes = cartTotalStyle();
    const shoppingCartCount = useSelector(state => state.shoppingCart.listCount);
    const cost = calculatedCost(shoppingCartCount)

    return(
      <React.Fragment>
          <div className={classes.root}>

                <div className={classes.left}>
                    <Label text={'Items'}/>
                    <Label text={'Base amount'}/>
                    <Label text={'VAT 25%'}/>
                    <Label text={'Total'}/>
                </div>
                
                <div className={classes.right}>
                    <Label text={shoppingCartCount + ' pcs'}/>
                    <Label type={1} text={cost.noVat}/>
                    <Label type={1} text={cost.VAT}/>
                    <Label type={1} text={cost.total}/>
                </div>

          </div>
      </React.Fragment>
  
    );
  
};

export default CartTotal;

function calculatedCost(count){
    
    try {
        const total = (count * 20.00)
        const noVat = (total * 0.8)
        const VAT = (total * 0.2)

        return createCost(noVat, VAT, total)
        
    } catch (error) {
        console.log('Error', error)
    }
    return createCost('', '', '')
}

function createCost(noVat, VAT, total){
    return {
        noVat,
        VAT,
        total
    };
}
  
const Label = ({ type, text }) => {

    const classes = cartTotalStyle();

    if(type === 1){
        const num = Number(text).toFixed(2)
        return (
            <div className={classes.label}>{num} $</div>
        );
    } else {
        return (
            <div className={classes.label}>{text}</div>
        );
    }
};