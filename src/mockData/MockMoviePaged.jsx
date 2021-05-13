import React from 'react'

const MockMoviePaged = ({item}) => {

  return(
    <React.Fragment>
       <div style={{display: 'flex', flexDirection: 'row', width: '50%', margin: 5}}>
        <p>
          {item.title}	
          {item.year}	
        </p>
      </div>
    </React.Fragment>
  );

}
  
export default MockMoviePaged;