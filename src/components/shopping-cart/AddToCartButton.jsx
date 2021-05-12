import { Button} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "./../../redux/features/shoppingCart";

const AddToCartButton = ({ mItem }) => {

    const dispatch = useDispatch();

    const addToCartList = () => {
        // console.log('Adding to cart - List item' + JSON.stringify(mItem))
        dispatch(actions.addListMovie(JSON.stringify(mItem)));
    }
  
    return(
        <React.Fragment>
            <Button
                variant='outlined'
                color='primary'
                onClick={ () => {
                        // console.log({mItem})
                        addToCartList()
                    }
                }
            >ADD</Button>


        </React.Fragment>
    );

}

export default AddToCartButton;