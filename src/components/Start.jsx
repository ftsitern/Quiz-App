import React, {useState} from 'react'
import Welcome from "./Welcome";
import Quiz from "./Quiz"

export default function Start() {

    const [quizState, setquizState] = useState(false);
<<<<<<< HEAD
    
=======
>>>>>>> df75820b51b1950dad02f552e80570c343193be4

    const startquiz = () => {
        setquizState(true);
    }

    return (
        <>
<<<<<<< HEAD
        {!quizState ? <Welcome startquiz = {startquiz} /> :<Quiz/>}
=======
        {!quizState ? <Welcome startquiz = {startquiz} /> : <Quiz />}
>>>>>>> df75820b51b1950dad02f552e80570c343193be4
        </>
    )
}
