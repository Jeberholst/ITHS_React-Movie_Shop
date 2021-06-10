import { Button, makeStyles } from "@material-ui/core";
import {
  AddShoppingCartRounded,
  RemoveShoppingCartRounded,
  ShopRounded,
  RemoveCircleRounded,
} from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as shoppingCartActions } from "../../redux/features/shoppingCart";
import { actions as checkOutActions } from "../../redux/features/checkOut";
import {
  actions as snackBarActions,
  cartNotifications,
} from "../../redux/features/snackbars";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const BTN_VARIANTS = {
  outlined: "outlined",
  contained: "contained",
  none: "",
};

const BTN_COLORS = {
  primary: "primary",
  secondary: "secondary",
  default: "default",
};

export const BUTTON_TYPE = {
  CART_ADD: {
    btnVariant: BTN_VARIANTS.contained,
    btnColor: BTN_COLORS.secondary,
    startIcon: <AddShoppingCartRounded />,
    friendlyName: "Add",
  },
  CART_REMOVE: {
    btnVariant: BTN_VARIANTS.contained,
    btnColor: BTN_COLORS.default,
    startIcon: <RemoveShoppingCartRounded />,
    friendlyName: "Remove",
  },
  CART_CLEAR: {
    btnVariant: BTN_VARIANTS.outlined,
    btnColor: BTN_COLORS.secondary,
    startIcon: <RemoveCircleRounded />,
    friendlyName: "Empty Cart",
  },
  CART_CHECKOUT: {
    btnVariant: BTN_VARIANTS.contained,
    btnColor: BTN_COLORS.secondary,
    startIcon: <ShopRounded />,
    friendlyName: "Checkout",
  },
};

const ShoppingCartActionButtons = ({ mItem, type }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let UseAction = null;

  let btnVariant = BUTTON_TYPE.CART_ADD.btnVariant;
  let btnColor = BUTTON_TYPE.CART_ADD.btnColor;
  let startIcon = BUTTON_TYPE.CART_ADD.startIcon;
  let friendlyName = BUTTON_TYPE.CART_ADD.friendlyName;

  const stateListOfMovies = useSelector(
    (state) => state.shoppingCart.listOfMovies
  );

  const onAction = () => {
    UseAction();
  };

  switch (type) {
    case BUTTON_TYPE.CART_ADD:
      btnVariant = BUTTON_TYPE.CART_ADD.btnVariant;
      btnColor = BUTTON_TYPE.CART_ADD.btnColor;
      startIcon = BUTTON_TYPE.CART_ADD.startIcon;
      friendlyName = BUTTON_TYPE.CART_ADD.friendlyName;

      UseAction = () => {
        if (stateListOfMovies.length === 0) {
          // console.log('Adding FIRST item to CART...')
          dispatch(shoppingCartActions.addListMovie(JSON.stringify(mItem)));
          dispatch(
            snackBarActions.displaySnackBar(cartNotifications.cartAddSuccess)
          );
        } else {
          // console.log(mItem.imdbId)
          const checkAdded = stateListOfMovies.some(
            (x) => JSON.parse(x).id === mItem.id
          );

          if (checkAdded) {
            dispatch(
              snackBarActions.displaySnackBar(cartNotifications.cartAddFailed)
            );
            // console.log('Movie already added to CART...')
          } else {
            dispatch(shoppingCartActions.addListMovie(JSON.stringify(mItem)));
            // console.log('Adding item to CART...')
            dispatch(
              snackBarActions.displaySnackBar(cartNotifications.cartAddSuccess)
            );
          }
        }
      };

      break;
    case BUTTON_TYPE.CART_REMOVE:

      btnVariant = BUTTON_TYPE.CART_REMOVE.btnVariant;
      btnColor = BUTTON_TYPE.CART_REMOVE.btnColor;
      startIcon = BUTTON_TYPE.CART_REMOVE.startIcon;
      friendlyName = BUTTON_TYPE.CART_REMOVE.friendlyName;

      UseAction = () => {
        //console.log("Remove item?: " + mItem);
        dispatch(shoppingCartActions.removeCartItem(mItem));
        dispatch(
          snackBarActions.displaySnackBar(cartNotifications.cartRemovedSuccess)
        );
      };

      break;
    case BUTTON_TYPE.CART_CLEAR:

      btnVariant = BUTTON_TYPE.CART_CLEAR.btnVariant;
      btnColor = BUTTON_TYPE.CART_CLEAR.btnColor;
      startIcon = BUTTON_TYPE.CART_CLEAR.startIcon;
      friendlyName = BUTTON_TYPE.CART_CLEAR.friendlyName;

      UseAction = () => {
        dispatch(shoppingCartActions.clearCart());
        dispatch(
          snackBarActions.displaySnackBar(cartNotifications.cartCleared)
        );
      };

      break;

    case BUTTON_TYPE.CART_CHECKOUT:

      btnVariant = BUTTON_TYPE.CART_CHECKOUT.btnVariant;
      btnColor = BUTTON_TYPE.CART_CHECKOUT.btnColor;
      startIcon = BUTTON_TYPE.CART_CHECKOUT.startIcon;
      friendlyName = BUTTON_TYPE.CART_CHECKOUT.friendlyName;

      UseAction = () => {
        dispatch(checkOutActions.setVisibility(""));
      };

      break;

    default:
      UseAction = () => {};
  }

  return (
    <React.Fragment>
      <Button
        variant={btnVariant}
        color={btnColor}
        className={classes.button}
        startIcon={startIcon}
        onClick={() => {
          onAction();
        }}
      >
        {friendlyName}
      </Button>
    </React.Fragment>
  );
};

export default ShoppingCartActionButtons;
