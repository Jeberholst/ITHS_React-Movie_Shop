import { Button, IconButton} from "@material-ui/core";
import { DeleteOutlined, DeleteRounded } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../../redux/features/shoppingCart";

// const ACTIONS = {
//     add: 'add',
//     remove: 'remove',
//     clear: 'clear', 
//     checkout: 'checkout'
// }

const ShoppingCartActionButtons = ( { btnVariant, btnColor, mItem, ACTIONS } ) => {

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

    if(ACTIONS !== 'remove'){
        return(
            <React.Fragment>
                <Button
                    variant={btnVariant}
                    color={btnColor}
                    onClick={() => {
                            onAction()
                        }
                    }
                >{ACTIONS}</Button>

            </React.Fragment>
        );
    } else {
        return(
            <React.Fragment>
                 <IconButton 
                    aria-label="delete"
                    color="secondary"
                    onClick={() => {
                            onAction()
                        }
                    }>
                    <DeleteRounded
                    />

                </IconButton>

            </React.Fragment>

        );

    };
  


}

export default ShoppingCartActionButtons;