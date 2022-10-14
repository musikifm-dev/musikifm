import Player from '../../feature/sidebar/player';
import AdsBanner from '../../feature/sidebar/banner';
import styles from '../style.module.scss';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Player />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit Lorem ipsum dolor sit amet,
        consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit Lorem ipsum dolor sit
        amet, consectetur
      </p>
      <AdsBanner />
    </div>
  );
}
export default Sidebar;
