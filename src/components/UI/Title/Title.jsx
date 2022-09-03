import classes from './Title.module.scss'
const Title = ({title,paddingTop}) => {
    return (
        <h2 className={classes.title} style={{paddingTop:`${paddingTop}px`}}>
            {title}
        </h2>
    );
}
 
export default Title