import { Navigation, Pagination, Autoplay } from 'swiper'

import { Link } from 'react-router-dom'
import { route } from 'utils/constants'
import { Card } from 'components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useGetBlogDataQuery } from 'store/api/data'

export default function BlogSlider() {
  const { isSuccess, data } = useGetBlogDataQuery()

  return (
    <div className="blog mt-5">
      <div className="titleDiv">
        <h3>BLOG</h3>
        <Link to={route.blog}>See All</Link>
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
        <SwiperSlide>
          {isSuccess &&
            data?.map((item) => (
              <div className="item" key={item.id}>
                <Card data={item} to={route.blog} />
              </div>
            ))}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
