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

 <ErrorModal open={loading} onClose={() => setLoading(false) }>
  <div>  
      <h2 id="modal-title">
     Something Happened!       
  </h2>
  </div>
 </ErrorModal>

         
       </div>
    );
}

export default LoadEhandling;