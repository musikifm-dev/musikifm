import { Card } from 'components/ui'
import CardHeader from 'components/ui/card/components/header'
import CardBody from 'components/ui/card/components/body'
import PropTypes from 'prop-types'
import { default as RBCard } from 'react-bootstrap/Card'
import { route } from 'utils/constants'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrent, setPlayerType, setState } from 'store/slices/player'
import Icon from 'assets/svg'

export default function PodcastCard({ data }) {
  const { id, title, image, description } = data
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
    <Card className={styles.card}>
      <CardHeader to={`${route.podcast}/${id}`} image={image} className={styles.card__header} />
      <CardBody className={styles.body}>
        <div>
          <RBCard.Title className={styles.body__title}>{title}</RBCard.Title>
          <RBCard.Text className={styles.body__description}>{description}</RBCard.Text>
        </div>
        <section className={styles.footer}>
          <div className={styles.footer__time}>00:25PM</div>
          <button className={styles.footer__podcastBtn} onClick={() => clickHandler(data)}>
            <Icon
              name={current?.id === id && playing === true ? 'pause' : 'play'}
              className={styles.footer__icon}
              fill="#000"
            />
          </button>
        </section>
      </CardBody>
    </Card>
  )
}

PodcastCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    tag: PropTypes.string,
  }),
}
