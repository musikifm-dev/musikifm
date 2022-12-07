import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { default as RBCard } from 'react-bootstrap/Card'
import clsx from 'clsx'
import { APP } from 'utils/constants'
import styles from '../index.module.scss'

export default function CardHeader(props) {
  const { to, id, image, className } = props
  return (
    <div className={styles.header}>
      <Link to={`${to}/${id}`} className={clsx(styles.header__link, className)}>
        <RBCard.Img variant="top" src={APP.base + image} className={styles.header__img} />
      </Link>
    </div>
  )
}

CardHeader.propTypes = {
  to: PropTypes.string,
  id: PropTypes.number,
  image: PropTypes.string,
  className: PropTypes.string,
}
