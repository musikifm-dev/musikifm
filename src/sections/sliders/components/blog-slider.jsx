import { SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'
import { route } from 'utils/constants'
import { useGetBlogDataQuery } from 'store/api/admin-base'
import SliderContainer from 'sections/sliders'
import { BlogCard } from 'sections'

export default function BlogSlider({ title }) {
  const { isSuccess, data } = useGetBlogDataQuery()

  return (
    <SliderContainer header={title} breakpoints="blog" route={route.blog}>
      {isSuccess &&
        data?.map((item) => (
          <SwiperSlide key={item.id}>
            <BlogCard data={item} />
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}

BlogSlider.propTypes = {
  title: PropTypes.string,
}
