import { GpsFixed } from '@material-ui/icons';
import Button from '@material-ui/core/Button'
import React from 'react'
import  ReactDom from 'react-dom'
import { FcSynchronize } from "react-icons/fc";


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    color: 'black',
    transform: 'translate(-50%,-50%)',
    backgroundColor: '#FFF',
    padding: '1rem',
    width: '30%',
    border: '1px solid #ccc',
    borderRadius: '4px',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0 , 0 , 0, .7)',
   
}

const BUTTON_STYLES = {
    cursor: 'pointer',
    width: '10%',
    height: '100%',
    zIndex: 1000
}

const refreshPage = ()=>{
    window.location.reload();
 }


const ErrorModal = ({open,children,onClose}) =>{
    if(!open) return null
    return ReactDom.createPortal(
        <>
        <div style={OVERLAY_STYLES}/>
        <div style={MODAL_STYLES}>
           {children}
           <Button onClick={onClose, refreshPage}  variant="outlined" color="secondary">Reload page</Button>
        </div>
             
        </>,
        document.getElementById('ErrorHandlingPopUp')
    );
}

export default ErrorModal;