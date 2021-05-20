import { Badge, IconButton, makeStyles } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        
    },
}));

const ShoppingCartBadge = () => {
    const classes = useStyles();

    const shoppingCartItemCount = useSelector(state => state.shoppingCart.listCount);

    return (
        <div className={classes.root}>
            <IconButton aria-label="show shopping items count" color="inherit">
                <Badge badgeContent={shoppingCartItemCount} color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>
        </div>
    );
};

export default ShoppingCartBadge;