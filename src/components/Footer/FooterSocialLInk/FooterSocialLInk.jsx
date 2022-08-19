import classes from './FooterSocialLink.module.scss'
const FooterSocialLink = ({imgPath,socialLink}) => {
    return (
        <li className={classes.socialItem}>
            <a href={socialLink ? socialLink: '/'} className={classes.socialLink}>
                <img src={imgPath} alt="socialIcon"/>
            </a>
        </li>
    );
}
 
export default FooterSocialLink;