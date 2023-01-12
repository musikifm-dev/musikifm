import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import styles from './index.module.scss'

/**
 *
 * @param className - overwrite iframe size bt padding-bottom
 * @returns
 */

// eslint-disable-next-line react/display-name
const EmbedVideo = forwardRef((props, ref) => {
  const { videoState, videoUrl } = useSelector((state) => state.video)

  return (
    <div className={styles.embed}>
      <ReactPlayer
        ref={ref}
        controls={true}
        url={`https://www.youtube.com/embed/${videoUrl}`}
        playing={videoState}
        className={styles.embed__item}
        width="100%"
        height="100%"
      />
    </div>
  )
})

EmbedVideo.propTypes = {
  // embedId: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default EmbedVideo
