import React from "react";
import ShoppingCart from '../components/shopping-cart/ShoppingCartRedux';
import { makeStyles } from '@material-ui/core';
import { ShoppingCartRounded } from '@material-ui/icons';
import PageLableWithIcon from './PageLabelWithIcon';
import FetcherAPI, { FETCH_API_TYPE } from './../util/FetcherAPI'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    containerSuggestion: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginTop: '3%',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyItems: 'center',
    },
    containerQuickAdd: {
        width: '100%',
    },
}))


const ShoppingCartPage = () => {
    
    const classes = useStyles();

    return(
        <div className={classes.root}>

            <PageLableWithIcon {...{ text: 'Shopping cart', icon: <ShoppingCartRounded/>}}/>

            <ShoppingCart/>
   
             <div className={classes.containerSuggestion}>
                 <h5>Popular Movies</h5>
                 
                 <div className={classes.containerQuickAdd}>
                    <FetcherAPI {...{ type: FETCH_API_TYPE.LIST_POPULAR }}/>
                 </div>
                
             </div>
    


        </div>
    );

};

export default ShoppingCartPage 