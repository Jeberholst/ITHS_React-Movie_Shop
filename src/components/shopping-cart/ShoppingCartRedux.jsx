import { Button, ButtonGroup, Container, Divider, makeStyles, Paper } from "@material-ui/core";
import { ShoppingCartRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { actions } from "./../../redux/features/shoppingCart";
import RemoveFromCartButton from './RemoveFromCartButton'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      textAlign: 'left',
      alignContent: 'left',
      padding: 15,
      maxWidth: '30%',
      margin: 15,
    },
    cartItemContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    cartItemSubContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'left',
      alignContent: 'left',
      textAlign: 'left',
    },
    cartItem: {
      margin: 10,
    }
  }));

const ShoppingCartRedux = () => {
    const classes = useStyles();

    const [movieItem, setMovieItem] = useState('');

    const dispatch = useDispatch();
    const shoppingCartCount = useSelector(state => state.shoppingCart.listCount);

    const clearCart = () => {
      console.log('Clearing cart')
      dispatch(actions.clearCart());
    }

    return (
        <Container className={classes.root}>

            <ShoppingCartRounded></ShoppingCartRounded>
            <h3>Shopping Cart ({shoppingCartCount})</h3>
            <div>
              <ListItems></ListItems>
            </div>

            <ButtonGroup>
              <Button variant='contained' color='secondary' style={{marginTop: 15}} onClick={clearCart}>Clear cart</Button>
            </ButtonGroup>


        </Container>
    )
}

const ListItems = () => {
  const classes = useStyles();
  const shoppingCartItems = useSelector(state => state.shoppingCart.listOfMovies);
  console.log("Items in CART: " + shoppingCartItems)

  return (
    <React.Fragment>
         <div className={classes.cartItemContainer}>
            {shoppingCartItems.map((element) => (
              [element].map( subElement => (
                <p>{subElement}</p>
              
            ))
           
                // <CartItem item={element}></CartItem>
            ))}
        </div>
    </React.Fragment>
  );
}

const CartItem = ({ item }) => {
  const classes = useStyles();
  console.log(item)
  console.log("Cart ITEM: " + {item})

  return(
    <React.Fragment>
      <div className={classes.cartItemSubContainer}>
        <CartLabel>{item.itemID}</CartLabel>
        <CartLabel>{item.year}</CartLabel>
        {/* Put item id here? with removal? */}
       <RemoveFromCartButton itemIndex={'3'}></RemoveFromCartButton>
      </div>
 
      <Divider></Divider> 

    </React.Fragment>
 
  );
}


const CartLabel = ({ item }) => {
  const classes = useStyles();

  return(
      <div className={classes.cartItem}>{item}</div>
  );
}

export default ShoppingCartRedux;