import { setCurrent } from 'store/slices/player'
import PropTypes from 'prop-types'
import { default as RBCard } from 'react-bootstrap/Card'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'assets/svg'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'
import { APP } from 'utils/constants'

export default function Card({ data, to }) {
  const { id, title, description, image } = data

  const dispatch = useDispatch()
  const { current } = useSelector((state) => state.player)
  const updateCurrent = () => {
    dispatch(setCurrent(data))
  }

  return (
    <RBCard className={styles.card}>
      <Link to={`${to}/${id}`} className={styles.card__link}>
        <RBCard.Img variant="top" src={APP.base + image} className={styles.card__img} />
      </Link>
      <RBCard.Body className={styles.card__body}>
        <div>
          <RBCard.Title className={styles.card__title}>{title}</RBCard.Title>
          <RBCard.Text className={styles.card__description}>{description}</RBCard.Text>
        </div>
        <section className={styles.btnSection}>
          <div className={styles.btnSection__time}>00:25PM</div>
          <button className={styles.btnSection__btn} onClick={updateCurrent}>
            <Icon name={current?.id === id ? 'pause' : 'play'} size="18" />
          </button>
        </section>
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
}
