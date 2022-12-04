import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAudio } from 'react-use'
import PropTypes from 'prop-types'
import { setCurrent, setIsPlaying, setPlayerType } from 'store/slices/player'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import Switch from 'components/ui/switch'
import { APP } from 'utils/constants'
import Icon from '../../assets/svg'
import styles from './style.module.scss'

const Player = () => {
  const { current, switchType } = useSelector((state) => state.player)
  const [audio, state, controls] = useAudio({ src: current.src, autoPlay: true })
  const { windowWidth } = useWindowSize()
  const dispatch = useDispatch()

  let smallSwitch = windowWidth < 1200
  let bigSwitch = windowWidth < 768

  useEffect(() => {
    dispatch(setIsPlaying(state.playing))
  }, [state.playing])

  const dummyRadioData = {
    id: '',
    title: '',
    image: '',
    description: '',
    src: APP.radio,
  }

  const switchHandler = () => {
    dispatch(setPlayerType(!switchType))
    if (switchType) {
      dispatch(setCurrent(dummyRadioData))
    } else {
      const newObj = {
        ...current,
        src: 'https://ia601002.us.archive.org/0/items/merttezlivehome01/merttez%20live%40home_01.mp3',
      }
      dispatch(setCurrent(newObj))
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
        />
        <div className={styles.switch__text}>dinlemektesiniz</div>
      </div>
      <div className={styles.player}>
        <div>{audio}</div>
        <img className={styles.player__img} src={current.image} />
        <div className={styles.player__overlay} />

        <div className={styles.info}>
          <h3 className={styles.info__title}>{current.title}</h3>
        </div>

        <div className={styles.controlWrapper}>
          <div className={styles.control}>
            <button>
              <Icon name="favorite" size="24" />
            </button>
            <button onClick={() => controls.seek(state.time - 10)}>
              <Icon name="prev" size="24" />
            </button>
            <button className={styles.control__icon} onClick={controls[state.playing ? 'pause' : 'play']}>
              <Icon name={state.playing ? 'pause' : 'play'} size="16" />
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
