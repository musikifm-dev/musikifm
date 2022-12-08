import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Spinner } from 'react-bootstrap'
import { default as RBCard } from 'react-bootstrap/Card'
import CardBody from './components/card-body'
import CardHeader from './components/card-header'

import styles from './index.module.scss'

export default function Card(props) {
  const { className, children, loading } = props

  return (
    <RBCard className={clsx(styles.card, className)} {...props}>
      {children}
      {loading && <Spinner />}
    </RBCard>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  loading: PropTypes.bool,
}

Card.Header = CardHeader
Card.Body = CardBody
