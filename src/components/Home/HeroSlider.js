import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';





import SliderImage from 'img/slider/slider1.png';
import SliderImage2 from 'img/slider/slider2.png';


function HeroSlider(){
    return (
        <Swiper
            className={"hero-Slide"}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={1}
        >
            <SwiperSlide>
               <div className="heroSlider">
                   <div className="row">
                       <div className="col-md-6 p-0">
                           <img src={SliderImage} />
                       </div>
                       <div className="col-md-6 p-0 heroCont">
                           <h2 className="heroSlider_content">
                               Creator Forum brought DJ workshops, mental health panels and
                           </h2>
                       </div>
                   </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="heroSlider">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <img src={SliderImage2} />
                        </div>
                        <div className="col-md-6 p-0">
                            <h2 className="heroSlider_content">
                                Creator Forum brought DJ workshops, mental health panels and
                            </h2>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>

        </Swiper>
    )
}
export default  HeroSlider