import { Switch } from 'components/ui'
import styles from './index.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useGetMyDataQuery } from 'store/api/auth'
import { useGetPodcastReverseDataQuery } from 'store/api/admin-base'
import { useGetPlayerDataQuery } from 'store/api/player'
import { setCurrent, setPlayerType, setState } from 'store/slices/player'
import Icon from 'assets/svg'
import clsx from 'clsx'
import { Stack } from 'react-bootstrap'

export default function TabletPlayer() {
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
    <div className={clsx(styles.wrapper, userData ? styles.darkBg : styles.lightBg)}>
      <div className={styles.tabletPlayer}>
        <section className={styles.image}>
          <img src={current.image} alt="" className={styles.image__item} />
        </section>
        <section className="d-flex flex-column justify-content-center align-items-center">
          <Stack direction="horizontal" gap={3}>
            <button className={clsx(styles.btn, styles.otherBtn)}>
              <Icon
                name="favorite"
                className={clsx(styles.btn__favorite)}
                size="18"
                stroke={userData ? 'white' : 'black'}
              />
            </button>
            <button className={clsx(styles.btn, styles.otherBtn)}>
              <Icon name="prev" className={clsx(styles.btn__prev)} stroke={userData ? 'white' : 'black'} size="18" />
            </button>
            <button className={clsx(styles.playerBtn, styles.btn)} onClick={clickHandler}>
              <Icon
                name={playing ? 'pauseTablet' : 'playTablet'}
                className={clsx(styles.btn__icon, userData ? styles.authenticated : styles.nonauthenticated)}
                stroke={userData ? 'white' : 'black'}
                size="16"
              />
            </button>
            <button className={clsx(styles.otherBtn, styles.btn)}>
              <Icon name="next" className={clsx(styles.btn__next)} stroke={userData ? 'white' : 'black'} size="18" />
            </button>
            <button className={clsx(styles.btn, styles.otherBtn)}>
              <Icon name="share" className={styles.btn__share} stroke={userData ? 'white' : 'black'} size="18" />
            </button>
          </Stack>
          <Stack direction="horizontal" gap={2} className="d-flex justify-content-center mt-3">
            <div>{current.artist}</div>
            <div>-</div>
            <div className={styles.song}>{current.song}</div>
          </Stack>
        </section>
        <section>
          <div className={styles.switch}>
            <Switch
              id="mobile-switch"
              checked={switchType}
              onChange={switchHandler}
              small={true}
              className={styles.switch__item}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
