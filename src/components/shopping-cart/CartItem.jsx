
import { makeStyles, Zoom } from "@material-ui/core";
import React from "react";
import { createPosterPathFull, POSTER_SIZES } from '../../helper-functions/poster';
import ShoppingCartActionButtons, { BUTTON_TYPE } from "./ShoppingCartActionButtons";

const useStyle = makeStyles((theme) => ({
    root: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      fontSize: 12,
      alignContent: 'center',
      alignItems: 'center',
      // background: 'red'
    },
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 10,
      width: '100%',
      height: '100%',
      textAlign: 'center',
      alignContent: 'center',
      alignItems: 'center',
      objectFit: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '30vh',
      maxWidth: '100%'
    },
    containerInfo: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      width: '100%',
      height: '80%',
      textIndent: 15,
      // background: 'red'
    },
    title: {
      display: 'flex',
      fontSize: '1em',
      fontWeight: 'bold',
      wordWrap: 'break-word',
      maxWidth: '100%',
      textShadow: '1px 1px #000',
      marginTop: 10,
      textAlign: 'left'
    },
    year: {
      display: 'flex',
      fontSize: '1em',
      wordWrap: 'break-word',
      maxWidth: '100%',
      textShadow: '1px 1px #000',
      textAlign: 'left'
    },
    containerButton: {
      display: 'flex',
      flexDirection: 'row-reverse',
      width: '100%',
      alignItems: 'center',
      height: '20%'
    },
    labelCost: {
      fontWeight: "lighter",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      borderRadius: 5,
      color: 'white',
      background: 'rgb(79,174,109, 0.5)',
      width: 'fit-content',
      padding: '6px 8px',
      letterSpacing: '0.02857em'
  },
}));


const CartItem = ({ item }) => {
    
    const classes = useStyle();
    const pItem = JSON.parse(item)
  
    const title = pItem.original_title
    const releaseDate = pItem.release_date
   
    const posterPathFull = createPosterPathFull(POSTER_SIZES.w500, pItem.backdrop_path)
  
    return(
    
      <React.Fragment>
             <Zoom in={true} mountOnEnter unmountOnExit>
              <div id={'cart-item'} className={classes.root}>

                <div className={classes.mainContainer} 
                      style={{backgroundImage: `linear-gradient(to top, rgb(36, 36, 36, 0.3), rgb(15, 15, 15, 0.6)), url(${posterPathFull})`}}
                      >

                      <div className={classes.containerInfo}>
                      
                          <div className={classes.title}>
                              {title}
                          </div>

                          <div className={classes.year}>
                              {String(releaseDate).slice(0, 4)}
                          </div>

                      </div>
    
                      <div className={classes.containerButton}>
                        
                        <ShoppingCartActionButtons
                            mItem={item} 
                            type={BUTTON_TYPE.CART_REMOVE}
                          />
                        <LabelCost text={'20.00'}/>

                      </div>

                </div>
             </div>
          </Zoom>
      </React.Fragment>

    );
};
export default CartItem;

const LabelCost = ({text}) => {
  const classes = useStyle();

  return(
      <div className={classes.labelCost}>${text} </div>
  );
}