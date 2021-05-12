import { Button} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/features/shoppingCart";

// const ACTIONS = {
//     add: 'add',
//     remove: 'remove',
//     clear: 'clear', 
//     checkout: 'checkout'
// }

const ShoppingCartActionButtons = ( { mItem, ACTIONS } ) => {

    const dispatch = useDispatch();
    let UseAction = (null)
    // console.log('Action: ' + ACTIONS)

    switch(ACTIONS){
        case 'add':
             UseAction = () => { 
                 dispatch(actions.addListMovie(JSON.stringify(mItem))) 
                };
             break;
        case 'remove':
            UseAction = () => { 
                console.log('Remove item?: ' + mItem)
                dispatch(actions.removeCartItem(mItem)) 
            };
            break;
        case 'clear':
            UseAction = () => { 
                dispatch(actions.clearCart()) 
            };
            break;
        case 'checkout':
            UseAction =  () => {};
            break;
        default:
            UseAction = () => {};
    }

    // console.log('UseAction:' + UseAction)

    const onAction = () => {
        UseAction();
    }
  
    return(
        <React.Fragment>
            <Button
                variant='contained'
                color='primary'
                onClick={() => {
                        onAction()
                    }
                }
            >{ACTIONS}</Button>


        </React.Fragment>
    );

}

export default ShoppingCartActionButtons;