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

  const data = [
    {
      id: 1,
      title: 'Ezhel Alışamadım ile Canlı Performans',
      content:
        'Rapidiously underwhelm backend niches through real-time vortals. Quickly cultivate visionary leadership skills before process-centric catalysts for change. Energistically incubate mission-critical internal or "organic" sources and process-centric networks. Globally deliver next-generation expertise before cross functional resources. Quickly pontificate technically sound solutions via cross-unit manufactured products.\n\nCredibly impact long-term high-impact metrics vis-a-vis corporate resources. Seamlessly harness intermandated convergence for user-centric leadership skills. Competently formulate just in time e-commerce with an expanded array of leadership skills. Appropriately extend leveraged "outside the box" thinking without customer directed quality vectors. Monotonectally mesh viral web services via cross-platform scenarios.\n\nConveniently harness granular applications with diverse processes. Progressively maximize inexpensive customer service rather than client-centered meta-services. Holisticly benchmark client-centered leadership skills and resource-leveling core competencies. Uniquely plagiarize enabled expertise before equity invested communities. Distinctively evolve frictionless human capital through diverse growth strategies.\n\nDistinctively predominate strategic information without extensible relationships. Enthusiastically embrace effective web-readiness vis-a-vis visionary "outside the box" thinking. Uniquely develop cross-platform relationships before extensive interfaces. Seamlessly integrate extensible internal or "organic" sources vis-a-vis accurate potentialities. Quickly generate cutting-edge schemas via premier expertise.\n\nEnergistically pursue process-centric services rather than.',
      url: 'oniVKun5bIE',
      homepage: true,
      image: '/uploads/ezhelcanli_f85c4c61de.jpg',
      tag: 'ezhel',
    },
    {
      id: 1,
      title: 'Ezhel Alışamadım ile Canlı Performans',
      content:
        'Rapidiously underwhelm backend niches through real-time vortals. Quickly cultivate visionary leadership skills before process-centric catalysts for change. Energistically incubate mission-critical internal or "organic" sources and process-centric networks. Globally deliver next-generation expertise before cross functional resources. Quickly pontificate technically sound solutions via cross-unit manufactured products.\n\nCredibly impact long-term high-impact metrics vis-a-vis corporate resources. Seamlessly harness intermandated convergence for user-centric leadership skills. Competently formulate just in time e-commerce with an expanded array of leadership skills. Appropriately extend leveraged "outside the box" thinking without customer directed quality vectors. Monotonectally mesh viral web services via cross-platform scenarios.\n\nConveniently harness granular applications with diverse processes. Progressively maximize inexpensive customer service rather than client-centered meta-services. Holisticly benchmark client-centered leadership skills and resource-leveling core competencies. Uniquely plagiarize enabled expertise before equity invested communities. Distinctively evolve frictionless human capital through diverse growth strategies.\n\nDistinctively predominate strategic information without extensible relationships. Enthusiastically embrace effective web-readiness vis-a-vis visionary "outside the box" thinking. Uniquely develop cross-platform relationships before extensive interfaces. Seamlessly integrate extensible internal or "organic" sources vis-a-vis accurate potentialities. Quickly generate cutting-edge schemas via premier expertise.\n\nEnergistically pursue process-centric services rather than.',
      url: 'oniVKun5bIE',
      homepage: true,
      image: '/uploads/ezhelcanli_f85c4c61de.jpg',
      tag: 'ezhel',
    },
  ]

  return (
    <>
      {isMobile ? (
        <Swiper>
          <SwiperSlide>
            <Card data={data} />
          </SwiperSlide>
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
