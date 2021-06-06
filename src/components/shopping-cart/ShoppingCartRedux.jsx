import { ButtonGroup, Container, Divider, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux"
import CartItem from './CartItem'
import CartTotal from './CartTotal'
import CartBillingInfo from './CartBillingInfo'
import ShoppingCartActionButtons, { BUTTON_TYPE } from "./ShoppingCartActionButtons";
import { fetchers } from './../../mockData/mock-data-fetcher'
import CheckOutRedux from '../check-out/CheckOutRedux';
import authService from '../../util/auth-service';
import NotSignedIn from '../shared-components/NotSignedIn';
import './ShoppingCart.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      alignContent: 'center',
      maxWidth: '100%',
      height: '100%',
    },
    header: {
      padding: 5,
    },
    dividerSection: {
      marginTop: 15,
      marginBottom: 15,
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    },
    cartListItems: {
      width: '100%',
    },
    cartTotal: {
      display: 'flex',
      width: '100%',
    },
    cartItemContainer: {
      width: '100%',
    },
    containerCheckOutButton: {
      display: 'flex',
      width: '100%',
      marginTop: 15,
      marginBottom: 15,
      alignContent: 'center',
      justifyItems: 'center',
      justifyContent: 'center'
    },
    containerCheckOutComp: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      textAlign: 'center',
      alignContent: 'center',
      justifyItems: 'center',
      justifyContent: 'center'
    }

}));



const ShoppingCartRedux = () => {

    const classes = useStyles();

    const [user] = useState(authService.getCurrentUser())
    const displayCheckout = useSelector(state => state.checkOut.visibility)
    const hasCartItems = useSelector(state => state.shoppingCart.listOfMovies.length !== 0)

    console.log('DISP CH. -', displayCheckout)

    const handleSignedIn = () => {

      return (user !== null) ? (
          <ShoppingCartActionButtons 
            type={BUTTON_TYPE.CART_CHECKOUT}
          />
      ) : (<NotSignedIn {...{ message: 'You need to Sign In in order to proceed to checkout!'}}/>)

    }

    const handleCheckoutVisibility = () => {
      
      return (hasCartItems && user !== null) ? 
          (
            <CheckOutRedux/>
          ) : null
    }


    fetchers.fetchBillingInfo()

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

            {/* <Slide direction="right" in={true} mountOnEnter> */}
              <div className={classes.cartListItems}>
              
                  <CartListItems/>
                
              </div>
            {/* </Slide> */}

            <Divider className={classes.dividerSection}></Divider> 

            {/* <Slide direction="right" in={true} mountOnEnter> */}
              <div className={classes.cartTotal}>
                  
                  <CartTotal/>
                  <CartBillingInfo/>

              </div>
            {/* </Slide> */}
        
            {/* <Divider className={classes.dividerSection}></Divider>  */}

            <div className={classes.containerCheckOutButton}>

                {handleSignedIn()}
         
            </div>

            <div className={classes.containerCheckOutComp}>
                {handleCheckoutVisibility()}
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
            <div id={'container-cart-items'} className={classes.cartItemContainer}>
      
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
         {/*TODO: suggest user to go to "Section"?*/}
        <div>
          <p>No items added to cart :(</p>   
        </div>
      </React.Fragment>
    );
  };
};
export default ShoppingCartRedux;