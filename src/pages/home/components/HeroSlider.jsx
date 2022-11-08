import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from 'react-bootstrap';
import 'swiper/scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderImage from '../../../assets/img/slider/slider1.png';
import SliderImage2 from '../../../assets/img/slider/slider2.png';
import styles from '../style.module.scss';

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className={styles.heroSlide}
      pagination={{
        clickable: true
      }}
      breakpoints={{
        576: { slidesPerView: 1 },
        768: { slidesPerView: 1.1, spaceBetween: 20 },
        992: { spaceBetween: 25 }
      }}
    >
      <SwiperSlide>
        <div className={styles.heroSlider}>
          <div className="row">
            <div className="col-8">
              <Image src={SliderImage} fluid={true} />
            </div>
            <div className="col-4 my-auto">
              <h2 className={styles.heroSliderContent}>Creator Forum brought DJ workshops, mental health panels and</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.heroSlider}>
          <div className="row">
            <div className="col-8">
              <Image src={SliderImage2} fluid={true} />
            </div>
            <div className="col-4 my-auto">
              <h2 className={styles.heroSliderContent}>Creator Forum brought DJ workshops, mental health panels and</h2>
            </div>
          </div>
        </div>
      </SwiperSlide>
      {/* <SwiperSlide src={SliderImage} width="593px">
        <div className="row">
          <div className="col-6">
            <Image src={SliderImage} width="593px" />
          </div>
          <div className="col-4 mx-auto my-auto">
            <h2 className={styles.heroSliderContent}>Creator Forum brought DJ workshops, mental health panels and</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide src={SliderImage2} width="593px">
        <div className="row">
          <div className="col-md-6">
            <Image src={SliderImage2} width="593px" />
          </div>
          <div className="col-4 mx-auto my-auto">
            <h2 className={styles.heroSliderContent}>Creator Forum brought DJ workshops, mental health panels and</h2>
          </div>
        </div>
      </SwiperSlide> */}
    </Swiper>
  );
};
export default HeroSlider;
