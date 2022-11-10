// import logo from '../../assets/img/logo.svg';
import logoBlack from '../../../assets/img/logo-black.png'
import { default as ReactBootstrapNavbar } from 'react-bootstrap/Navbar'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, NavLink } from 'react-router-dom'
import Icon from 'assets/svg'
import { Button, Stack } from 'react-bootstrap'
import { navLinks, route } from '../../../utils/constants/index'
import styles from '../style.module.scss'

const Navbar = () => {
  return (
    <>
      {[false].map((expand) => (
        <ReactBootstrapNavbar key={expand} bg="light" expand={expand} className={styles.navbar}>
          <Container fluid>
            <ReactBootstrapNavbar.Brand>
              <Stack direction="horizontal" gap={2} className="align-items-start">
                <ReactBootstrapNavbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
                  <Icon name="hamburger" size="26" className={styles.btn} />
                </ReactBootstrapNavbar.Toggle>
                <Link to={route.home}>
                  <Image src={logoBlack} width={162} height={32} />
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
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {navLinks.map((item, i) => (
                      <NavLink to={item.route} key={i}>
                        <Button variant="light" size="sm">
                          {item.text}
                        </Button>
                      </NavLink>
                    ))}
                  </Nav>
                </Offcanvas.Body>
              </ReactBootstrapNavbar.Offcanvas>
            </ReactBootstrapNavbar.Brand>
            <div className={styles.btnContainer}>
              <Link to={route.login} className={styles.btnContainer__btn}>
                Login
              </Link>
              <span className={styles.btnContainer__btn}>/</span>
              <Link to={route.register} className={styles.btnContainer__btn}>
                Sign In
              </Link>
            </div>
          </Container>
        </ReactBootstrapNavbar>
      ))}
    </>
  )
}
export default Navbar
