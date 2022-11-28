import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from 'components'
import { route } from 'utils/constants'
import { useGetPodcastDataQuery } from 'store/api/data'
import styles from '../index.module.scss'

const PodcastSlider = () => {
  const { isSuccess, data } = useGetPodcastDataQuery()

  return (
    <div className={styles.slider}>
      <div className="d-flex justify-content-between align-items-center my-5">
        <h3 className={styles.slider__header}>PODCAST</h3>
        <Link to={route.podcast} className={styles.slider__seeAll}>
          See All
        </Link>
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
              <Card data={item} to={route.podcast} isPodcast={true} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}

export default PodcastSlider
