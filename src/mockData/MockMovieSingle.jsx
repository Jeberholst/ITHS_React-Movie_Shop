import React from 'react'
import CartActionButton from '../components/shopping-cart/ShoppingCartActionButtons'

const MockMovieSingle = ({item}) => {

    return(
      <React.Fragment>
          <div style={{display: 'block', flexDirection: 'row', width: '100%', fontSize: 12, overflow: 'hidden'}}>
            <p>
            {item.title}	
            {item.year}	
            {item.rated}
            {item.released}	
            {item.runtime}	
            {item.genre}	
            {item.director}	
            {item.writer}	
            {item.actors}	
            {item.plot}	
            {item.language}	
            {item.country}	
            {item.awards}
            {item.poster}	
            {/* {item.ratings} */}
            {item.metascore}	
            {item.imdbrating}	
            {item.imdbvotes}
            {item.imdbid}	
            {item.type}	
            {item.dvd}	
            {item.boxoffice}	
            {item.production}	
            {item.website}	
            {item.response}
          </p>
        </div>
        <CartActionButton mItem={item} ACTIONS={'add'}/>
      </React.Fragment>
    );
  
}
export default MockMovieSingle;