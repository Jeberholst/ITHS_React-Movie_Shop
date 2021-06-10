
import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch, useSelector } from 'react-redux';
import  { setLoading }  from '../../redux/features/loadingHandlingSlice'
import Modal from './Modal'

const Loading = () =>{

    
    const loadingState = useSelector((state) => state.loadingHandling.loadingState);
    const dispatch = useDispatch();

    return(
       <div>

 <Modal open={loadingState}>
 {<CircularProgress color="secondary"/>}
 </Modal>

         
       </div>
    );
}

export default Loading;
