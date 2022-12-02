// import logo from '../../assets/img/logo.svg';
import logoBlack from '../../../assets/img/logo-black.png'
import { default as ReactBootstrapNavbar } from 'react-bootstrap/Navbar'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, useNavigate } from 'react-router-dom'
import Icon from 'assets/svg'
import { Button, Stack } from 'react-bootstrap'
import { authLinks, navLinks, route } from '../../../utils/constants/index'
import styles from '../style.module.scss'
import { useWindowSize } from 'utils/hooks/useWindowSize'
import Divider from 'components/ui/divider'

const Navbar = () => {
  const navigate = useNavigate()
  const { isMobile } = useWindowSize()
  return (
    <>
      {[false].map((expand) => (
        <ReactBootstrapNavbar key={expand} bg="light" expand={expand} className={styles.navbar}>
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
                  <Nav className="mt-5">
                    <Stack gap={2}>
                      {navLinks.map((item, i) => (
                        <Link to={item.route} key={i}>
                          <Button variant="light" size="lg" className="w-100">
                            {item.text}
                          </Button>
                        </Link>
                      ))}
                      {isMobile && <Divider text="Auth" />}
                      {isMobile &&
                        authLinks.map((item, i) => (
                          <Link to={item.route} className={styles.btnContainer__btn} key={i}>
                            <Button variant="light" size="lg" className="w-100">
                              {item.text}
                            </Button>
                          </Link>
                        ))}
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
                      Sign In
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
