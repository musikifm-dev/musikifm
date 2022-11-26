import { Navigation, Pagination, Autoplay } from 'swiper'
import { Link } from 'react-router-dom'
import { useGetVideoDataQuery } from 'store/api/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { route } from 'utils/constants'
import { Card } from 'components'
import styles from '../index.module.scss'
import 'swiper/scss'

export default function VideoSlider() {
  const { isSuccess, data } = useGetVideoDataQuery()

  return (
    <div className={styles.slider}>
      <div className="d-flex justify-content-between align-items-center my-5">
        <h3 className={styles.slider__header}>VİDEO</h3>
        <Link to={route.video} className={styles.slider__seeAll}>See All</Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={70}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {isSuccess &&
          data.map((item, i) => (
            <SwiperSlide key={i}>
              <Card data={item} to={route.video} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
