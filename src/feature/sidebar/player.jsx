import Icon from '../../assets/svg'
import { Range, getTrackBackground } from 'react-range'
import { useAudio } from 'react-use'
import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Songs from 'song.json'
// import ReactPlayer from 'react-player';
import styles from './style.module.scss'
import { useGetDataQuery } from 'store/api/player'
import { APP } from 'utils/constants'

const Player = () => {
  const STEP = 0.1
  const MIN = 0
  const MAX = 100

  // const dispatch = useDispatch();
  // const {  } = useSelector((state) => state.player)
  // var srk = ''

  // if (PlayerControl == false && current.src == undefined) {
  //   srk = MUSIKI_RADIO
  // } else {
  //   srk = current.src
  //   PlayerControl = true
  // }

  // function changeSong() {
  //   PlayerControl = false;
  //   srk = current.src;
  // }

  const [values, setValues] = useState([50])
  const [audio, state, controls] = useAudio({ src: APP.radio, autoPlay: true })
  // For more info about new behaviors of autoplay attribute --> https://developer.chrome.com/blog/autoplay/
  const { data, isSuccess } = useGetDataQuery()

  // const [radioPlayImage, setRadioPlayImage] = useState()
  // const baseUrl =
  //   'https://api.discogs.com/database/search?token=sVSjFzhvRFGxKdEPsHBIAEmmflcGIwCooPIOlNTL&q=' +
  //   Songs.song +
  //   '-' +
  //   Songs.artist

  useEffect(() => {
    // isSuccess && setRadioPlayImage(data.results[8].cover_image)
  }, [])

  // console.log(current, state.playing)
  return (
    <div className={styles.player}>
      <div>{audio}</div>
      {/* <audio src="https://stream.coraxonline.com/musikifm-src.mp3" autoPlay={true} /> */}
      <img className={styles.player__img} src={isSuccess ? data.results[8].cover_image : null} />
      <div className={styles.player__overlay} />

      <div className={styles.info}>
        <h3 className={styles.info__title}>{Songs.song}</h3>
        <p className={styles.info__description}>{Songs.artist}</p>
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

      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => setValues(values)}
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
                  min: MIN,
                  max: MAX,
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
