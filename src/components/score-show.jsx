import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    margin: 'auto',
    position: 'relative',
    top: 150,
    padding: '120px 0px 120px 0px',
    borderRadius: '25px',
  },
  button: {
    margin: 20,
  },
}))
const Score = () => {
 const classes = useStyles();
 return (
  <div style={{backgroundColor: "#FFC107", height: 720}}>
   <Paper elevation={3} className={classes.root}>
                <div style={{textAlign: "center"}}>
                 Submitted Successfuly
                </div>
   </Paper>
   
  </div>
 )
}

export default Score
