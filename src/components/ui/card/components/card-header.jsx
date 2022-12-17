import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { default as RBCard } from 'react-bootstrap/Card'
import clsx from 'clsx'
import { APP } from 'utils/constants'
import styles from '../index.module.scss'
import Icon from 'assets/svg'

export default function CardHeader(props) {
  const { to, image, imageStyle, isPlayIcon, onClick, className } = props

  return (
    <div className={styles.header}>
      <Link to={to && to} className={clsx(styles.header__link, className)} onClick={onClick && onClick}>
        {isPlayIcon && (
          <div className={styles.icon}>
            <Icon name="play" size={22} className={styles.icon__item} />
          </div>
        )}
        <RBCard.Img variant="top" src={APP.base + image} className={clsx(imageStyle, styles.header__img)} />
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
