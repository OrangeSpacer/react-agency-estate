import {Pagination,Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './CommentSlider.module.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SlideContent from '../CommentSlider/CommentSlide/CommentSlide';

const CommentSlider = () => {
    const commentSliderSlide = [
        {name:'Paul',companyName:'Owner in Paul.com',comment:'Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.',imgPath:'/img/CommentSlider/1.png'},
        {name:'Robert',companyName:'Founder in Apple inc.',comment:'Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing',imgPath:'/img/CommentSlider/2.png'},
        {name:'Paul',companyName:'Owner in Paul.com',comment:'Projects for many large domestic and foreign corporations, enterprises in many elds such as nance, banking, F&B, education, communication.',imgPath:'/img/CommentSlider/1.png'},
        {name:'Robert',companyName:'Founder in Apple inc.',comment:'Founded in 2007, Sparch is specializing in providing innovative services such as website design, brand identity and marketing',imgPath:'/img/CommentSlider/2.png'}
    ]
    return (
    <div className={classes.commentBlock}>
        <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        loop={true}

        breakpoints ={{
            1440: {
                slidesPerView: 3
            },
            768:{
                slidesPerView: 2
            }
        }}
        className={classes.commentSlider}
        pagination = {{
            clickable: true,
        }}
        >
            {commentSliderSlide.map((item,index) => 
                <SwiperSlide key={index} style={{margin:'0 auto'}}>
                    <SlideContent 
                        name={item.name} 
                        companyName={item.companyName} 
                        comment={item.comment}
                        imgPath={item.imgPath}/>
                </SwiperSlide>)}
        </Swiper>
    </div>
    );
}
 
export default CommentSlider;