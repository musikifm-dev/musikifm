import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function Divider({ text, className }) {
  return (
    <div>
      <div className={clsx('mt-3', styles.divider, className)}>{text}</div>
    </div>
  )
}

Divider.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
}
