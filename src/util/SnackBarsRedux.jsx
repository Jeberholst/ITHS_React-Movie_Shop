import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { actions as snackBarActions, SEVERITY_TYPE } from './../redux/features/snackbars'
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackBarsRedux = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const isOpen = useSelector(state => state.snackbar.isOpen);
  const snackBarType = useSelector(state => state.snackbar.snackBarType);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(snackBarActions.showSnackBar(false))
  };
  const text = getAlertText(snackBarType)
  console.log(text)

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>

        <Alert onClose={handleClose} severity={snackBarType}>
          {text}
        </Alert>
     
      </Snackbar>

    </div>
  );
}

function getAlertText(severity) {

    switch(severity){
      case SEVERITY_TYPE.success:
        return 'Added to cart!'
 
      case SEVERITY_TYPE.warning:
        return 'Already in cart!'

      case SEVERITY_TYPE.error:
        return 'Error occured. Try again!'

      default:   
        return 'Information!'   
  };
  
}

export default SnackBarsRedux;