import React from "react";
import classes from './Header.module.scss'
import {Link} from 'react-router-dom'
import Nav from "./Nav";
import Button from "../Button/Button";
const Header = () => {
    const navItems = [
        {text:"Buy",navLink:"/Blog"},
        {text:"Blog",navLink:"/Blog"},
        {text:"About",navLink:"/About"},
        {text:"Contact",navLink:"/Contact"}
    ]
    return (
        <div className={classes.header}>
            <Link to="/">
                <img src="/img/header/Header.svg" alt="Logo" className={classes.header__img}/>
            </Link>
            <nav className={classes.header__nav}>
                <ul>
                    {navItems.map(item => <Nav text={item.text} navLink={item.navLink} key={item.text}/>)}
                </ul>
            </nav>
            <div className={classes.header__contact}>
                <Button text='Book a consultation' click={() => console.log('click')} />
                <a href="tel:72126742510" className={classes.header__phone}>
                    +7 (212) 674-25-10
                </a>
            </div>
        </div>
    );
}
 
export default Header;