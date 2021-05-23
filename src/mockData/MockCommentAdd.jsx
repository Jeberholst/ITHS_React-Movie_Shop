import { Button, Divider, makeStyles, TextField } from '@material-ui/core';
import React from 'react'
import MockUserProfile from './MockUserProfile';

const strAddComment = "Add a comment"
const strButtonText = "Comment"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        padding: 10,
        fontSize: 12,
        borderRadius: 10,
        background: 'rgb(0,0,0, 0.1)',
        flexWrap: 'column-reverse',
        "& *": {
            marginLeft: 5,
        }
    },
    header: {
        display: 'flex',
        fontSize: 16,
    },
    divider: {
        background: 'rgb(255,255,255, 0.1)',
        marginTop: 10,
        marginBottom: 30,
    },
    subContainer: {
        marginLeft: 25,
        marginRight: 25,
    },
    textField: {
        display: 'flex',
        alignContent: 'left',
        marginTop: 30,
        marginBottom: 10,
    },
    containerButton: {
        display: 'flex',
        flexDirection: 'row-reverse'
    }
}));

const MockCommentAdd = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            
            <div className={classes.root}>

                <div className={classes.header}>{strAddComment}</div>
                <Divider className={classes.divider}></Divider>

                <div className={classes.subContainer}>

                    <MockUserProfile/>
                    
                    <TextField
                        className={classes.textField}
                        not-required
                        id="filled-required"
                        label="Comment"
                        defaultValue="..."
                        variant="outlined"
                        />

                    <div className={classes.containerButton}>

                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            >
                            {strButtonText}
                            
                        </Button>

                    </div>
                </div>

            </div>

        </React.Fragment>
    );

}

export default MockCommentAdd;