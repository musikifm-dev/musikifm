import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

/**
 * @param size string -- sm, md, lg, xl
 * @param rounded string -- none, sm, md, lg, full
 * @param source string
 * @param alt string
 * @param className string -- override css
 */

export default function Avatar(props) {
  const { source, alt, size, rounded, className, onClick } = props
  return (
    <div
      className={clsx(styles.avatar, styles[`size_${size}`], styles[`rounded_${rounded}`], className)}
      onClick={onClick}
    >
      <img src={source} alt={alt} className={styles.img} draggable="false" />
    </div>
  )
}

Avatar.defaultProps = {
  alt: 'avatar',
  size: 'md',
  rounded: 'md',
}

Avatar.propTypes = {
  alt: PropTypes.string,
  size: PropTypes.string,
  rounded: PropTypes.string,
  source: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
}
