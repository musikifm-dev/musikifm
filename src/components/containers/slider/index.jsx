import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper } from 'swiper/react'
import PropTypes from 'prop-types'
import { route } from 'utils/constants'
import styles from './index.module.scss'
import 'swiper/scss'

export default function SliderContainer(props) {
  const { children, header, breakpoints } = props

  const renderBreakPoints = () => {
    switch (breakpoints) {
      case 'podcast':
        return {
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
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }
      case 'blog':
        return {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }
      case 'video':
        return {
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }
      default:
        return null
    }
  }

  return (
    <div className={styles.slider}>
      <div className="d-flex justify-content-between align-items-center my-5">
        <h3 className={styles.slider__header}>{header}</h3>
        <Link to={route.video} className={styles.slider__seeAll}>
          See All
        </Link>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={70}
        pagination={{
          clickable: true,
        }}
        breakpoints={renderBreakPoints(breakpoints)}
      >
        {children}
      </Swiper>
    </div>
  )
}

SliderContainer.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string,
  className: PropTypes.string,
  breakpoints: PropTypes.any,
}
