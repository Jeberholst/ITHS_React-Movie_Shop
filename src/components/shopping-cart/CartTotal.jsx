import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        background: 'rgb(0,0,0, 0.1)',
        borderRadius: 5,
    },
    label: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 12,
        paddingBottom: 5,
        paddingTop: 5,
    },
    labelTotal: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        fontSize: 12,
        color: 'rgb(79,174,109, 0.8)',
        paddingBottom: 5,
        paddingTop: 5,
    },
    labelLeft: {
        width: '50%',
    },
    labelRight: {
        width: '50%',
        alignContent: 'right',
        alignItems: 'right',
        textAlign: 'right',
    },
    containerDetails: {
        display: 'flex',
        flexDirection: 'column',
    },
    containerTotal: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 5,
        paddingBottom: 5,
        fontWeight: 'bold'
    },
    divider: {
        background: 'rgb(0,0,0, 0.1)'
    }
}));


const CartTotal = () => {

    const classes = useStyle();
    const shoppingCartCount = useSelector(state => state.shoppingCart.listCount);
    const cost = calculatedCost(shoppingCartCount)

    return(
      <React.Fragment>
          <div className={classes.root}>
                
            <div className={classes.containerDetails}>

                <Label text={'Base amount'} num={cost.noVat}/>
                <Label text={'VAT 25%'} num={cost.VAT}/>
            

            </div>
            

            <div className={classes.containerTotal}>
                <Divider/>
                <LabelTotal text={'Total'} num={cost.total}/>
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
  
const Label = ( { text, num } ) => {

    const classes = useStyle();
    const fix = Number(num).toFixed(2)

    return (
         <div className={classes.label}>
             <div className={classes.labelLeft}>{text}</div>
             <div className={classes.labelRight}>- {fix} $</div>
         </div>
    );
};

const LabelTotal = ( { text, num } ) => {

    const classes = useStyle();
    const fix = Number(num).toFixed(2)

    return (
         <div className={classes.labelTotal}>
             <div className={classes.labelLeft}>{text}</div>
             <div className={classes.labelRight}>- {fix} $</div>
         </div>
    );
};
