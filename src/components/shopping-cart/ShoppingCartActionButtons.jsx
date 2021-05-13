import { Button, makeStyles} from "@material-ui/core";
import { AddShoppingCartRounded, DeleteRounded, RemoveShoppingCartRounded, ShopRounded, RemoveCircleRounded } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/features/shoppingCart";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
}));

const BTN_VARIANTS = {
    outlined: 'outlined',
    contained: 'contained',
    none: '',
}

const BTN_COLORS = {
    primary: 'primary',
    secondary: 'secondary',
    default: 'default',
}

const ShoppingCartActionButtons = ({ mItem, ACTIONS } ) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let UseAction = (null)
    let btnVariant = BTN_VARIANTS.contained
    let btnColor = BTN_VARIANTS.secondary
    let startIcon = <DeleteRounded/>

    const onAction = () => {
        UseAction();
    }

    switch(ACTIONS){
        case 'add':

            btnVariant = BTN_VARIANTS.contained
            btnColor = BTN_COLORS.primary
            startIcon = <AddShoppingCartRounded/>
            
            UseAction = () => { 
                 dispatch(actions.addListMovie(JSON.stringify(mItem))) 
            };

            break;
        case 'remove':

            btnVariant = BTN_VARIANTS.contained
            btnColor = BTN_COLORS.default
            startIcon = <RemoveShoppingCartRounded/>

            UseAction = () => { 
                console.log('Remove item?: ' + mItem)
                dispatch(actions.removeCartItem(mItem)) 
            };

            break;
        case 'empty':

            btnVariant = BTN_VARIANTS.outlined
            btnColor = BTN_COLORS.secondary
            startIcon = <RemoveCircleRounded/>

            UseAction = () => { 
                dispatch(actions.clearCart()) 
            };
            break;

        case 'checkout':

            btnVariant = BTN_VARIANTS.contained
            btnColor = BTN_COLORS.secondary
            startIcon = <ShopRounded/>
            UseAction =  () => {};

            break;

        default:
            UseAction = () => {};
    }
    
    console.log(ACTIONS + btnColor)

    return(
        <React.Fragment>
            <Button
                variant={btnVariant}
                color={btnColor}
                className={classes.button}
                startIcon={startIcon}
                onClick={() => {
                    onAction()
                    }
                }>
                {ACTIONS}
                </Button>

        </React.Fragment>

    );

};

export default ShoppingCartActionButtons;