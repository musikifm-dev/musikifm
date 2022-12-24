import Player from '../../../feature/sidebar/player'
import AdsBanner from '../../../feature/sidebar/banner'
import styles from '../style.module.scss'
import { useSelector } from 'react-redux'

function Sidebar() {
  const { current } = useSelector((state) => state.player)
  
  return (
    <div className={styles.sidebar}>
      <Player />
      <div className={styles.sidebar__description}> <p>{current?.description}</p></div>
      <AdsBanner />
    </div>
  )
}
export default Sidebar
