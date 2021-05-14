import { Button, makeStyles} from "@material-ui/core";
import { AddShoppingCartRounded, DeleteRounded, RemoveShoppingCartRounded, ShopRounded, RemoveCircleRounded } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as shopingCartActions } from "../../redux/features/shoppingCart";
import { actions as snackBarActions, SEVERITY_TYPE, SNACK_TEXT } from "../../redux/features/snackbars";

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
    // const isOpen = useSelector(state => state.snackbar.isOpen);
    const stateListOfMovies = useSelector(state => state.shoppingCart.listOfMovies);


    const onAction = () => {
        UseAction();
    }

    switch(ACTIONS){
        case 'add':

            btnVariant = BTN_VARIANTS.contained
            btnColor = BTN_COLORS.primary
            startIcon = <AddShoppingCartRounded/>
            
            UseAction = () => { 

                if(stateListOfMovies.length === 0){

                    console.log('Adding FIRST item to CART...')
                    dispatch(snackBarActions.setSeverity(SEVERITY_TYPE.success))
                    dispatch(snackBarActions.showSnackBar(true))
                    dispatch(snackBarActions.setText(SNACK_TEXT.cartAdded))
                    dispatch(shopingCartActions.addListMovie(JSON.stringify(mItem)))

                
                } else {
                    console.log(mItem.imdbId)
                    const checkAdded = stateListOfMovies.some(x => (JSON.parse(x)).imdbId === mItem.imdbId)

                    if(checkAdded){
                        dispatch(snackBarActions.setSeverity(SEVERITY_TYPE.warning))
                        dispatch(snackBarActions.setText(SNACK_TEXT.cartItemExists))
                        dispatch(snackBarActions.showSnackBar(true))
                        console.log('Movie already added to CART...')
        
                    } else {
                        dispatch(snackBarActions.setSeverity(SEVERITY_TYPE.success))
                        dispatch(snackBarActions.setText(SNACK_TEXT.cartAdded))
                        dispatch(snackBarActions.showSnackBar(true))
                        dispatch(shopingCartActions.addListMovie(JSON.stringify(mItem)))
                        console.log('Adding item to CART...')
                   
                
                    }
        
                }
            };

            break;
        case 'remove':

            btnVariant = BTN_VARIANTS.contained
            btnColor = BTN_COLORS.default
            startIcon = <RemoveShoppingCartRounded/>

            UseAction = () => { 
                console.log('Remove item?: ' + mItem)
                dispatch(snackBarActions.setSeverity(SEVERITY_TYPE.warning))
                dispatch(snackBarActions.setText(SNACK_TEXT.cartRemoved))
                dispatch(snackBarActions.showSnackBar(true))
                dispatch(shopingCartActions.removeCartItem(mItem)) 
            };

            break;
        case 'empty':

            btnVariant = BTN_VARIANTS.outlined
            btnColor = BTN_COLORS.secondary
            startIcon = <RemoveCircleRounded/>

            UseAction = () => { 
                dispatch(snackBarActions.setSeverity(SEVERITY_TYPE.info))
                dispatch(snackBarActions.setText(SNACK_TEXT.cartCleared))
                dispatch(snackBarActions.showSnackBar(true))
                dispatch(shopingCartActions.clearCart()) 
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
    
    // console.log(ACTIONS + btnColor)

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