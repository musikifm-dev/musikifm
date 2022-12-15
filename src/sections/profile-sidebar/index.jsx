import { Avatar } from 'components/ui'
// import Icon from 'assets/svg'
// import clsx from 'clsx'
// import { useState } from 'react'
// import { Accordion, Button } from 'react-bootstrap'
// import Offcanvas from 'react-bootstrap/Offcanvas'
// import { useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import { authApi } from 'store/api/auth'
// import { route } from 'utils/constants'
// import { refreshPage } from 'utils/helpers'
// import styles from './index.module.scss'

export default function ProfileSidebar() {
//   const [show, setShow] = useState(false)
//   const [accordion, setAccordion] = useState('0')
  //   const { data: userData } = useGetMyDataQuery()
//   const dispatch = useDispatch()

//   const handleClose = () => setShow(false)
//   const handleToggle = () => setShow((prev) => !prev)

//   const handleLogout = () => {
//     localStorage.clear()
//     dispatch(authApi.util.resetApiState())
//     refreshPage()
//   }

  return (
    <>
      <Avatar
        source="https://images.squarespace-cdn.com/content/v1/569591ff0ab3771dba3f1ec6/1650383193773-4E38HIVJMG16Q5MHD80A/JD+Solo+by+Todd+V+Wolfson.jpg?format=2500w"
        size="sm"
        rounded="full"
        // onClick={handleToggle}
      />

      {/* <Offcanvas show={show} onHide={handleClose} placement="end" backdrop="static" className={styles.darkBg}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-center mt-5">
            <div className="text-center">
              <Avatar
                source="https://images.squarespace-cdn.com/content/v1/569591ff0ab3771dba3f1ec6/1650383193773-4E38HIVJMG16Q5MHD80A/JD+Solo+by+Todd+V+Wolfson.jpg?format=2500w"
                size="xl"
                rounded="full"
              />
              <Icon name="close" size={22} className={styles.closeIcon} onClick={handleClose} />
              <div className="d-flex justify-content-center">
                <div>
                  <div className={clsx(styles.editProfile, 'fs-5 p-2 bg-gray')}>Edit Profile</div>
                  <div className="fs-2 fw-bold text-light">John Doe</div>
                </div>
              </div>
            </div>
          </div>
          <div></div>

          <div className="d-flex justify-content-between mt-2">
            <div className="text-center">
              <div className="fs-4 fw-bold text-light">64</div>
              <div className="fs-5 text-muted fw-semibold">Playlist</div>
            </div>
            <div className="text-center">
              <div className="fs-4 fw-bold text-light">45</div>
              <div className="fs-5 text-muted fw-semibold">Following</div>
            </div>
            <div className="text-center">
              <div className="fs-4 fw-bold text-light">21</div>
              <div className="fs-5 text-muted fw-semibold">Followers</div>
            </div>
          </div>
          <Link to={route.profile} className={'d-block mt-4'}>
            <button className={styles.navBtn}>PROFILE</button>
          </Link>
          <Link to={route.moodFilter} className="d-block">
            <button className={clsx(styles.navBtn, styles.mood)}>MOOD</button>
          </Link>
          <Accordion
            defaultActiveKey="#"
            bsPrefix={styles.accordionContainer}
            onSelect={(val) => {
              setAccordion(val)
            }}
          >
            <Accordion.Item eventKey="0" className={clsx('border-0', styles.accordionContainer__item)}>
              <Accordion.Header bsPrefix={styles.accordionContainer__header}>
                <div className={styles.navBtn}>LIBRARY</div>
                <Icon name={accordion === null ? 'up' : 'down'} size={22} className={styles.accordionContainer__icon} />
              </Accordion.Header>
              <Accordion.Body>
                {['MOOD', 'PLAYLIST', 'BLOG', 'VIDEO'].map((item) => (
                  <div key={item}>
                    <button className={styles.navBtn}>{item}</button>
                  </div>
                ))}
              </Accordion.Body>

              <Button variant="link" className="mt-4 fs-4 text-light text-decoration-none p-0 " onClick={handleLogout}>
                Çıkış Yap
                <Icon name="logout" size={22} className={styles.logout} />
              </Button>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas> */}
    </>
  )
}
