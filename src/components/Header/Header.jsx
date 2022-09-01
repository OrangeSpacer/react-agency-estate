import React from "react";
import classes from './Header.module.scss'
import {Link} from 'react-router-dom'
import Nav from "./Nav";
import Button from "../UI/Button/Button";
const Header = ({burgerOpen,burgerOpenFunc}) => {
    const navItems = [
        {text:"Buy",navLink:"/Buy"},
        {text:"Blog",navLink:"/Blog"},
        {text:"Contact",navLink:"/Contact"}
    ]
    return (
        <div className={classes.header}>
            <Link to="/">
                <img src="/img/header/Header.svg" alt="Logo" className={classes.header__img}/>
            </Link>
            <nav className={classes.header__nav} style={burgerOpen ? {top:"100%",opacity:'1',transition:'all 0.5s ease'}:null}>
                <ul>
                    {navItems.map(item => <Nav text={item.text} navLink={item.navLink} key={item.text} click={burgerOpenFunc}/>)}
                </ul>
            </nav>
            <div className={classes.header__contact}>
                <Button text='Book a consultation' click={() => console.log('click')} type='modal'/>
                <a href="tel:72126742510" className={classes.header__phone}>
                    +7 (212) 674-25-10
                </a>
            </div>
            <div className={classes.header__dividers} onClick={burgerOpenFunc}>
                <img src={burgerOpen ? '/img/Burger/burgerOpen.svg':'/img/Burger/burgerClose.svg'} alt="burgerImg"/>
            </div>
        </div>
    );
}
 
export default Header;