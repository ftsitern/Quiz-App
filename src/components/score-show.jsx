import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import questions from "../Questions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "auto",
    position: "relative",
    top: 150,
    padding: "120px 0px 120px 0px",
    borderRadius: "25px",
  },
  button: {
    margin: 20,
  },
}));
const getScore = (responses) => {
  let totalScore = 0;
  let scoreCard = responses.map((optionSelected) => {
    let qNumber = responses.indexOf(optionSelected);
    let question = questions[qNumber];
    let ans = "incorrect";
    if (optionSelected === question.correct) {
      totalScore += 1;
      ans = "correct";
    }
    return optionSelected + " - " + ans;
  });
  console.log({ totalScore: totalScore, scoreCard: scoreCard });
  return { totalScore: totalScore, scoreCard: scoreCard };
};
const Score = ({ responses }) => {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: "#FFC107", height: 900, textAlign: "center" }}
    >
      <Paper elevation={3} className={classes.root}>
        <div style={{ fontWeight: "bolder", fontSize: 22 }}>
          Submitted Successfuly ! 🙌
        </div>
        <br />
        <br />
        <h3> Your Response 👇</h3>
        <ul>
          {getScore(responses).scoreCard.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <br />
        <br />
        <h4>Your Final Score: {getScore(responses).totalScore}</h4>
      </Paper>
    </div>
  );
};

export default Score;
