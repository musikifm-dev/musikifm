import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'assets/svg'
import styles from './index.module.scss'
import { Navigation, Pagination, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { deletePodcastFilter, setPodcastFilter } from 'store/slices/podcast'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'

const mock = [
  'ipsum',
  'sit amet',
  'lorem',
  'dolar',
  'Nature',
  'Outdoor',
  'Mixasdler',
  'Çizgssi Filmler',
  'Güzellik ilgili ipuçları',
  'Gsdçları',
  'Orman',
  'Metal',
  'Mixler',
  'Rock',
  'Emeruk',
]

export default function FilterBar(props) {
  const { selectedFilter } = useSelector((state) => state.podcast)
  const dispatch = useDispatch()
  const { navigate } = props

  const clickHandler = (val) => {
    if (!selectedFilter.filter((f) => f === val).length > 0) {
      dispatch(setPodcastFilter(val))
    } else {
      dispatch(deletePodcastFilter(val))
    }
  }

  return (
    <div className={styles.backBanner}>
      <Link to={navigate} className="d-flex align-items-center text-white text-decoration-none">
        <Icon name="prev" size={22} />
        <div className={styles.backBanner__icon}>Back</div>
      </Link>

      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination, Keyboard]}
        keyboard={{
          enabled: true,
        }}
        className={styles.swiper}
      >
        {mock.map((item, i) => (
          <SwiperSlide key={i} className={styles.x}>
            <Button
              className={clsx(styles.backBanner__btn, selectedFilter.includes(item) ? styles.clicked : null)}
              onClick={() => clickHandler(item)}
            >
              {item}
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

FilterBar.propTypes = {
  navigate: PropTypes.any,
}
