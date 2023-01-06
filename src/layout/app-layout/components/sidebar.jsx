import Player from '../../../sections/player-desktop'
import styles from '../style.module.scss'
import { useSelector } from 'react-redux'
import { Banner } from 'sections'

export default function Sidebar() {
  const { current } = useSelector((state) => state.player)

  return (
    <div className={styles.sidebar}>
      <Player />
      <div className={styles.description}>
        <p className={styles.description__item}>{current?.description}</p>
      </div>
      <Banner />
    </div>
  )
}
