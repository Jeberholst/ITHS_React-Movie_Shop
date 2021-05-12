import React from 'react'
import ShoppingCartActionButtons from '../components/shopping-cart/ShoppingCartActionButtons';

const MockMoviePaged = ({item}) => {

  return(
    <React.Fragment>
       <div style={{display: 'flex', flexDirection: 'row', width: '50%', margin: 5}}>
        <p>
          {item.title}	
          {item.year}	
        </p>
        <ShoppingCartActionButtons mItem={item} ACTIONS={'add'}/>
      </div>
    </React.Fragment>
  );

}
  
export default MockMoviePaged;