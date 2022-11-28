import { Navbar, Sidebar } from '../index'
import { Outlet } from 'react-router-dom'
import styles from './style.module.scss'
import clsx from 'clsx'

const AppLayout = () => {
  return (
    <main>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={'col-sm-12 col-md-3 col-lg-3'}>
          <Sidebar />
        </div>
        <div className={clsx('col-sm-12 col-md-9 col-lg-9', styles.wrapper__content)}>
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default AppLayout
