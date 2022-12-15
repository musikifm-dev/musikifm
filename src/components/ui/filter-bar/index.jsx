import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'assets/svg'
import styles from './index.module.scss'
import { Navigation, Pagination, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { setPodcastFilter } from 'store/slices/podcast'
import { useDispatch } from 'react-redux'
// import 'swiper/scss'

const mock = [
  'ipsum',
  'sitamet',
  'lorem',
  'dolar',
  'Çizgssi Filmler',
  'Güzellik ilgili ipuçları',
  'Gsdçları',
  'Güzellik isddlgili ipuçları',
  'Güzellik ilsdxgili ipuçları',
  'Mixzzler',
  'Mixasdler',
  'Güzellik ilgili ipuçları',
  'Mixler',
  'Güzellsdadik ilgili ipuçları',
  'Yemek Psassadsirme',
]

export default function FilterBar(props) {
  const { navigate } = props
  const dispatch = useDispatch()

  const clickHandler = (val) => {
    dispatch(setPodcastFilter(val))
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
        className={styles.sw}
        // pagination={{
        //   clickable: true,
        //   dynamicBullets: false,
        // }}
      >
        {mock.map((item, i) => (
          <SwiperSlide key={i} className={styles.x}>
            <Button className={styles.backBanner__btn} onClick={() => clickHandler(item)}>
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
