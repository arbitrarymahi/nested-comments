import React from "react";
import TextField from "@material-ui/core/TextField";
import "./MyTextField.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
  smallerTextField: {
    '& .MuiOutlinedInput-input': {
      borderRadius: '20px',  
      padding: '8px',  
    },
  },
}));
function MyTextField({onChangeValue}) {
  const classes = useStyles();
  return <TextField  variant="outlined" onKeyDown={(e)=> {
    if(e.key == "Enter") {
      onChangeValue(e)
      e.target.value = ''}
  }} placeholder="Write a comment..."  className={"textField "+ classes.smallerTextField}/>;
}

export default MyTextField;
