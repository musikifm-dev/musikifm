import Player from '../../../feature/sidebar/player'
import AdsBanner from '../../../feature/sidebar/banner'
import styles from '../style.module.scss'
import { useGetPlayerDataQuery } from 'store/api/player'

function Sidebar() {
  const { data } = useGetPlayerDataQuery()
  return (
    <div className={styles.sidebar}>
      <Player />
      <div className={styles.sidebar__description}>{data?.description}</div>
      <AdsBanner />
    </div>
  )
}
export default Sidebar
