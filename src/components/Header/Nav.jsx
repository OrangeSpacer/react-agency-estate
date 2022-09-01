import React from "react";
import classes from './Nav.module.scss'
import {Link} from 'react-router-dom'
const Nav = ({text,navLink,click}) => {
    return (
        <li className={classes.nav__item} onClick={click}>
            <Link to={navLink}>
                {text}
            </Link>
        </li>
    );
}
 
export default Nav;