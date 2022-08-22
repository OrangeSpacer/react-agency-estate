import classes from '../SwiperMain.module.scss'

const SlideContent = ({imgSlide,textSlide}) => {
    return (
        <>
            <div className={classes.content}>
                <img src='/img/MainSlider/imgDivider.png' className={classes.divider} alt='SlideImg'/>
                <h2>
                    {textSlide}
                    {/* Welcome home <b style={{color:'#FCD54C'}}>To</b> luxury */}
                </h2>
            </div>
            <img src={imgSlide} className={classes.img} alt='SlideImg'/>
        </>
    );
}
 
export default SlideContent;