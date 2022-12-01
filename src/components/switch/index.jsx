import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

export default function Switch({ id, name, checked, onChange, optionLabels, small, disabled, className }) {
  function handleKeyPress(e) {
    if (e.keyCode !== 32) return
    e.preventDefault()
    onChange(!checked)
  }

  return (
    <div className={clsx(styles.toggleSwitch, small ? styles.smallSwitch : null, className)}>
      <input
        type="checkbox"
        name={name}
        className={styles.toggleSwitch__checkbox}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      {id ? (
        <label
          className={styles.toggleSwitch__label}
          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e) => handleKeyPress(e)}
          htmlFor={id}
        >
          <span
            className={clsx(styles.toggleSwitch__inner, disabled ? styles.toggleSwitch__disabled : null)}
            data-false={optionLabels[0]}
            data-true={optionLabels[1]}
            tabIndex={-1}
          />
          <span
            className={clsx(styles.toggleSwitch__switch, disabled ? styles.toggleSwitch__disabled : null)}
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  )
}

Switch.defaultProps = {
  optionLabels: ['Radio', 'Podcast'],
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  optionLabels: PropTypes.array,
  small: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
}
