import React from "react";
import classes from './Button.module.scss';
const Button = ({click,text}) => {
    return (
        <button onClick={click} className={classes.modal}>
            {text}
        </button>
    );
}
 
export default Button;