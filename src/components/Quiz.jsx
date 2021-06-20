import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import questions from "../Questions";
import Options from "./Options"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "50%",
        margin: 'auto',
        position: 'relative',
        top: 150,
        padding: '80px 0px 0px 0px',
        borderRadius: '25px'
    },
    button: {
        margin: 20
    }
}));

export default function Quiz() {
    const [Qnumber, setQnumber] = useState(0);
    const [responses, setresponses] = useState([]);
    const [qIndex, setqIndex] = useState([]);
    const nextQues = () => {
        setQnumber((preQnumber) => preQnumber + 1);
        document.getElementById(`${qIndex[Qnumber]}`).checked = false;
        localStorage.getItem("key")
    }

    const prevQues = () => {
        setQnumber((preQnumber) => preQnumber - 1);
        // document.getElementById(`${qIndex[Qnumber]}`).checked = true;
    }

    const classes = useStyles();
    return (
        <>
            <div style={{backgroundColor: "#FFC107", height: 720}}>
            <h1 className="heading">FTS Quiz App</h1>
            <Paper elevation={3} className={classes.root}>
                <div style={{textAlign: "center", position: "relative", bottom: 10}}>
                    <p>{questions[Qnumber].question}</p>

                    {questions[Qnumber].options.map((q, index) => (
                        <Options q={q} responses={responses} index={index} qIndex={qIndex}/>
                    ))}

                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Button 
                            variant="contained"
                            color="secondary" 
                            className={classes.button} 
                            onClick={prevQues}
                        >
                            Back
                        </Button>
                        <Button 
                            variant="contained"
                            color="secondary" 
                            className={classes.button} 
                            onClick={nextQues}
                        >
                            Save and Next
                        </Button>
                        
                    </div> 
                </div>
            </Paper>
            </div>
        </>
    )
}
