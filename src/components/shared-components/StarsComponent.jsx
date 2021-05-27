import React from 'react'
import StarBorderTwoToneIcon from '@material-ui/icons/StarBorderTwoTone';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        height: '100%',
        width: 'fit-content',
        textAlign: 'right',
        alignContent: 'center',
        alignItems:'center'
    },
    starIcon: {
        fontSize: '1em',
    }
}));

//FORMER MOCK-STARS-COMPONENT
const StarsComponent = () => {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            
            <div className={classes.root}>

                <AddFiveStars></AddFiveStars>

            </div>

        </React.Fragment>
    );

}
export default StarsComponent

const AddFiveStars = () => {
    const classes = useStyles();
    return(
        <React.Fragment>
            <StarBorderTwoToneIcon className={classes.starIcon}/>
            <StarBorderTwoToneIcon className={classes.starIcon}/>
            <StarBorderTwoToneIcon className={classes.starIcon}/>
            <StarBorderTwoToneIcon className={classes.starIcon}/>
            <StarBorderTwoToneIcon className={classes.starIcon}/>
        </React.Fragment>
    )
} 

