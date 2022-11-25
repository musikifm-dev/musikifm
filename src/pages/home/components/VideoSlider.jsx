import { route } from 'utils/constants'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Card } from 'components'
import 'swiper/scss'
import { useGetVideoDataQuery } from 'store/api/data'

export default function VideoSlider() {
  const { isSuccess, data } = useGetVideoDataQuery()
console.log(data);
  return (
    <div className="video mt-5">
      <div className="titleDiv">
        <h3>VİDEO</h3>
        <Link to={route.video}>See All</Link>
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
              <Card data={item} to={route.video} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
