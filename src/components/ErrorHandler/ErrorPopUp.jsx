import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { setError }  from '../../redux/features/ErrorHandlingSlice'
import ErrorModal from './ErrorModal'

const OVERLAY_STYLES = {
    textAlign: 'center'
   
}

const LoadEhandling = () =>{

    const ErrorState = useSelector((state) => state.ErrorHandling.ErrorState);
    const dispatch = useDispatch();

    return(
       <div>

 <ErrorModal open={ErrorState}>
  <div>  
      <h2 id="modal-title" style={OVERLAY_STYLES}>
     Something Happened!       
  </h2>
  </div>
 </ErrorModal>

         
       </div>
    );
}

export default LoadEhandling;