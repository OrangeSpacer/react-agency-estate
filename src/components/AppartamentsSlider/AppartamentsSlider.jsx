import { SwiperSlide,Swiper } from "swiper/react";
import {Pagination} from 'swiper';
import AppartamentsSlide from "./AppartamnetsSlide/AppartamentsSlide";
import classes from './AppartamnetsSlider.module.scss'
const AppartamentsSlider = ({slidesBlock,isLoading}) => {
    return (
        <div>
            <h2 className={classes.appartamentSliderTitle}>
                All Apartments <br/>Category
            </h2>
            <Swiper 
                modules={[Pagination]} 
                pagination={{ clickable: true }}
                className={classes.appartamentSlider}
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                breakpoints ={{
                    1825: {
                        slidesPerView: 4
                    },
                    1342:{
                        slidesPerView: 3
                    },
                    768:{
                        slidesPerView: 2
                    }
                }}
            >
                {isLoading ? null:slidesBlock[0].map((item,index) => 
                    <SwiperSlide key={index} className={classes.sliderSlideBlock}>
                        <AppartamentsSlide title={item.title} imgPath={item.imgPath}/>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
}
 
export default AppartamentsSlider;