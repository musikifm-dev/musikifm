import { useDispatch, useSelector } from 'react-redux';
import { default as RBCard } from 'react-bootstrap/Card';
import { setCurrent } from 'store/slices/player';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from 'assets/svg';
import styles from './style.module.scss';

export default function Card({ item }) {
  const { id, title, description, image } = item;
  console.log(image);
  const dispatch = useDispatch();
  const { current } = useSelector(state => state.player);
  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };

  const podcastImage = 'http://localhost:1337' + image;
  return (
    <RBCard className={styles.card}>
      <Link to={`/podcast/${id}`} className={styles.card__link}>
        <RBCard.Img variant="top" src={podcastImage} className={styles.card__img} />
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
  );
}

Card.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string,
    homepage: PropTypes.bool,
    id: PropTypes.number,
    image: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string
  })
};
