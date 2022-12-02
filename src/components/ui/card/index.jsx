import { setCurrent, setPlayerType } from 'store/slices/player'
import PropTypes from 'prop-types'
import { default as RBCard } from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'assets/svg'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import { APP } from 'utils/constants'
import { Button, Stack } from 'react-bootstrap'

export default function Card({ data, to, isBlog, isPodcast }) {
  const { id, title, description, image, url } = data
  const dispatch = useDispatch()
  const { current } = useSelector((state) => state.player)

  const clickHandle = () => {
    dispatch(setPlayerType(true)) // setPodcast --> true
    dispatch(setCurrent(data))
  }

  return (
    <RBCard className={styles.card}>
      {image ? (
        <Link to={`${to}/${id}`} className={styles.card__link}>
          <RBCard.Img variant="top" src={APP.base + image} className={styles.card__img} />
        </Link>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${url}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )}
      <RBCard.Body className={styles.card__body}>
        <div>
          <RBCard.Title className={styles.card__title}>{title}</RBCard.Title>
          <RBCard.Text className={styles.card__description}>{description}</RBCard.Text>
        </div>
        {isPodcast && (
          <section className={styles.btnSection}>
            <div className={styles.btnSection__time}>00:25PM</div>
            <button className={styles.btnSection__podcastBtn} onClick={clickHandle}>
              <Icon name={current?.id === id ? 'pause' : 'play'} size="18" />
            </button>
          </section>
        )}
        {isBlog && (
          <Stack direction="horizontal" gap={4} className={styles.blogBtnSection}>
            <Button variant="secondary" className={styles.blogBtnSection__blogBtn}>
              #Techno
            </Button>
            <div>more ...</div>
          </Stack>
        )}
      </RBCard.Body>
    </RBCard>
  )
}

Card.propTypes = {
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
