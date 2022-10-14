import { Outlet } from 'react-router-dom';
import { Navbar, Sidebar } from './index';
import styles from './style.module.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className={'col-9 p-5'}>
            <Outlet />
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
