import playImage from '../../assets/img/banner.png';
import styles from './style.module.scss';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <img src={playImage} className={styles.banner__img} />
    </div>
  );
}
