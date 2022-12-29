import clsx from 'clsx'
// import { default as RBCard } from 'react-bootstrap/Card'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function CardBody({ className, children }) {
  return <div className={clsx(styles.body, className)}>{children}</div>
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
