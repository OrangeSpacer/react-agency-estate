import classes from './AppartamnetsSlide.module.scss'
const AppartamentsSlide = ({title,imgPath}) => {
    return (
        <div className={classes.slideBlock}>
            <div className={classes.slideFrontBlock}>
                <div className={classes.slideTitle}>
                    {title}
                </div>
                <img src={imgPath} alt="category" className={classes.slideImg}/>
            </div>
            <div className={classes.slideBackBlock}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.
            </div>
        </div>
    );
}
 
export default AppartamentsSlide;