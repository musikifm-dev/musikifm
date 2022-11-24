import ReactSelect, { components } from 'react-select'
import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import Icon from 'assets/svg'

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
]

const Control = ({ children, ...props }) => {
  return (
    <components.Control {...props}>
      <span className={styles.search}>Search</span>
      {children}
      <components.IndicatorsContainer {...props}>
        <Icon name="search" size={22} />
      </components.IndicatorsContainer>
    </components.Control>
  )
}

Control.propTypes = {
  children: PropTypes.node,
}

export default function Select(props) {
  const { isMobile, isTablet } = useWindowSize()
  const valuesContainerStyle = isMobile ? '5px' : isTablet ? '8px' : '10px'
  const multiValueStyle = isMobile ? '2px 4px' : isTablet ? '3px 6px' : '4px 10px'
  const valueLabelStyle = isMobile ? '10px' : isTablet ? '14px' : '18px'

  const styles = {
    control: (css) => ({
      ...css,
      paddingLeft: isMobile ? '0.5rem' : '2rem',
      height: '80px',
      '& > div:nth-child(3)': {
        display: 'none',
      },
    }),
    valueContainer: (css) => ({
      ...css,
      padding: valuesContainerStyle,
    }),
    multiValue: (css) => ({
      ...css,
      backgroundColor: 'black',
      borderRadius: '62.0833px',
      padding: multiValueStyle,
      fontWeight: '600',
    }),
    multiValueLabel: (css) => ({
      ...css,
      fontSize: valueLabelStyle,
      color: 'white',
      textAlign: 'center',
    }),
    multiValueRemove: (css) => ({
      ...css,
      color: 'white',
      padding: '0 6px',
      '&:hover': {
        borderRadius: '5px',
        backgroundColor: 'transparent',
        color: '#9740ed',
      },
    }),
    placeholder: (css) => ({
      ...css,
      textAlign: 'center',
    }),
    indicatorsContainer: (css) => ({
      ...css,
      paddingRight: isMobile ? '0.5rem' : '2rem',
    }),
  }

  return (
    <ReactSelect {...props} components={{ Control }} isSearchable options={colourOptions} styles={styles} isMulti />
  )
}
