import React, {useEffect, useState} from 'react';
import ErrorModal from './ErrorModal'

const LoadEhandling = () =>{

    const [loading,setLoading] = useState(false);

    const LoadingErrorPopUp = () =>{
        setLoading(true);
    }

    useEffect(() =>{

        LoadingErrorPopUp(); 

    },[]);

    return(
       <div>

 <ErrorModal open={loading}>
  <div>  
      <h2 id="modal-title">
    My Title
  </h2>
  <p id="modal-description">
    My Description
  </p></div>
 </ErrorModal>

         
       </div>
    );
}

export default LoadEhandling;