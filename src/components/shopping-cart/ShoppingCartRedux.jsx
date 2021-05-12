import { Button, ButtonGroup, Container, makeStyles, Paper, TextField } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { actions } from "../../redux/features/shoppingCart";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      alignContent: 'center',
      padding: 15,
      maxWidth: '30%',
      margin: 15,
    },
  }));

const ShoppingCartRedux = () => {
    const classes = useStyles();

    const shoppingCartCount = useSelector(state => state.shoppingCart.listCount);

    const addToCart = () => {
 
    }

    const removeItemFromCart = () => {
 
    }

    return (
        <Container className={classes.root} component={Paper}>
            <ShoppingCart></ShoppingCart>
            <h3>Shopping Cart ({shoppingCartCount})</h3>
            <ButtonGroup>
          
              <Button variant='outlined' color='secondary' onClick={removeItemFromCart}>Clear cart</Button>
            </ButtonGroup>

        </Container>
    )
}


export default ShoppingCartRedux;