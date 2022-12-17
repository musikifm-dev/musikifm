import Icon from 'assets/svg'
import { useSelector } from 'react-redux'
// import { setControls } from 'store/slices/player'
import styles from './index.module.scss'

export default function MobilePlayer() {
  const { isPlaying, controls } = useSelector((state) => state.player)

  console.log(controls)
  const clickHandler = () => {
    // dispatch(setIsPlaying(state.playing))
    if (isPlaying) {
      controls.pause()
    } else {
      controls.play()
    }
  }
  return (
    <div className={styles.control}>
      <button>
        <Icon name="favorite" size="18" />
      </button>
      <button>
        <Icon name="prev" size="18" />
      </button>
      <button className={styles.control__icon} onClick={clickHandler}>
        <Icon name={isPlaying ? 'pause' : 'play'} size="18" />
      </button>
      <button>
        <Icon name="next" size="18" />
      </button>
      <button>
        <Icon name="share" size="18" />
      </button>
    </div>
  )
}
