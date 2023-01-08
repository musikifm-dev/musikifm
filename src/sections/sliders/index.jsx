import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper'
import { Swiper } from 'swiper/react'
import PropTypes from 'prop-types'
import 'swiper/scss'
import { renderBreakPoints } from 'utils/constants'
import styles from './index.module.scss'

export default function SliderContainer(props) {
  const { header, breakpoints, route, children } = props

  return (
    <div className={styles.slider}>
      {breakpoints !== 'hero' && (
        <div className="d-flex justify-content-between align-items-center title-slider">
          <h3 className={styles.slider__header}>{header}</h3>
          <Link to={route} className={styles.slider__seeAll}>
            See All
          </Link>
        </div>
      )}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={renderBreakPoints(breakpoints)}
        pagination={breakpoints === 'hero' ? false : true}
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
