import { Navigation, Pagination, Keyboard } from 'swiper'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import Icon from 'assets/svg'
import styles from './index.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useDispatch } from 'react-redux'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import useScrollPosition from 'utils/hooks/useScrollPosition'

const mock = [
  'tümü',
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
  const { navigate, state, setState, deleteState, resetState } = props
  const dispatch = useDispatch()

  const { isMobile, is1366, is1600 } = useWindowSize()
  const scrollPosition = useScrollPosition()

  const clickHandler = (val) => {
    if (!state.filter((f) => f === val).length > 0) {
      if (state.includes('tümü') && val !== 'tümü') {
        dispatch(deleteState('tümü'))
        dispatch(setState(val))
        console.log('1')
      } else if (!state.includes('tümü') && val === 'tümü') {
        dispatch(resetState())
        console.log('2', state)
      } else if (!state.includes('tümü') && val !== 'tümü') {
        dispatch(setState(val))
        console.log('3')
      }
    } else {
      if (state.includes('tümü') && val == 'tümü') {
        console.log('4')
        return
      } else if (state.includes('tümü') && val !== 'tümü') {
        console.log('5')
        dispatch(deleteState(val))
      } else if (!state.includes('tümü') && val !== 'tümü' && state.length > 1) {
        dispatch(deleteState(val))
        console.log('6')
      } else {
        dispatch(resetState())
        console.log('7')
      }
    }
  }

  return (
    <div className={clsx(styles.backBanner, isMobile && scrollPosition >= 520 && styles.onMobilePlayer)}>
      {!isMobile && (
        <Link to={navigate} className={styles.backBanner__link}>
          <Icon
            name="prev"
            size={is1600 ? '16' : is1366 ? '14' : isMobile ? '13' : '16'}
            stroke="#fff"
            className={styles.backBanner__link_arrow}
          />
          <div className={styles.backBanner__link_icon}>Back</div>
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
              className={clsx(styles.backBanner__btn, state.includes(item) ? styles.active : null)}
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
  navigate: PropTypes.string,
  setState: PropTypes.func,
  deleteState: PropTypes.func,
  resetState: PropTypes.func,
  state: PropTypes.array,
  // tags: PropTypes.array,
}
