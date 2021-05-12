
import { Divider, makeStyles } from "@material-ui/core";
import React from "react";
import ShoppingCartActionButtons from "./ShoppingCartActionButtons";

const cartItemStyle = makeStyles((theme) => ({
    root: {
        marginTop: 10,
        marginBottom: 10,
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
}));

const CartItem = ({ item }) => {
    
    const classes = cartItemStyle();
    const pItem = JSON.parse(item)
  
    const poster = pItem.poster
    const id = pItem.imdbID
    const title = pItem.title
    const year = pItem.year
  
    return(
      <React.Fragment>
        <div className={classes.root}>
  
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
            <ShoppingCartActionButtons mItem={item} ACTIONS={'remove'}/>
          </div>
          
        </div>
   
        <Divider></Divider> 
  
      </React.Fragment>
   
    );
};
export default CartItem;

  
const Label = ({text}) => {
    const classes = cartItemStyle();

    return(
        <div className={classes.label}>{text}</div>
    );
}