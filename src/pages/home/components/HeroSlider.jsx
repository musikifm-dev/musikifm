import 'swiper/scss'
import 'swiper/css/navigation'
import SliderImage from '../../../assets/img/slider/slider1.png'
import { Image } from 'react-bootstrap'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css/pagination'
import SliderImage2 from '../../../assets/img/slider/slider2.png'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from '../style.module.scss'
import { useWindowSize } from '../../../utils/hooks/useWindowSize.jsx'
import { Card } from 'components'

const HeroSlider = () => {
  const { isMobile } = useWindowSize()

  const data = {
    id: '2',
    title: 'asd',
    description: 'LOrem',
    image: '/',
  }

  return (
    <>
      {isMobile ? (
        <Swiper>
          <Card id={1} item={data} />
        </Swiper>
      ) : (
        <Swiper
          modules={[Navigation, Autoplay]}
          className={styles.heroSlide}
          breakpoints={{
            576: {},
            768: { slidesPerView: 1, spaceBetween: 10 },
            992: { slidesPerView: 1.1, spaceBetween: 20 },
          }}
        >
          <SwiperSlide>
            <div className={styles.heroSlider}>
              <div className="row">
                <div className="col-8">
                  <Image src={SliderImage} />
                </div>
                <div className="col-4 my-auto">
                  <h2 className={styles.heroSliderContent}>
                    Creator Forum brought DJ workshops, mental health panels and
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.heroSlider}>
              <div className="row">
                <div className="col-8">
                  <Image src={SliderImage2} />
                </div>
                <div className="col-4 my-auto">
                  <h2 className={styles.heroSliderContent}>
                    Creator Forum brought DJ workshops, mental health panels and
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>{' '}
          <SwiperSlide>
            <div className={styles.heroSlider}>
              <div className="row">
                <div className="col-8">
                  <Image src={SliderImage} />
                </div>
                <div className="col-4 my-auto">
                  <h2 className={styles.heroSliderContent}>
                    Creator Forum brought DJ workshops, mental health panels and
                  </h2>
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
      )}
    </>
  )
}
export default HeroSlider
