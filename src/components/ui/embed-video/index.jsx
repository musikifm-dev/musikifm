import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

/**
 *
 * @param className - overwrite iframe size bt padding-bottom
 * @returns
 */

export default function EmbedVideo({ embedId, className }) {
  return (
    <div className={clsx(styles.embed, className)}>
      <iframe
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

EmbedVideo.propTypes = {
  embedId: PropTypes.string.isRequired,
  className: PropTypes.string,
}
