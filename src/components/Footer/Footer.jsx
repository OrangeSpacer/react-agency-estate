import {Link} from 'react-router-dom'
import classes from './Footer.module.scss'
import FooterItem from './FooterItem/FooterItem';
import FooterSocialLink from './FooterSocialLInk/FooterSocialLInk';
const Footer = ({footerItems,footerSocialLInks}) => {
    return (
        <div className={classes.footerContent}>
            <Link to="/">
                <img src="img/header/Header.svg" alt="logo" className={classes.footerLogo}/>
            </Link>
            <div className={classes.footerItems}>
                {footerItems.map((item,index) => <FooterItem name={item.title} isButton={item.isButton} key={index} items={item.items}/>)}
            </div>
            <div className={classes.footerMoreInfo}>
                <div className={classes.footerCopyright}>
                    Copyright © 2022 Dubai Realty
                </div>
                <div>
                    <ul className={classes.footerSocialLinks}>
                        {footerSocialLInks.map((item,index) => <FooterSocialLink imgPath={item.imgPath} key={index}/>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;