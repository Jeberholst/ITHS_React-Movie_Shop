import React from "react";
import MockDataHolder from '../mockData/MockDataHolder';
import ShoppingCart from '../components/shopping-cart/ShoppingCartRedux';

const ShoppingCartPage = () => {

    return(
        <React.Fragment>
            <p>ShoppingCartPage</p>
            <ShoppingCart/>
            <MockDataHolder/>

        </React.Fragment>
    );

}

export default ShoppingCartPage