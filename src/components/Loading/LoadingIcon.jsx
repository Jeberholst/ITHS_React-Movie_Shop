
import React, {useEffect, useState} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from './Modal'

const Loading = () =>{

    const [loading,setLoading] = useState(false);

    const LoadingSpinner = () =>{
        setLoading(true);
    }

    useEffect(() =>{

        LoadingSpinner(); 

    },[]);

    return(
       <div>

 <Modal open={loading}>
 {<CircularProgress color="secondary"/>}
 </Modal>

         
       </div>
    );
}

export default Loading;