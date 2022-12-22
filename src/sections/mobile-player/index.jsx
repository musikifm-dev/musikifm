import Icon from 'assets/svg'
import clsx from 'clsx'
import { Switch } from 'components/ui'
import { Stack } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMyDataQuery } from 'store/api/auth'
import { useGetPodcastReverseDataQuery } from 'store/api/data'
import { useGetPlayerDataQuery } from 'store/api/player'
import { setCurrent, setPlayerType, setState } from 'store/slices/player'
import styles from './index.module.scss'

export default function MobilePlayer() {
  const { data: userData } = useGetMyDataQuery()
  const { current, playing, switchType } = useSelector((state) => state.player)
  const dispatch = useDispatch()
  const { nextPodcastState } = useSelector((state) => state.podcast)
  const { data: reverseData } = useGetPodcastReverseDataQuery()
  const { data } = useGetPlayerDataQuery()

  const clickHandler = () => {
    dispatch(setState({ playing: !playing }))
  }

  const switchHandler = () => {
    dispatch(setState({ playing: false }))
    dispatch(setPlayerType(!switchType))
    if (switchType) {
      dispatch(setCurrent(data))
    } else {
      dispatch(setCurrent(reverseData[nextPodcastState]))
      // dispatch(setIsPlaying(!isPlaying))
    }
  }

  return (
    <div
      className={clsx(
        styles.mobilePlayer,
        userData && styles.light,
        'd-flex flex-column align-items-center justif-content-center',
      )}
    >
      <section className="d-flex align-items-center">
        <div>
          <button>
            <Icon
              name="favorite"
              className={clsx(userData ? styles.light : styles.dark, styles.mobilePlayer__favorite)}
            />
          </button>
          <button>
            <Icon
              name="prev"
              size="18"
              className={clsx(userData ? styles.light : styles.dark, styles.mobilePlayer__item)}
            />
          </button>
          <button className={styles.icon} onClick={clickHandler}>
            <Icon name={playing ? 'pause' : 'play'} size="18" className={styles.icon__item} />
          </button>
          <button>
            <Icon
              name="next"
              size="18"
              className={clsx(userData ? styles.light : styles.dark, styles.mobilePlayer__item)}
            />
          </button>
          <button>
            <Icon
              name="share"
              size="18"
              className={clsx(userData ? styles.light : styles.dark, styles.mobilePlayer__item)}
            />
          </button>
        </div>

        <div className={styles.switch}>
          <Switch
            id="mobile-switch"
            checked={switchType}
            onChange={switchHandler}
            small={false}
            className={styles.switch__item}
          />
        </div>
      </section>

      <section>
        <Stack direction="horizontal" gap={2} className="d-flex justify-content-center">
          <div>{current.artist}</div>
          <div>-</div>
          <div className={styles.song}>{current.song}</div>
        </Stack>
      </section>
    </div>
  )
}
