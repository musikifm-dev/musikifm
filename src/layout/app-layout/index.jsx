import { Navbar, Sidebar } from '../index'
import { Outlet } from 'react-router-dom'
import styles from './style.module.scss'

const AppLayout = () => {
  return (
    <main className={styles.main}>
      <div className="row">
        <Navbar />
        <div className="col-sm-12 col-md-3">
          <Sidebar />
        </div>
        <div className="col-sm-12 col-md-9 p-5">
          <Outlet />
        </div>
      </div>
    </main>
  )
}

export default AppLayout
