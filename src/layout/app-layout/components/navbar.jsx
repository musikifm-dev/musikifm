// import logo from '../../assets/img/logo.svg';
import logoBlack from '../../../assets/img/logo-black.png'
import logoWhite from '../../../assets/img/logo-white.png'
import { default as ReactBootstrapNavbar } from 'react-bootstrap/Navbar'

import { Form, Nav, Image, Offcanvas, Accordion, InputGroup, Stack, Button } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Icon from 'assets/svg'
import { offCanvasLinks, navbarAuthenticatedLinks, route } from '../../../utils/constants/index'
import styles from '../style.module.scss'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import clsx from 'clsx'
import { Avatar } from 'components/ui'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import useScrollPosition from 'utils/hooks/useScrollPosition'
import { authApi, useGetMyDataQuery } from 'store/api/auth'
import MobilePlayer from 'sections/player-mobile'
import { refreshPage } from 'utils/helpers'
import { ProfileSidebar } from 'sections'
import TabletPlayer from 'sections/player-tablet/tablet'
import { setIsOpen } from 'store/slices/navbar'

const Navbar = () => {
  const navigate = useNavigate()
  const { isOpen } = useSelector((state) => state.navbar)
  const [accordion, setAccordion] = useState('0')
  // const [navbar, setNavbar] = useState(false)
  const { data: userData } = useGetMyDataQuery()
  const dispatch = useDispatch()
  const { isMobile, isTablet } = useWindowSize()
  const scrollPosition = useScrollPosition()
  const { pathname } = useLocation()

  useEffect(() => {
    if (isOpen && pathname !== '/') {
      dispatch(setIsOpen(false))
      setAccordion(null)
    }
  }, [pathname])

  const handleNavbarToggle = (val) => {
    dispatch(setIsOpen(val))
    if (!isOpen) setAccordion(null)
  }

  const handleLogout = () => {
    localStorage.clear()
    dispatch(authApi.util.resetApiState())
    refreshPage()
  }

  return (
    <>
      {[false].map((expand) => (
        <ReactBootstrapNavbar
          key={expand}
          expand={expand}
          className={clsx(styles.navbar, userData ? styles.darkBg : styles.lightBg)}
          onToggle={handleNavbarToggle}
        >
          <div className={isMobile && 'w-100'}>
            <div className={isMobile ? 'w-100 align-items-center justify-content-between no-wrap' : 'd-flex'}>
              <ReactBootstrapNavbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                <Icon
                  name="hamburger"
                  size={isMobile ? '24' : '30'}
                  className={clsx(styles.navbar__hamburger, userData ? styles.light : styles.dark)}
                />
              </ReactBootstrapNavbar.Toggle>

              {!isMobile && (
                <Link to={route.home}>
                  <Image src={userData ? logoWhite : logoBlack} className={styles.navbar__logo} />
                </Link>
              )}
              {isMobile && scrollPosition >= 520 && (
                <div className={styles.mobilePlayer}>
                  <div className={styles.mobilePlayer__item}>
                    <MobilePlayer />
                  </div>
                </div>
              )}
            </div>

            <ReactBootstrapNavbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className={clsx('w-12', styles.offCanvas, userData ? styles.darkBg : styles.lightBg)}
            >
              <Offcanvas.Body>
                <Nav className={clsx(styles.nav, isMobile && scrollPosition >= 520 && styles.navOnMobile)}>
                  <Stack gap={2}>
                    {offCanvasLinks.map((item, i) => (
                      <Link to={item.route} key={i}>
                        <button className={clsx(styles.navBtn, userData ? styles.light : styles.dark)}>
                          {item.text}
                        </button>
                      </Link>
                    ))}
                    <InputGroup className={styles.search}>
                      <Form.Control type="" placeholder="Search" size="lg" className={clsx(styles.input)} />
                      <InputGroup.Text className={styles.input__icon}>
                        <Icon name="search" size={22} />
                      </InputGroup.Text>
                    </InputGroup>

                    {userData && (
                      <>
                        <div className="d-flex flex-column justify-content-between h-100">
                          <div>
                            <div className="d-flex justify-content-center mt-5">
                              <div className="text-center">
                                <Avatar
                                  source="https://images.squarespace-cdn.com/content/v1/569591ff0ab3771dba3f1ec6/1650383193773-4E38HIVJMG16Q5MHD80A/JD+Solo+by+Todd+V+Wolfson.jpg?format=2500w"
                                  size="xl"
                                  rounded="full"
                                />
                                <div className="d-flex justify-content-center">
                                  <Stack gap={3} direction="vertical">
                                    <div
                                      className={clsx(
                                        styles.editProfile,
                                        'fs-5 p-2 bg-gray',
                                        userData ? styles.light : styles.dark,
                                      )}
                                    >
                                      Edit Profile
                                    </div>
                                    <div className={clsx('fs-2 fw-bold', userData ? styles.light : styles.dark)}>
                                      John Doe
                                    </div>
                                  </Stack>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex justify-content-between mt-2">
                              <div className="text-center">
                                <div className={'fs-4 fw-bold text-light'}>64</div>
                                <div className="fs-5 text-muted fw-semibold">Playlist</div>
                              </div>
                              <div className="text-center">
                                <div className={'fs-4 fw-bold text-light'}>45</div>
                                <div className="fs-5 text-muted fw-semibold">Following</div>
                              </div>
                              <div className="text-center">
                                <div className={'fs-4 fw-bold text-light'}>21</div>
                                <div className="fs-5 text-muted fw-semibold">Followers</div>
                              </div>
                            </div>
                            <Link to={route.profile} className={'d-block mt-4'}>
                              <button className={clsx(styles.navBtn, styles.light)}>PROFILE</button>
                            </Link>
                            <Link to={route.moodFilter} className={'d-block'}>
                              <button className={styles.mood}>MOOD</button>
                            </Link>
                            <Accordion
                              defaultActiveKey="#"
                              bsPrefix={styles.accordionContainer}
                              onSelect={(val) => {
                                setAccordion(val)
                              }}
                            >
                              <Accordion.Item
                                eventKey="0"
                                className={clsx('border-0', styles.accordionContainer__item)}
                              >
                                <Accordion.Header bsPrefix={styles.accordionContainer__header}>
                                  <div className={clsx(styles.navBtn, userData ? styles.light : styles.dark)}>
                                    LIBRARY
                                  </div>
                                  <Icon
                                    name={accordion === null ? 'up' : 'down'}
                                    size={22}
                                    className={styles.accordionContainer__icon}
                                  />
                                </Accordion.Header>
                                <Accordion.Body>
                                  {['MOOD', 'PLAYLIST', 'BLOG', 'VIDEO'].map((item) => (
                                    <div key={item}>
                                      <button className={clsx(styles.navBtn, userData ? styles.light : styles.dark)}>
                                        {item}
                                      </button>
                                    </div>
                                  ))}
                                </Accordion.Body>
                              </Accordion.Item>
                              {/** if user logged in, show button below */}
                            </Accordion>
                          </div>
                          <div>
                            <Button
                              variant="link"
                              className="mt-4 fs-4 text-muted text-decoration-none p-0"
                              onClick={handleLogout}
                            >
                              Çıkış Yap
                              <Icon name="logout" size={22} className={styles.logout} />
                            </Button>
                          </div>
                        </div>
                      </>
                    )}
                  </Stack>
                </Nav>
              </Offcanvas.Body>
            </ReactBootstrapNavbar.Offcanvas>
          </div>
          <div className={styles.btnContainer}>
            {userData && !isMobile && (
              <div className={styles.authenticatedLinks}>
                {navbarAuthenticatedLinks.map((item, i) => (
                  <Link to={item.route} key={i} className={styles.authenticatedLinks__link}>
                    <button className={clsx(styles.authenticatedLinks__item, userData ? styles.light : styles.dark)}>
                      {item.text}
                    </button>
                  </Link>
                ))}
              </div>
            )}
            <div className={styles.rightBox}>
              <div>
                {' '}
                <Icon name="search" size={24} fill={userData ? 'white' : 'black'} />
              </div>
              {!isMobile && userData && (
                <div>
                  {' '}
                  <button className={styles.btnContainer__moodBtn} onClick={() => navigate(route.moodFilter)}>
                    MOOD
                  </button>
                </div>
              )}
              {!isMobile && (
                <div>
                  {userData ? (
                    <ProfileSidebar />
                  ) : (
                    <div>
                      <Link to={route.login} className={styles.btnContainer__btn}>
                        Login
                      </Link>
                      <span className={styles.btnContainer__btn}>/</span>
                      <Link to={route.register} className={styles.btnContainer__btn}>
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          {isTablet && !isMobile && isOpen === false && <TabletPlayer />}
        </ReactBootstrapNavbar>
      ))}
    </>
  )
}
export default Navbar
