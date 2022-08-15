import classes from '../SwiperMain.module.scss'

const SlideContent = ({imgSlide,textSlide}) => {
    return (
        <>
            <div className={classes.content}>
                <img src='/img/MainSlider/imgDivider.png' className={classes.divider}/>
                <h2>
                    {textSlide}
                    {/* Welcome home <b style={{color:'#FCD54C'}}>To</b> luxury */}
                </h2>
            </div>
            <img src={imgSlide} className={classes.img}/>
        </>
    );
}
 
export default SlideContent;