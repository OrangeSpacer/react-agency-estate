import classes from './Title.module.scss'
const Title = ({title}) => {
    return (
        <h2 className={classes.title}>
            {title}
        </h2>
    );
}
 
export default Title