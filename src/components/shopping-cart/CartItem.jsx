
import { makeStyles } from "@material-ui/core";
import React from "react";
import ShoppingCartActionButtons, { BUTTON_TYPE } from "./ShoppingCartActionButtons";

const useStyle = makeStyles((theme) => ({
    root: {
      marginTop: 10,
      marginBottom: 10,
      background: 'rgb(0,0,0, 0.1)',
      padding: 5,
      borderRadius: 5,
      fontSize: '0.875rem',
    },
    containerInfo: {
      display: 'flex',
      flexDirection: 'row',
    },
    containerThumbnail: {
      display: 'flex',
      flexDirection: 'column',
      width: '20%'
    },
    containerButton: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: '100%',
      alignItems: 'center',
      marginTop: 5,
      marginBottom: 5,
      borderTop: '1px solid rgb(68,68,68, 0.5)'
    },
    thumbnail: {
      width: 'fit-content',
      maxWidth: '100%',
      height: '100%',
      objectFit: 'scale-down'
    },
    label: {
      marginLeft: 10,
      padding: 3,
      fontSize: 12,
    },
    labelCost: {
      fontSize: '0.875rem',
      fontWeight: "lighter",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      borderRadius: 5,
      color: 'white',
      background: 'rgb(79,174,109, 0.5)',
      width: 'fit-content',
      padding: '6px 8px',
      height: '100%',
      minWidth: '16px',
      letterSpacing: '0.02857em'
  },
}));


const CartItem = ({ item }) => {
    
    const classes = useStyle();
    const pItem = JSON.parse(item)
  
    const poster = pItem.poster
    const id = pItem.imdbID
    const title = pItem.title
    const year = pItem.year
  
    return(
    
      <React.Fragment>
           
            <div id={'cart-item'} className={classes.root}>
      
              <div className={classes.containerInfo}>
      
                <div className={classes.containerThumbnail}>
                  <img className={classes.thumbnail} src={poster} alt={'poster'}/>
                </div>
      
                <div className={classes.infoContainer}>
                  <Label text={id}/>
                  <Label text={title}/>
                  <Label text={year}/>
                </div>
      
              </div>
              
              <div className={classes.containerButton}>
                <ShoppingCartActionButtons
                    mItem={item} 
                    type={BUTTON_TYPE.CART_REMOVE}
                  />
                  <CostLabel text={'20.00'}/>
              </div>
              
            </div>

      </React.Fragment>

    );
};
export default CartItem;

const Label = ({text}) => {
    const classes = useStyle();

    return(
        <div className={classes.label}>{text}</div>
    );
}

const CostLabel = ({text}) => {
  const classes = useStyle();

  return(
      <div className={classes.labelCost}>${text} </div>
  );
}