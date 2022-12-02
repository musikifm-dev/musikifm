import { useGetVideoDataQuery } from 'store/api/data'
import { SwiperSlide } from 'swiper/react'
import { default as RBCard } from 'react-bootstrap/Card'
import { SliderContainer } from 'components/containers'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { APP, route } from 'utils/constants'
import styles from './index.module.scss'

export default function VideoSlider() {
  const { isSuccess, data } = useGetVideoDataQuery()
console.log(data);
  return (
    <SliderContainer header="VIDEO" breakpoints="video">
      {isSuccess &&
        data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className={styles.card}>
              <Link to={`${route.video}/${item.id}`} className={styles.card__link}>
                <RBCard.Img variant="top" src={APP.base + item.image} className={styles.card__img} />
              </Link>
              <RBCard.Body className={styles.card__body}>
                <RBCard.Title className={styles.card__title}>{item.title}</RBCard.Title>
                <section className={styles.footerSection}>
                  <Button variant="secondary" className={styles.footerSection__genre}>
                    #{item.tag}
                  </Button>
                  <div className={styles.footerSection__more}>more &gt;</div>
                </section>
              </RBCard.Body>
            </div>
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}
