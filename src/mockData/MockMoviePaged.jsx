import { makeStyles } from '@material-ui/core';
import React from 'react'
import ShoppingCartActionButtons from '../components/shopping-cart/ShoppingCartActionButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    alignItems: 'left',
    textAlign: 'left',
    alignContent: 'left',
    background: '#1f1f1f',
  },
  text: {
    margin: 15,
    color: '#f3f3f3',
  },
}));

const MockMoviePaged = ({item}) => {
  const classes = useStyles();

  return(
    <React.Fragment>
       <div className={classes.root}>
        <div className={classes.text}>
          {item.title}	
          {item.year}	
          <ShoppingCartActionButtons mItem={item} ACTIONS={'add'}/>
        </div>
      </div>
    </React.Fragment>
  );

}
  
export default MockMoviePaged;