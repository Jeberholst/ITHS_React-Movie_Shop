import { ButtonGroup, Container, Divider, makeStyles, Slide } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux"
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import CartBillingInfo from './CartBillingInfo'
import ShoppingCartActionButtons, { BUTTON_TYPE } from "./ShoppingCartActionButtons";

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
      width: '100%',
    },
    cartItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },
    checkOutContainer: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: '100%'
    }
}));

const ShoppingCartRedux = () => {

    const classes = useStyles();

    return (
        <Container className={classes.root}>

            <div className={classes.header}>
                <ButtonGroup>
                  <ShoppingCartActionButtons 
                    style={{marginTop: 5}}
                    mItem={''} 
                    type={BUTTON_TYPE.CART_CLEAR}/>
                </ButtonGroup>
            </div>

            <Divider className={classes.dividerSection}></Divider> 

            <Slide direction="right" in={true} mountOnEnter>
              <div className={classes.cartListItems}>
              
                  <CartListItems></CartListItems>
                
              </div>
            </Slide>

            <Divider className={classes.dividerSection}></Divider> 

            <Slide direction="right" in={true} mountOnEnter>
            <div className={classes.cartTotal}>
                <CartTotal/>
                
                <Divider className={classes.dividerSection}></Divider> 

                <CartBillingInfo/>
            </div>
            </Slide>
        
            <Divider className={classes.dividerSection}></Divider> 

            <div className={classes.checkOutContainer}>

                <ShoppingCartActionButtons 
                  type={BUTTON_TYPE.CART_CHECKOUT}
                  />

            </div>

        </Container>
    )
}

const CartListItems = () => {
  const classes = useStyles();
  const shoppingCartItems = useSelector(state => state.shoppingCart.listOfMovies);

  if(shoppingCartItems.length !== 0){
    return (
      <React.Fragment>
            <div className={classes.cartItemContainer}>
      
                {shoppingCartItems.map((element) => (
                      <CartItem 
                          key={element.imdbId} 
                          item={element}/>
                ))}
            
            </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
         {/*TODO: add styling to div*/}
        <div>
          <p>No items added to cart :(</p>   
        </div>
      </React.Fragment>
    );
  };
};
export default ShoppingCartRedux;