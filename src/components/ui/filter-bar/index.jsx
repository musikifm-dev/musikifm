import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'assets/svg'
import styles from './index.module.scss'
import { Navigation, Pagination, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch, useSelector } from 'react-redux'
import clsx from 'clsx'
import { deletePodcastFilter, resetPodcastFilter, setPodcastFilter } from 'store/slices/podcast'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import useScrollPosition from 'utils/hooks/useScrollPosition'

const mock = [
  'All',
  'casper',
  'sit amet',
  'lorem',
  'dolar',
  'Nature',
  'metallica',
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
  const { navigate } = props
  const { selectedPodcastFilter } = useSelector((state) => state.podcast)
  const dispatch = useDispatch()
  const { isMobile } = useWindowSize()
  const scrollPosition = useScrollPosition()

  const clickHandler = (val) => {
    if (!selectedPodcastFilter.filter((f) => f === val).length > 0) {
      if (selectedPodcastFilter.includes('All') && val !== 'All') {
        dispatch(deletePodcastFilter('All'))
        dispatch(setPodcastFilter(val))
        console.log('1')
      } else if (!selectedPodcastFilter.includes('All') && val === 'All') {
        dispatch(resetPodcastFilter())
        console.log('2', selectedPodcastFilter)
      } else if (!selectedPodcastFilter.includes('All') && val !== 'All') {
        dispatch(setPodcastFilter(val))
        console.log('3')
      }
    } else {
      if (selectedPodcastFilter.includes('All') && val == 'All') {
        console.log('4')
        return
      } else if (selectedPodcastFilter.includes('All') && val !== 'All') {
        console.log('5')
        dispatch(deletePodcastFilter(val))
      } else if (!selectedPodcastFilter.includes('All') && val !== 'All' && selectedPodcastFilter.length > 1) {
        dispatch(deletePodcastFilter(val))
        console.log('6')
      } else {
        dispatch(resetPodcastFilter())
        console.log('7')
      }
    }
  }

  return (
    <div className={clsx(styles.backBanner, isMobile && scrollPosition >= 520 && styles.onMobilePlayer)}>
      {!isMobile && (
        <Link to={navigate} className="d-flex align-items-center text-white text-decoration-none">
          <Icon name="prev" size={22} />
          <div className={styles.backBanner__icon}>Back</div>
        </Link>
      )}
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
              className={clsx(styles.backBanner__btn, selectedPodcastFilter.includes(item) ? styles.active : null)}
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
