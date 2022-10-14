import Icon from '../../assets/svg';
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Menu } from '@headlessui/react';

const Menus = ({ cookies, removeCookie }) => {
  let navigate = useNavigate();

  let activeStyle = {
    backgroundColor: '#282828',
  };

  let login;

  if (!cookies.token) {
    login = false;
  } else {
    login = true;
  }

  const handleLogout = () => {
    removeCookie('token');
    return navigate('/login');
  };

  return (
    <nav className="px-2 flex header-menu">
      <ul className="d-flex">
        <li>
          {login ? (
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/podcast"
              className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
            >
              Podcast
            </NavLink>
          ) : (
            <div></div>
          )}
        </li>
        <li>
          {login ? (
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/blog"
              className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
            >
              Blog
            </NavLink>
          ) : (
            <div></div>
          )}
        </li>
        {/* <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined}  to="/songs" className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded">

                            Song
                        </NavLink>
                    </li> */}
        <li>
          {login ? (
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/videos"
              className="h-10 gap-x-4 flex items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
            >
              Videos
            </NavLink>
          ) : (
            <div></div>
          )}
        </li>

        {/* <li>

                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to="/" className="moodBtn">

                            Mood
                        </NavLink>
                    </li> */}
        <li>
          {login ? (
            <div></div>
          ) : (
            <NavLink id="logSign" style={({ isActive }) => (isActive ? activeStyle : undefined)} to="/login">
              Login & Sign Up
            </NavLink>
          )}
        </li>
        <li>
          {login ? (
            <Menu>
              <Menu.Button className={'profile-button'}>
                <div className="profile-button-name">MT</div>
              </Menu.Button>
              <Menu.Items className={'profile-button-menu'}>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink className={`${active && 'bg-blue-500'}`} to="/profile">
                      Profile
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  <button className="btn btn-primary mt-5" onClick={handleLogout}>
                    Log Out
                  </button>
                </Menu.Item>
              </Menu.Items>
            </Menu>
          ) : (
            <div></div>
          )}
        </li>
      </ul>
    </nav>
  );
};
export default Menus;
