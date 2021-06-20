import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: 'auto',
        position: 'relative',
        top: 150,
        padding: '120px 0px 120px 0px',
        borderRadius: '25px'
    },
    button: {
        margin: 20
    }
}));


export default function Welcome({startquiz}) {
    const classes = useStyles();

    return (
        <>
            <div style={{backgroundColor: "#FFC107", height: 720}}>
            <h1 className="heading">FTS Quiz App</h1>
            <Paper elevation={3} className={classes.root}>
                <div style={{textAlign: "center"}}>
                    <Button 
                        variant="contained"
                        color="secondary" 
                        className={classes.button} 
                        onClick={startquiz}
                    >
                        Start Quiz
                    </Button>
                </div>
            </Paper>
            </div>
        </>
    );
}
