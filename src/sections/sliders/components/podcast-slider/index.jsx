import { useDispatch, useSelector } from 'react-redux'
import { SwiperSlide } from 'swiper/react'
import PropTypes from 'prop-types'
import { setCurrent, setPlayerType, setState } from 'store/slices/player'
import { useGetPodcastDataQuery } from 'store/api/admin-base'
import Icon from 'assets/svg'
import SliderContainer from '../../index'
import { Card } from 'components/ui'
import CardHeader from 'components/ui/card/components/card-header'
import CardBody from 'components/ui/card/components/card-body'
import { default as RBCard } from 'react-bootstrap/Card'
import { route } from 'utils/constants'
import styles from './index.module.scss'

export default function PodcastSlider({ title }) {
  const { isSuccess, data } = useGetPodcastDataQuery()
  const dispatch = useDispatch()
  const { current, playing } = useSelector((state) => state.player)

  const clickHandler = (val) => {
    dispatch(setPlayerType(true)) // setPodcast --> true
    dispatch(
      setCurrent({
        image: val.image,
        artist: val.title,
        song: val.title, // song name
        sound: val.title,
        description: val.description,
        src: val.src,
        id: val.id,
      }),
    )
    dispatch(setState({ playing: !playing }))
  }
  return (
    <SliderContainer header={title} breakpoints="podcast" route={route.podcast}>
      {isSuccess &&
        data.map((item) => (
          <SwiperSlide key={item.id}>
            <Card className={styles.card}>
              <CardHeader to={`${route.podcast}/${item.id}`} image={item.image} imageStyle={styles.image} />
              <CardBody>
                <div>
                  <RBCard.Title className={styles.title}>{item.title}</RBCard.Title>
                  <RBCard.Text className={styles.description}>{item.description}</RBCard.Text>
                </div>
                <section className={styles.btnSection}>
                  <div className={styles.btnSection__time}>00:25PM</div>
                  <button className={styles.btnSection__podcastBtn} onClick={() => clickHandler(item)}>
                    <Icon
                      name={current?.id === item.id && playing === true ? 'pause' : 'play'}
                      className={styles.btnSection__icon} size="12"
                    />
                  </button>
                </section>
              </CardBody>
            </Card>
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
