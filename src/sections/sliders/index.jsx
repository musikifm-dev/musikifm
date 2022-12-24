import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper } from 'swiper/react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import 'swiper/scss'

export default function SliderContainer(props) {
  const { header, breakpoints, route, children } = props

  const renderBreakPoints = () => {
    switch (breakpoints) {
      case 'hero':
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
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
        }
      case 'podcast':
        return {
          320: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4.7,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4.2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 26,
          },
          1400: {
            slidesPerView: 5,
            spaceBetween: 26,
          },
          1920: {
            slidesPerView: 5,
            spaceBetween: 26,
          },
        }
      case 'blog':
        return {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
          1920: {
            slidesPerView: 4.5,
            spaceBetween: 20,
          },
        }
      case 'video':
        return {
          320: {
            slidesPerView: 1.2,
            spaceBetween: 20,
          },
          576: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1400: {
            slidesPerView: 2.8,
            spaceBetween: 7,
          },
          1920: {
            slidesPerView: 2.8,
            spaceBetween: 7,
          },
        }
      default:
        return null
    }
  }

  return (
    <div className={styles.slider}>
      {breakpoints !== 'hero' && (
        <div className="d-flex justify-content-between align-items-center my-5">
          <h3 className={styles.slider__header}>{header}</h3>
          <Link to={route} className={styles.slider__seeAll}>
            See All
          </Link>
        </div>
      )}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
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
  breakpoints: PropTypes.string,
  route: PropTypes.string,
}
