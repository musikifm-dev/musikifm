// import logo from '../../assets/img/logo.svg';
import logoBlack from '../../../assets/img/logo-black.png'
import { default as ReactBootstrapNavbar } from 'react-bootstrap/Navbar'

import { Container, Form, Nav, Image, Offcanvas, Accordion, InputGroup, Stack, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Icon from 'assets/svg'
import { navLinks, route } from '../../../utils/constants/index'
import styles from '../style.module.scss'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import clsx from 'clsx'
import { Avatar } from 'components/ui'
import { useState } from 'react'

const Navbar = () => {
  const [accordion, setAccordion] = useState('0')
  const [navbar, setNavbar] = useState(false)
  const navigate = useNavigate()
  const { isMobile } = useWindowSize()

  const handleChange = () => {}

  const handleNavbarToggle = (val) => {
    setNavbar(val)
    if (!navbar) setAccordion(null)
  }

  return (
    <>
      {[false].map((expand) => (
        <ReactBootstrapNavbar
          key={expand}
          bg="light"
          expand={expand}
          className={styles.navbar}
          onToggle={handleNavbarToggle}
        >
          <Container fluid>
            <ReactBootstrapNavbar.Brand>
              <Stack direction="horizontal" gap={2} className="align-items-start">
                <ReactBootstrapNavbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                  <Icon name="hamburger" size={isMobile ? '19' : '30'} className={styles.navbar__hamburger} />
                </ReactBootstrapNavbar.Toggle>
                <Link to={route.home}>
                  <Image src={logoBlack} className={styles.navbar__logo} />
                </Link>
              </Stack>
              <ReactBootstrapNavbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                className={'w-12'}
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className={styles.nav}>
                    <Stack gap={2}>
                      {navLinks.map((item, i) => (
                        <Link to={item.route} key={i}>
                          <button className={styles.navBtn}>{item.text}</button>
                        </Link>
                      ))}
                      <InputGroup className={styles.search}>
                        <Form.Control
                          type="email"
                          placeholder="Search"
                          size="lg"
                          className={clsx('text-center', styles.input)}
                          onChange={handleChange}
                        />
                        <InputGroup.Text className={styles.input__icon}>
                          <Icon name="search" size={22} />
                        </InputGroup.Text>
                      </InputGroup>

                      <div className="d-flex justify-content-center mt-5">
                        <div className="text-center">
                          <Avatar
                            source="https://images.squarespace-cdn.com/content/v1/569591ff0ab3771dba3f1ec6/1650383193773-4E38HIVJMG16Q5MHD80A/JD+Solo+by+Todd+V+Wolfson.jpg?format=2500w"
                            size="xl"
                            rounded="full"
                          />
                          <div className="d-flex justify-content-center">
                            <div>
                              <div className={clsx(styles.editProfile, 'fs-5 p-2 bg-gray')}>Edit Profile</div>
                              <div className="fs-2 fw-bold">John Doe</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-2">
                        <div className="text-center">
                          <div className="fs-4 fw-bold">64</div>
                          <div className="fs-5 text-muted fw-semibold">Playlist</div>
                        </div>
                        <div className="text-center">
                          <div className="fs-4 fw-bold">45</div>
                          <div className="fs-5 text-muted fw-semibold">Following</div>
                        </div>
                        <div className="text-center">
                          <div className="fs-4 fw-bold">21</div>
                          <div className="fs-5 text-muted fw-semibold">Followers</div>
                        </div>
                      </div>

                      <Link to={route.profile}>
                        <button className={styles.navBtn}>PROFILE</button>
                      </Link>
                      <Link to={route.moodFilter}>
                        <button className={styles.navBtn}>MOOD</button>
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
                            <button className={styles.navBtn}>LIBRARY</button>
                            <Icon
                              name={accordion === null ? 'up' : 'down'}
                              size={22}
                              className={styles.accordionContainer__icon}
                            />
                          </Accordion.Header>
                          <Accordion.Body>
                            {['MOOD', 'PLAYLIST', 'BLOG', 'VIDEO'].map((item) => (
                              <div key={item}>
                                <button className={styles.navBtn}>{item}</button>
                              </div>
                            ))}
                          </Accordion.Body>
                          <Button variant="link" className="mt-4 fs-4 text-muted text-decoration-none p-0">
                            Çıkış Yap
                            <Icon name="logout" size={22} className={styles.logout} />
                          </Button>
                        </Accordion.Item>
                        {/** if user logged in, show button below */}
                      </Accordion>
                    </Stack>
                  </Nav>
                </Offcanvas.Body>
              </ReactBootstrapNavbar.Offcanvas>
            </ReactBootstrapNavbar.Brand>
            <div className={styles.btnContainer}>
              <Stack gap={4} direction="horizontal">
                <button className={styles.btnContainer__moodBtn} onClick={() => navigate(route.moodFilter)}>
                  Mood Filter {isMobile && <span className={styles.tm}>TM</span>}
                </button>
                {!isMobile && (
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
              </Stack>
            </div>
          </Container>
        </ReactBootstrapNavbar>
      ))}
    </>
  )
}
export default Navbar
