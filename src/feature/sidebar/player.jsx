import Icon from '../../assets/svg'
// import { Range, getTrackBackground } from 'react-range'
import { useAudio } from 'react-use'
// import { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './style.module.scss'
import { useSelector } from 'react-redux'
import { APP } from 'utils/constants'
// import { APP } from 'utils/constants'
// import { useEffect } from 'react'

const Player = () => {
  // const [values, setValues] = useState([undefined])
  const { current } = useSelector((state) => state.player)
  const [audio, state, controls] = useAudio({ src: current.src, autoPlay: true })
  console.log(current)
  // useEffect(() => {
  //   if (current.src !== APP.radio) setValues(state?.time)
  // }, [state.time])

  return (
    <div className={styles.player}>
      <div>{audio}</div>
      <img className={styles.player__img} src={APP.base + current.image} />
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
  )
}

Player.propTypes = {
  onMouseDown: PropTypes.any,
  onTouchStart: PropTypes.any,
  style: PropTypes.any,
  ref: PropTypes.any,
}

export default Player
