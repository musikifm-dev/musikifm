import { Button, Stack } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'assets/svg'
import styles from './index.module.scss'

export default function BackBanner(props) {
  const { navigate } = props
  return (
    <div className={styles.backBanner}>
      <Stack gap={5} direction="horizontal">
        <Link to={navigate} className="d-flex align-items-center text-white text-decoration-none">
          <Icon name="prev" size={22} />
          <div className={styles.backBanner__icon}>Back</div>
        </Link>
        <Stack gap={2} direction="horizontal" className="text-white">
          {['Animations', 'Sitcom', 'Yemek Pisirme', 'Canlı'].map((item) => (
            <Button key={item} className={styles.backBanner__btn}>
              {item}
            </Button>
          ))}
        </Stack>
      </Stack>
    </div>
  )
}

BackBanner.propTypes = {
  navigate: PropTypes.any,
}
