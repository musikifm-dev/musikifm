import PropTypes from 'prop-types'
import { SwiperSlide } from 'swiper/react'
import { useGetPodcastDataQuery } from 'store/api/admin-base'
import SliderContainer from '../index'
import { route } from 'utils/constants'
import { PodcastCard } from 'sections'

export default function PodcastSlider({ title }) {
  const { isSuccess, data } = useGetPodcastDataQuery()

  return (
    <SliderContainer header={title} breakpoints="podcast" route={route.podcast}>
      {isSuccess &&
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <PodcastCard data={item} />
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}

PodcastSlider.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  isPodcast: PropTypes.bool,
  isBlog: PropTypes.bool,
}
