import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function EmbeddedVideo({ embedId }) {
  return (
    <div className={styles.embed}>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className={styles.embed__item}
      />
    </div>
  )
}

EmbeddedVideo.propTypes = {
  embedId: PropTypes.string.isRequired,
}
