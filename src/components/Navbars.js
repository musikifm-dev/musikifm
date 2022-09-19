import Menus from "./Sidebar/Menus";
import logo from "img/logo.svg";
import logoBlack from "img/logo-black.png";
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import Icon from '../Icon';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { slide as Menu } from 'react-burger-menu'

function Navbars({ cookies, removeCookie }){

    let login;

    if (!cookies.token) {
        login = false
    }
    else{
    login= true
    }

    return (

        

        <div>


            <Navbar className={login ? "navbarSpec bg-black" : "navbarSpec bg-white"}>

                <Navbar.Brand>
                    <Menu customBurgerIcon={ <Icon name={login ? "hamburger" : "blackhamburger"}  size="32" /> } >
                        <div className="menuSide">
                            <span className="menuSide_close">
                                <Icon  name="close" size="24"/>
                            </span>
                            <ul>
                                <li>
                                    <NavLink to="/" className="menu-item">

                                    Home
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="menu-item">

                                        Mood Filter
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/podcast" className="menu-item">

                                        Podcast
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="menu-item">

                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/videos" className="menu-item">

                                        Video
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/" className="menu-item">

                                        Schedule
                                    </NavLink>
                                </li>

                            </ul>
                        </div>


                    </Menu>
                    <NavLink to="/">

                        <img src={login ? logo : logoBlack} />
                    </NavLink>


                </Navbar.Brand>
                <Menus cookies={cookies} removeCookie={removeCookie} />

            </Navbar>
        </div>

    )
}
export default  Navbars