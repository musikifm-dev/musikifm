import 'swiper/scss'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './index.module.scss'
import { default as RBCard } from 'react-bootstrap/Card'

import { Stack } from 'react-bootstrap'
import { APP } from 'utils/constants'
import { useGetHomeDataQuery } from 'store/api/data'

const HeroSlider = () => {
  const { data, isSuccess } = useGetHomeDataQuery()

  // const data = [
  //   {
  //     id: 1,
  //     title: 'Ezhel Alışamadım ile Canlı Performans',
  //     content:
  //       'Rapidiously underwhelm backend niches through real-time vortals. Quickly cultivate visionary leadership skills before process-centric catalysts for change. Energistically incubate mission-critical internal or "organic" sources and process-centric networks. Globally deliver next-generation expertise before cross functional resources. Quickly pontificate technically sound solutions via cross-unit manufactured products.\n\nCredibly impact long-term high-impact metrics vis-a-vis corporate resources. Seamlessly harness intermandated convergence for user-centric leadership skills. Competently formulate just in time e-commerce with an expanded array of leadership skills. Appropriately extend leveraged "outside the box" thinking without customer directed quality vectors. Monotonectally mesh viral web services via cross-platform scenarios.\n\nConveniently harness granular applications with diverse processes. Progressively maximize inexpensive customer service rather than client-centered meta-services. Holisticly benchmark client-centered leadership skills and resource-leveling core competencies. Uniquely plagiarize enabled expertise before equity invested communities. Distinctively evolve frictionless human capital through diverse growth strategies.\n\nDistinctively predominate strategic information without extensible relationships. Enthusiastically embrace effective web-readiness vis-a-vis visionary "outside the box" thinking. Uniquely develop cross-platform relationships before extensive interfaces. Seamlessly integrate extensible internal or "organic" sources vis-a-vis accurate potentialities. Quickly generate cutting-edge schemas via premier expertise.\n\nEnergistically pursue process-centric services rather than.',
  //     url: 'oniVKun5bIE',
  //     homepage: true,
  //     image: '/uploads/ezhelcanli_f85c4c61de.jpg',
  //     tag: 'ezhel',
  //   },
  //   {
  //     id: 2,
  //     title: 'Ezhel Alışamadım ile Canlı Performans',
  //     content:
  //       'Rapidiously underwhelm backend niches through real-time vortals. Quickly cultivate visionary leadership skills before process-centric catalysts for change. Energistically incubate mission-critical internal or "organic" sources and process-centric networks. Globally deliver next-generation expertise before cross functional resources. Quickly pontificate technically sound solutions via cross-unit manufactured products.\n\nCredibly impact long-term high-impact metrics vis-a-vis corporate resources. Seamlessly harness intermandated convergence for user-centric leadership skills. Competently formulate just in time e-commerce with an expanded array of leadership skills. Appropriately extend leveraged "outside the box" thinking without customer directed quality vectors. Monotonectally mesh viral web services via cross-platform scenarios.\n\nConveniently harness granular applications with diverse processes. Progressively maximize inexpensive customer service rather than client-centered meta-services. Holisticly benchmark client-centered leadership skills and resource-leveling core competencies. Uniquely plagiarize enabled expertise before equity invested communities. Distinctively evolve frictionless human capital through diverse growth strategies.\n\nDistinctively predominate strategic information without extensible relationships. Enthusiastically embrace effective web-readiness vis-a-vis visionary "outside the box" thinking. Uniquely develop cross-platform relationships before extensive interfaces. Seamlessly integrate extensible internal or "organic" sources vis-a-vis accurate potentialities. Quickly generate cutting-edge schemas via premier expertise.\n\nEnergistically pursue process-centric services rather than.',
  //     url: 'oniVKun5bIE',
  //     homepage: true,
  //     image: '/uploads/ezhelcanli_f85c4c61de.jpg',
  //     tag: 'ezhel',
  //   },
  //   {
  //     id: 3,
  //     title: 'Ezhel Alışamadım ile Canlı Performans',
  //     content:
  //       'Rapidiously underwhelm backend niches through real-time vortals. Quickly cultivate visionary leadership skills before process-centric catalysts for change. Energistically incubate mission-critical internal or "organic" sources and process-centric networks. Globally deliver next-generation expertise before cross functional resources. Quickly pontificate technically sound solutions via cross-unit manufactured products.\n\nCredibly impact long-term high-impact metrics vis-a-vis corporate resources. Seamlessly harness intermandated convergence for user-centric leadership skills. Competently formulate just in time e-commerce with an expanded array of leadership skills. Appropriately extend leveraged "outside the box" thinking without customer directed quality vectors. Monotonectally mesh viral web services via cross-platform scenarios.\n\nConveniently harness granular applications with diverse processes. Progressively maximize inexpensive customer service rather than client-centered meta-services. Holisticly benchmark client-centered leadership skills and resource-leveling core competencies. Uniquely plagiarize enabled expertise before equity invested communities. Distinctively evolve frictionless human capital through diverse growth strategies.\n\nDistinctively predominate strategic information without extensible relationships. Enthusiastically embrace effective web-readiness vis-a-vis visionary "outside the box" thinking. Uniquely develop cross-platform relationships before extensive interfaces. Seamlessly integrate extensible internal or "organic" sources vis-a-vis accurate potentialities. Quickly generate cutting-edge schemas via premier expertise.\n\nEnergistically pursue process-centric services rather than.',
  //     url: 'oniVKun5bIE',
  //     homepage: true,
  //     image: '/uploads/ezhelcanli_f85c4c61de.jpg',
  //     tag: 'ezhel',
  //   },
  //   {
  //     id: 4,
  //     title: 'Ezhel Alışamadım ile Canlı Performans',
  //     content:
  //       'Rapidiously underwhelm backend niches through real-time vortals. Quickly cultivate visionary leadership skills before process-centric catalysts for change. Energistically incubate mission-critical internal or "organic" sources and process-centric networks. Globally deliver next-generation expertise before cross functional resources. Quickly pontificate technically sound solutions via cross-unit manufactured products.\n\nCredibly impact long-term high-impact metrics vis-a-vis corporate resources. Seamlessly harness intermandated convergence for user-centric leadership skills. Competently formulate just in time e-commerce with an expanded array of leadership skills. Appropriately extend leveraged "outside the box" thinking without customer directed quality vectors. Monotonectally mesh viral web services via cross-platform scenarios.\n\nConveniently harness granular applications with diverse processes. Progressively maximize inexpensive customer service rather than client-centered meta-services. Holisticly benchmark client-centered leadership skills and resource-leveling core competencies. Uniquely plagiarize enabled expertise before equity invested communities. Distinctively evolve frictionless human capital through diverse growth strategies.\n\nDistinctively predominate strategic information without extensible relationships. Enthusiastically embrace effective web-readiness vis-a-vis visionary "outside the box" thinking. Uniquely develop cross-platform relationships before extensive interfaces. Seamlessly integrate extensible internal or "organic" sources vis-a-vis accurate potentialities. Quickly generate cutting-edge schemas via premier expertise.\n\nEnergistically pursue process-centric services rather than.',
  //     url: 'oniVKun5bIE',
  //     homepage: true,
  //     image: '/uploads/ezhelcanli_f85c4c61de.jpg',
  //     tag: 'ezhel',
  //   },
  // ]

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      breakpoints={{
        576: {},
        768: { slidesPerView: 1, spaceBetween: 10 },
        992: { slidesPerView: 1.1, spaceBetween: 20 },
      }}
    >
      {isSuccess &&
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <RBCard bsPrefix={styles.card}>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <RBCard.Img variant="top" src={APP.base + item.image} className={styles.card__img} />
                </div>
                <div className="col-sm-12 col-md-6 align-items-center">
                  <RBCard.Body>
                    <Stack direction="vertical" gap={1}>
                      <RBCard.Title className={styles.card__title}>{item.slidertitle}</RBCard.Title>
                      <RBCard.Text className={styles.card__description}>{item.sliderdescription}</RBCard.Text>
                    </Stack>
                  </RBCard.Body>
                </div>
              </div>
            </RBCard>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
export default HeroSlider
