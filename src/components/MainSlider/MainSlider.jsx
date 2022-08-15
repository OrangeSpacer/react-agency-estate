import {Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import classes from './SwiperMain.module.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import Container from '../UI/Container/Container';
import SlideContent from './SlideContent/SliderContent';
import ActiveSlide from './ActiveSlide/ActiveSlide';
import {useState} from 'react';


const MainSlider = () => {
    const [activeIndex,setActiveIndex] = useState(0)
    const sliderSlides = [
        {imgPath:'/img/MainSlider/slider1.png',text:`Welcome home To luxury`},
        {imgPath:'/img/MainSlider/slider2.png',text:'Welcome home To luxury'},
        {imgPath:'/img/MainSlider/slider1.png',text:'Welcome home To luxury'}
    ]
    return (
        <Container>
            <Swiper
                navigation={{
                    nextEl: '#next',
                    prevEl: '#prev'
                }}
                spaceBetween={50}
                modules={[Pagination, Navigation]}
                className={classes.SwiperMain}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {sliderSlides.map((item,index) => 
                    <SwiperSlide key={index}>
                        <SlideContent imgSlide={item.imgPath} textSlide={item.text} /> 
                    </SwiperSlide>)}
                <div className={classes.navigation}>
                    <button className={classes.prev} id="prev">Prev</button>
                    <button className={classes.next} id="next">Next</button>
                </div>
                <div className={classes.slidesContent}>
                        {sliderSlides.map((item,index) => <ActiveSlide arrayIndex={index} slideIndex={activeIndex} key={index}/>)}
                </div>
            </Swiper>
        </Container>
    );
}
 
export default MainSlider;