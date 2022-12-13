import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAudio } from 'react-use'
import PropTypes from 'prop-types'
import { setCurrent, setIsPlaying, setPlayerType } from 'store/slices/player'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import Switch from 'components/ui/switch'
import Icon from '../../assets/svg'
import styles from './style.module.scss'
import { useGetPlayerDataQuery } from 'store/api/player'
import { useState } from 'react'
import { APP } from 'utils/constants'
import { useGetPodcastReverseDataQuery } from 'store/api/data'

const Player = () => {
  const { data, isSuccess, refetch } = useGetPlayerDataQuery()
  const { data: reverseData } = useGetPodcastReverseDataQuery()
  const [nextPodcast, setNextPodcast] = useState(0)
  const { current, switchType, isPlaying } = useSelector((state) => state.player)
  const [imageFrom, setImageFrom] = useState(0)
  const [audio, state, controls] = useAudio({ src: current.src, autoPlay: true })
  const { windowWidth } = useWindowSize()
  const dispatch = useDispatch()

  let smallSwitch = windowWidth < 1200
  let bigSwitch = windowWidth < 768

  useEffect(() => {
    if (isSuccess && !switchType) dispatch(setCurrent(data))
  }, [data])

  useEffect(() => {
    dispatch(setIsPlaying(state.playing))
  }, [state.playing])

  useEffect(() => {
    if (isPlaying) {
      controls.play()
    } else {
      controls.pause()
    }
  }, [isPlaying])

  let time = state.time.toString().split('.')[0]
  let res = state.duration.toString() - time

  useEffect(() => {
    if (res < 1 && switchType === true) {
      setNextPodcast((prev) => prev + 1)
      dispatch(setCurrent(reverseData[nextPodcast]))
      controls.play()
    }
  }, [state.playing])

  var pattern = /^((http|https|ftp):\/\/)/
  useEffect(() => {
    if (current.image !== null && isSuccess) {
      if (pattern.test(data.image)) {
        setImageFrom(data.image)
      } else {
        setImageFrom(APP.base + current.image)
      }
    }
  }, [current.image])

  const switchHandler = () => {
    dispatch(setPlayerType(!switchType))
    if (switchType) {
      refetch()
      dispatch(setCurrent(data))
    } else {
      dispatch(setCurrent(reverseData[nextPodcast]))
    }
  }

  const clickHandler = () => {
    dispatch(setIsPlaying(state.playing))
    if (state.playing) {
      controls.pause()
    } else {
      controls.play()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.switch}>
        <div className={styles.switch__text}>Şuan</div>
        <Switch
          id="player"
          checked={switchType}
          onChange={switchHandler}
          defaultChecked={false}
          small={bigSwitch ? false : smallSwitch ? true : false}
          className={styles.switch__item}
        />
        <div className={styles.switch__text}>dinlemektesiniz</div>
      </div>
      <div className={styles.player}>
        {audio}
        <img className={styles.player__img} src={imageFrom} />
        <div className={styles.player__overlay} />

        <div className={styles.info}>
          <h3 className={styles.info__artist}>{current?.artist}</h3>
          <h5 className={styles.info__song}>{current?.song}</h5>
        </div>

        <div className={styles.controlWrapper}>
          <div className={styles.control}>
            <button>
              <Icon name="favorite" size="24" />
            </button>
            <button onClick={() => controls.seek(state.time - 10)}>
              <Icon name="prev" size="24" />
            </button>
            <button className={styles.control__icon} onClick={clickHandler}>
              <Icon name={isPlaying === true ? 'pause' : 'play'} size="16" />
            </button>
            <button onClick={() => controls.seek(state.time + 10)}>
              <Icon name="next" size="24" />
            </button>
            <button>
              <Icon name="share" size="24" />
            </button>
          </div>
        </div>

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

export default Player
