import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAudio } from 'react-use'
import PropTypes from 'prop-types'
import { setCurrent, setPlayerType, setState, updateTime } from 'store/slices/player'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import Switch from 'components/ui/switch'
import Icon from '../../assets/svg'
import styles from './index.module.scss'
import { useGetPlayerDataQuery } from 'store/api/player'
import { useState } from 'react'
import { APP } from 'utils/constants'
import { useGetPodcastReverseDataQuery } from 'store/api/admin-base'
import clsx from 'clsx'
import { setNextPodcast } from 'store/slices/podcast'
import { Stack } from 'react-bootstrap'

export default function Player() {
  const { data, isSuccess } = useGetPlayerDataQuery()
  const { data: reverseData } = useGetPodcastReverseDataQuery()
  // eslint-disable-next-line
  const { current, switchType, playing, muted, duration, time, volume, buffered, podcastPlayer, isMobilePlayer } =
    useSelector((state) => state.player)
  const { nextPodcastState } = useSelector((state) => state.podcast)
  const [audio, state, controls] = useAudio({ src: current.src, autoPlay: true })
  const [imageFrom, setImageFrom] = useState()
  const { windowWidth } = useWindowSize()
  const dispatch = useDispatch()

  let smallSwitch = windowWidth < 1200
  let bigSwitch = windowWidth < 768

  useEffect(() => {
    if (isSuccess && !switchType) dispatch(setCurrent(data))
  }, [data])

  // set current state.playing as boolean to playing state
  useEffect(() => {
    dispatch(setState(state))
    console.log('playing CHANGED')
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
      <div className={clsx(styles.switch)}>
        <div className={styles.switch__text}>Şuan</div>
        <Switch
          id="player-switch"
          checked={switchType}
          onChange={switchHandler}
          small={bigSwitch ? false : smallSwitch ? true : false}
          className={styles.switch__item}
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

        <div className={styles.controlWrapper}>
          <div className={styles.control}>
            <Stack direction="horizontal" gap={2}>
              <button>
                <Icon name="favorite" size="24" stroke={'white'} />
              </button>
              <button onClick={() => controls.seek(state.time - 10)}>
                <Icon name="prev" size="24" stroke={'white'} />
              </button>
              <button className={styles.control__icon} onClick={clickHandler}>
                <Icon name={playing ? 'pause' : 'play'} size="16" fill="#000" />
              </button>
              <button onClick={() => controls.seek(state.time + 10)}>
                <Icon name="next" size="24" stroke={'white'} />
              </button>
              <button>
                <Icon name="share" size="24" stroke={'white'} />
              </button>
            </Stack>
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
