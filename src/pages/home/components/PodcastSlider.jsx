import { Card } from 'components'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import { route } from 'utils/constants'
import styles from '../style.module.scss'
import { useGetPodcastDataQuery } from 'store/api/data'

export default function PodcastSlider() {
  const { isSuccess, data } = useGetPodcastDataQuery()

  return (
    <div className={styles.slider}>
      <div className="d-flex justify-content-between align-items-center my-5">
        <h3 className="sectionHeader">PODCAST</h3>
        <Link to={route.podcast} className="seeAll">
          See All
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={70}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
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
              <Card data={item} to={route.podcast} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
