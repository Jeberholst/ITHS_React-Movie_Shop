import React from "react";
import ShoppingCart from '../components/shopping-cart/ShoppingCartRedux';
import { Divider, makeStyles } from '@material-ui/core';
import { ShoppingCartRounded } from '@material-ui/icons';
import PageLableWithIcon from './PageLabelWithIcon';
import FetcherAPI, { FETCH_API_TYPE } from './../util/FetcherAPI'

const useStyles = makeStyles((theme) => ({
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
    divider: {
        width: '100%',
        marginTop: 50,
        marginBottom: 50,
        background: 'rgb(255,255,255, 0.1)'
    }
}))


const ShoppingCartPage = () => {
    
    const classes = useStyles();

    return(
        <React.Fragment>

            <PageLableWithIcon {...{ text: 'Shopping cart', icon: <ShoppingCartRounded/>}}/>

            <ShoppingCart/>
            {/* <Divider className={classes.divider}/> */}

   
             <div className={classes.containerSuggestion}>
                 <h5>QUICK ADD</h5>
                 <div className={classes.containerQuickAdd}>
                    <FetcherAPI {...{ type: FETCH_API_TYPE.LIST_POPULAR }}/>
                 </div>
                
             </div>
    


        </React.Fragment>
    );

};

export default ShoppingCartPage 