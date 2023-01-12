import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { default as RBCard } from 'react-bootstrap/Card'
import clsx from 'clsx'
import { APP } from 'utils/constants'
import styles from './index.module.scss'
import Icon from 'assets/svg'

/**
 * @param to --> string - link source
 * @param image --> string -image source
 * @param imageStyle --> overwrite image css
 * @param isPlayIcon --> boolean - to put play icon for videos
 * @param onClick --> clickHandler function
 * @param className --> overwire css
 */

export default function CardHeader(props) {
  const { to, image, imageStyle, isPlayIcon, onClick, className } = props

  return (
    <div className={clsx(className, styles.header)}>
      <Link to={to} className={clsx(styles.link)} onClick={onClick && onClick}>
        {isPlayIcon && (
          <div className={styles.icon}>
            <Icon name="play" className={styles.icon__item} fill="#fff" />
          </div>
        )}
        <RBCard.Img variant="top" src={APP.adminBase + image} className={clsx(imageStyle, styles.link__img)} />
      </Link>
    </div>
  )
}

CardHeader.defaultProps = {
  isPlayIcon: false,
}

CardHeader.propTypes = {
  to: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
  imageStyle: PropTypes.string,
  isPlayIcon: PropTypes.bool,
  onClick: PropTypes.func,
}
