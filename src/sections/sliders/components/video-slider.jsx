import { SwiperSlide } from 'swiper/react'
import SliderContainer from 'sections/sliders'
import { route } from 'utils/constants'
import PropTypes from 'prop-types'
import { VideoCard } from 'sections'
import { useGetVideoDataQuery } from 'store/api/admin-base'

export default function VideoSlider({ title }) {
  const { isSuccess, data } = useGetVideoDataQuery()

  return (
    <SliderContainer header={title} breakpoints="video" route={route.video}>
      {isSuccess &&
        data.map((item, i) => (
          <SwiperSlide key={i}>
            <VideoCard data={item} />
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}

VideoSlider.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  loader: PropTypes.bool,
}
