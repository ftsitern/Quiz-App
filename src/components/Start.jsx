import React, {useState} from 'react'
import Welcome from "./Welcome";
import Quiz from "./Quiz"

export default function Start() {

    const [quizState, setquizState] = useState(false);

    const startquiz = () => {
        setquizState(true);
    }

    return (
        <>
        {!quizState ? <Welcome startquiz = {startquiz} /> : <Quiz />}
        </>
    )
}
