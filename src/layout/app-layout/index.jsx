import { Navbar, Sidebar } from '../index'
import { Outlet } from 'react-router-dom'
import styles from './style.module.scss'


const AppLayout = () => {
  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.wrapper__side}>
          <Sidebar />
        </div>
        <div className={styles.wrapper__content}>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default AppLayout
