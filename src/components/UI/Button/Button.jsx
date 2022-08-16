import React from "react";
import './Button.scss';
const Button = ({click,text,type,disabled}) => {
    return (
        <button onClick={click} className={[type,'btn'].join(' ')} disabled={disabled}>
            {text}
        </button>
    );
}
 
export default Button;