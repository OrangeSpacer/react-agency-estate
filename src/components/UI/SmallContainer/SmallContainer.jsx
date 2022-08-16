import classes from './SmallContainer.module.scss'

const SmallContainer = ({children}) => {
    return (
        <div className={classes.SmallContainer}>
            {children}
        </div>
    )
}
 
export default SmallContainer;