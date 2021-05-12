import { Button} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "./../../redux/features/shoppingCart";

const RemoveFromCartButton = ({ itemIndex }) => {

    const dispatch = useDispatch();

    const removeFromCart = () => {
        console.log('Removing - List item - ShoppingCart' + itemIndex)
        dispatch(actions.removeCartItem(itemIndex));
    }
  
    return(
        <React.Fragment>
            <Button
                variant='outlined'
                color='primary'
                onClick={ () => {
                        removeFromCart();
                    }
                }
            >REMOVE</Button>


        </React.Fragment>
    );

}
export default RemoveFromCartButton;