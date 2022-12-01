import clsx from 'clsx'
import playImage from '../../assets/img/banner.png'
import styles from './style.module.scss'

export default function Banner() {
  return (
    <div className={clsx('d-none d-md-block w-100', styles.banner)}>
      <img src={playImage} className="w-100 h-100" />
    </div>
  )
}
