import SmallContainer from "../UI/SmallContainer/SmallContainer";
import classes from './SmallBlock.module.scss'

const SmallBlock = ({title,subtitle,textTitle,textSubTitle}) => {
    return (
        <SmallContainer>
            <div className={classes.smallBlockContent}>
                <h2 className={classes.title}>
                    {title}
                </h2>
                <div className={classes.textTitle}>
                    {textTitle}
                </div>
            </div>
            <div>
                <h5 className={classes.subTitle}>
                    {subtitle}
                </h5>
                <div className={classes.textSubTitle}>
                    {textSubTitle}
                </div>
            </div>
        </SmallContainer>
    );
}
 
export default SmallBlock;