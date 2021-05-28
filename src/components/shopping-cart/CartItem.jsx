
import { makeStyles } from "@material-ui/core";
import React from "react";
import ShoppingCartActionButtons, { BUTTON_TYPE } from "./ShoppingCartActionButtons";

const useStyle = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      background: 'rgb(0,0,0, 0.1)',
      padding: 5,
      borderRadius: 5,
      fontSize: 12,
    },
    containerInfo: {
      display: 'flex',
      flexDirection: 'row',
    },
    containerThumbnail: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'top',
      alignItems: 'top',
      width: '20%'
    },
    containerButton: {
      display: 'flex',
      flexDirection: 'row-reverse',
      flexWrap: 'wrap-reverse',
      flexShrink: 1,
      width: '100%',
      alignItems: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      borderTop: '1px solid rgb(68,68,68, 0.5)'
    },
    containerSubInfo: {
      marginLeft: 10,
      '& *': {
        marginTop: 3
      }
    },
    containerGenres: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      '& *': {
        fontSize: '0.6rem',
        marginRight: theme.spacing(1)
        
      }
    },
    thumbnail: {
      width: 'fit-content',
      maxWidth: '100%',
      height: '100%',
      objectFit: 'scale-down',
    },
    label: {
      padding: 3,
    },
    labelGenre: {
      height: '100%',
      minWidth: 'fit-content',
      borderRadius: 5,
      color: 'white',
      background: 'rgb(68,68,68, 0.8)',
      width: 'fit-content',
      padding: '4px 6px',
    },
    labelCost: {
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
  
    const id = pItem.id
    const title = pItem.title
    const releaseDate = pItem.releaseDate
   
    const movieGenres = pItem.genreIds
    let movieGenresNamed = []

    // movieGenres.forEach(genreNum => {
    //   listGenres.forEach(listItem => {
    //     if(listItem.genreId === genreNum){
    //         movieGenresNamed.push(listItem.genreName)
    //     }
    //   }); 
    // });

    const posterMainPath = 'https://image.tmdb.org/t/p/'
    const posterSize = 'w200'
    const itemPosterPath = pItem.posterPath
    const posterPathFull = `${posterMainPath}/${posterSize}/${itemPosterPath}`
  
    return(
    
      <React.Fragment>
           
            <div id={'cart-item'} className={classes.root}>
      
              <div className={classes.containerInfo}>
      
                <div className={classes.containerThumbnail}>
                  <img className={classes.thumbnail} src={posterPathFull} alt={'poster'}/>
                </div>
      
                <div className={classes.containerSubInfo}>
                  <Label text={id}/>
                  <Label text={title}/>

                  <div className={classes.containerGenres}>
                    {/* TODO: Add length-check on genre-array if 0 */}
                    {movieGenresNamed.map((element) => (
                       <LabelGenre text={element}/>
                    ))}
                  </div>
             
                  <Label text={releaseDate}/>


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

      </React.Fragment>

    );
};
export default CartItem;


const Label = ( { text } ) => {
  const classes = useStyle();

  return(
      <div className={classes.label}>{text}</div>
  );
 
}

const LabelGenre = ( { text } ) => {
  const classes = useStyle();
  return( 
    <div className={classes.labelGenre}>{text}</div>
  );
}

const LabelCost = ({text}) => {
  const classes = useStyle();

  return(
      <div className={classes.labelCost}>${text} </div>
  );
}