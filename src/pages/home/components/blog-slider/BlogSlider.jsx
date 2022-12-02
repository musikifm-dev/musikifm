import { APP, route } from 'utils/constants'
import { default as RBCard } from 'react-bootstrap/Card'
import { SwiperSlide } from 'swiper/react'
import { useGetBlogDataQuery } from 'store/api/data'
import { SliderContainer } from 'components/containers'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import styles from './index.module.scss'

export default function BlogSlider() {
  const { isSuccess, data } = useGetBlogDataQuery()

  return (
    <SliderContainer header="BLOG" breakpoints="blog">
      {isSuccess &&
        data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.card}>
              <Link to={`${route.video}/${item.id}`} className={styles.card__link}>
                <RBCard.Img variant="top" src={APP.base + item.image} className={styles.card__img} />
              </Link>
              <RBCard.Body className={styles.card__body}>
                <RBCard.Title className={styles.card__title}>{item.title}</RBCard.Title>
                <div className={styles.footerSection}>
                  <Button variant="secondary" className={styles.footerSection__genre}>
                    #Techno
                  </Button>
                  <div className={styles.footerSection__more}>more &gt;</div>
                </div>
              </RBCard.Body>
            </div>
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}
