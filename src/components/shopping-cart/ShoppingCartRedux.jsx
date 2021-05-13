import { ButtonGroup, Container, Divider, makeStyles } from "@material-ui/core";
import { ShoppingCartRounded } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux"
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import ShoppingCartActionButtons from "./ShoppingCartActionButtons";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      textAlign: 'left',
      alignContent: 'left',
      maxWidth: '100%',
      height: '100%',
    },
    header: {
      padding: 5,
      margin: 5,
    },
    dividerSection: {
      marginTop: 15,
      marginBottom: 15,
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    cartListItems: {
      width: '100%'
    },
    cartItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    checkOutContainer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: '100%'
    },
}));

const ShoppingCartRedux = () => {

    const classes = useStyles();
    const shoppingCartCount = useSelector(state => state.shoppingCart.listCount);

    return (
        <Container className={classes.root}>

            <div className={classes.header}>

              <ShoppingCartRounded></ShoppingCartRounded>
              <h3>Shopping Cart ({shoppingCartCount})</h3>

              <ButtonGroup>
                <ShoppingCartActionButtons 
                  style={{marginTop: 5}}
                  btnVariant={'contained'} 
                  btnColor={'primary'} 
                  mItem={''} 
                  ACTIONS={'clear'}/>
              </ButtonGroup>

            </div>

            <Divider className={classes.dividerSection}></Divider> 

              <div className={classes.cartListItems}>
                
                <CartListItems></CartListItems>

              </div>

            <Divider className={classes.dividerSection}></Divider> 

            <div className={classes.cartTotal}>
                
                <CartTotal></CartTotal>

            </div>

            <Divider className={classes.dividerSection}></Divider> 

            <div className={classes.checkOutContainer}>

                <ShoppingCartActionButtons 
                  btnVariant={'contained'} 
                  btnColor={'secondary'}
                  ACTIONS={'checkout'}
                  />

            </div>

        </Container>
    )
}



const CartListItems = () => {
  const classes = useStyles();
  const shoppingCartItems = useSelector(state => state.shoppingCart.listOfMovies);
  // console.log("Items in CART: " + shoppingCartItems)

  if(shoppingCartItems.length !== 0){
    return (
      <React.Fragment>
           <div className={classes.cartItemContainer}>
              {shoppingCartItems.map((element) => (
               <CartItem key={element.imdbId} item={element}></CartItem>
              ))}
          </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
         {/*TODO: add styling to div*/}
        <div>
          <p>No items added to cart...</p>   
        </div>
      </React.Fragment>
    );
  };
};
export default ShoppingCartRedux;