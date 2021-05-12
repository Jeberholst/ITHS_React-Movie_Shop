import React from 'react'
import AddToCartButton from '../components/shopping-cart/AddToCartButton'

const MockMovieSingle = ({item}) => {

    return(
      <React.Fragment>
          <div style={{display: 'flex', flexDirection: 'row', width: '50%'}}>
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
      </React.Fragment>
    );
  
}
export default MockMovieSingle;