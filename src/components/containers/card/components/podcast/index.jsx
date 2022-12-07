import { useDispatch, useSelector } from 'react-redux'
import { SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'
import { setCurrent, setPlayerType } from 'store/slices/player'
import { useGetPodcastDataQuery } from 'store/api/data'
import Icon from 'assets/svg'
import SliderContainer from '../../../card/index'
import { Card } from 'components/ui'
import CardHeader from 'components/ui/card/components/card-header'
import CardBody from 'components/ui/card/components/card-body'
import { default as RBCard } from 'react-bootstrap/Card'
import { route } from 'utils/constants'
import styles from './index.module.scss'

export default function PodcastCard() {
  const { isSuccess, data } = useGetPodcastDataQuery()
  const dispatch = useDispatch()
  const { current } = useSelector((state) => state.player)

  const clickHandler = (val) => {
    dispatch(setPlayerType(true)) // setPodcast --> true
    dispatch(setCurrent(val))
  }
  return (
    <SliderContainer header="PODCAST" breakpoints="podcast">
      {isSuccess &&
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card>
              <CardHeader to={route.podcast} id={item.id} image={item.image} />
              <CardBody>
                <div>
                  <RBCard.Title className={styles.title}>{item.title}</RBCard.Title>
                  <RBCard.Text className={styles.description}>{item.description}</RBCard.Text>
                </div>
                <section className={styles.btnSection}>
                  <div className={styles.btnSection__time}>00:25PM</div>
                  <button className={styles.btnSection__podcastBtn} onClick={() => clickHandler(item)}>
                    <Icon name={current?.id === item.id ? 'pause' : 'play'} size="18" />
                  </button>
                </section>
              </CardBody>
            </Card>
          </SwiperSlide>
        ))}
    </SliderContainer>
  )
}

PodcastCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    content: PropTypes.string,
    url: PropTypes.string,
    homepage: PropTypes.bool,
    image: PropTypes.string,
    tag: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
  }),
  to: PropTypes.string,
  isPodcast: PropTypes.bool,
  isBlog: PropTypes.bool,
}

{
  /* <RBCard className={styles.card} key={item.id}>
            <Link to={`${item.to}/${item.id}`} className={styles.card__link}>
              <RBCard.Img variant="top" src={APP.base + item.image} className={styles.card__img} />
            </Link>
            <RBCard.Body className={styles.card__body}>
              <div>
                <RBCard.Title className={styles.card__title}>{item.title}</RBCard.Title>
                <RBCard.Text className={styles.card__description}>{item.description}</RBCard.Text>
              </div>
              <section className={styles.btnSection}>
                <div className={styles.btnSection__time}>00:25PM</div>
                <button className={styles.btnSection__podcastBtn} onClick={clickHandler}>
                  <Icon name={current?.id === item.id ? 'pause' : 'play'} size="18" />
                </button>
              </section>
            </RBCard.Body>
          </RBCard> */
}
