import classes from './ActiveSlide.module.scss'

const ActiveSlide = ({arrayIndex,slideIndex,text}) => {
    return (
        <div style={{display:'flex',alignItems:'center'}} className={classes.slideActiveBlock}>
            <div className={classes.defaultSlide} style={arrayIndex === slideIndex ? {color:"#FCD54C"} : {color:'white'}}>
                {`0${arrayIndex+1}`}
            </div>
            <div className={classes.slideText}>
                Lorem Ipsum Dolorem apset
            </div>
        </div>
    );
}
 
export default ActiveSlide;