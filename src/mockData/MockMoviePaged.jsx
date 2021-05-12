import React from 'react'
import AddToCartButton from '../components/shopping-cart/AddToCartButton'

const MockMoviePaged = ({item}) => {

  return(
    <React.Fragment>
       <div style={{display: 'flex', flexDirection: 'row', width: '50%', margin: 5}}>
        <p>
          {item.title}	
          {item.year}	
        </p>
        <AddToCartButton mItem={item}></AddToCartButton>
      </div>
    </React.Fragment>
  );

}
  
export default MockMoviePaged;