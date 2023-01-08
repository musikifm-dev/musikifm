import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAudio } from 'react-use'
import PropTypes from 'prop-types'
import { setCurrent, setPlayerType, setState, updateTime } from 'store/slices/player'
import Switch from 'components/ui/switch'
import Icon from '../../assets/svg'
import styles from './index.module.scss'
import { useGetPlayerDataQuery } from 'store/api/player'
import { useState } from 'react'
import { APP } from 'utils/constants'
import { useGetPodcastReverseDataQuery } from 'store/api/admin-base'
import { setNextPodcast } from 'store/slices/podcast'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import clsx from 'clsx'

export default function Player() {
  const { data, isSuccess } = useGetPlayerDataQuery()
  const { data: reverseData } = useGetPodcastReverseDataQuery()
  // eslint-disable-next-line
  const { current, switchType, playing, muted, duration, time, volume, buffered, podcastPlayer, isMobilePlayer } =
    useSelector((state) => state.player)
  const { nextPodcastState } = useSelector((state) => state.podcast)
  const [audio, state, controls] = useAudio({ src: current.src, autoPlay: true })
  const [imageFrom, setImageFrom] = useState()
  const dispatch = useDispatch()
  const { is1366, is1600, is1789, is1920 } = useWindowSize()

  useEffect(() => {
    if (isSuccess && !switchType) dispatch(setCurrent(data))
  }, [data])

  // set current state.playing as boolean to playing state
  useEffect(() => {
    dispatch(setState(state))
  }, [state.playing])

  useEffect(() => {
    dispatch(updateTime(state.time))
  }, [state.time])

  useEffect(() => {
    if (playing) {
      controls.play()
    } else {
      controls.pause()
    }
  }, [playing])

  let timer = time.toString().split('.')[0]
  let res = state.duration.toString() - timer

  useEffect(() => {
    if (res < 1 && switchType) {
      setNextPodcast(reverseData.length)
      if (nextPodcastState <= reverseData.length) {
        dispatch(setCurrent(reverseData[nextPodcastState]))
      }
      controls.play()
    }
  }, [state.playing])

  var pattern = /^((http|https|ftp):\/\/)/

  useEffect(() => {
    if (current.image) {
      if (pattern.test(current.image)) {
        setImageFrom(current.image)
      } else {
        setImageFrom(APP.adminBase + current.image)
      }
    }
  }, [current.image])

  const switchHandler = () => {
    dispatch(setState({ playing: false }))
    dispatch(setPlayerType(!switchType))
    if (switchType) {
      // refetch()
      dispatch(setCurrent(data))
    } else {
      dispatch(setCurrent(reverseData[nextPodcastState]))
    }
  }

  const clickHandler = () => {
    dispatch(setState({ playing: !playing }))
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.switch}>
        <div className={styles.switch__text}>Şuan</div>
        <Switch
          id="player-switch"
          checked={switchType}
          onChange={switchHandler}
          className={styles.switch__item}
          switchTextStyle={styles.switchStyle}
        />
        <div className={styles.switch__text}>dinlemektesiniz</div>
      </div>
      <div className={styles.player}>
        <div>{audio}</div>
        <img className={styles.player__img} src={imageFrom} />
        <div className={styles.player__overlay} />

        <div className={styles.info}>
          <h3 className={styles.info__artist}>{current?.artist}</h3>
          <h5 className={styles.info__song}>{current?.song}</h5>
        </div>

        <section className={styles.controlSection}>
          <div className={styles.controlContainer}>
            <div className={styles.controlBox}>
              <button>
                <Icon
                  name="favorite"
                  size={is1366 ? '20' : is1600 ? '26' : is1789 ? '28' : is1920 ? '30' : '18'}
                  stroke={'white'}
                />
              </button>
              <button onClick={() => controls.seek(state.time - 10)}>
                <Icon
                  name="prev"
                  size={is1366 ? '20' : is1600 ? '26' : is1789 ? '28' : is1920 ? '30' : '18'}
                  stroke={'white'}
                />
              </button>
              <button className={styles.controlBox__playerButton} onClick={clickHandler}>
                <Icon
                  name={playing ? 'pause' : 'play'}
                  size={is1366 ? '16' : is1600 ? '21' : is1789 ? '23' : is1920 ? '24' : '14'}
                  fill="#000"
                  className={clsx(styles.controlBox__icon, playing ? '' : styles.controlBox__play)}
                />
              </button>
              <button onClick={() => controls.seek(state.time + 10)}>
                <Icon
                  name="next"
                  size={is1366 ? '20' : is1600 ? '26' : is1789 ? '28' : is1920 ? '30' : '18'}
                  stroke={'white'}
                />
              </button>
              <button>
                <Icon
                  name="share"
                  size={is1366 ? '20' : is1600 ? '26' : is1789 ? '28' : is1920 ? '30' : '18'}
                  stroke={'white'}
                />
              </button>
            </div>
          </div>
        </section>

        {/* {current.src !== APP.radio && (
        <Range
          values={values}
          step={0.1}
          min={0}
          max={state?.duration}
          onChange={(values) => {
            console.log(values)
            setValues(values)
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: 'unset',
                display: 'flex',
                width: '100%',
                position: 'absolute',
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values: values,
                    colors: ['#FF0000', '#000'],
                    min: 0,
                    max: state.duration,
                  }),
                  alignSelf: 'center',
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '20px',
                width: '20px',
                borderRadius: '20px',
                backgroundColor: '#FF0000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          )}
        />
      )} */}
      </div>
    </div>
  )
}

Player.propTypes = {
  onMouseDown: PropTypes.any,
  onTouchStart: PropTypes.any,
  style: PropTypes.any,
  ref: PropTypes.any,
}
