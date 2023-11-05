import React, { useState, useEffect } from 'react';
import './Sidebar.css'
import { BiChevronRight, BiLogIn } from 'react-icons/bi';
import { HiHome } from 'react-icons/hi'
import { FaGamepad } from 'react-icons/fa'
import { GiShop } from 'react-icons/gi'

const Sidebar: React.FC = () => {
  const [sidebarClosed, setSidebarClosed] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  const toggleSidebar = () => {
    setSidebarClosed(!sidebarClosed);
  };

  const toggleDarkMode = () => {
    const body = document.querySelector('body');
    body?.classList.toggle('dark');
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <nav className={sidebarClosed ? "sidebar close" : "sidebar"}>
        <header>
          <div className="image-text">
            <GiShop className="icon"></GiShop>
            <div className="text logo-text">
              <a className="name">SHOP</a>
              <span className="profession">Term Game</span>
            </div>
          </div>
          <BiChevronRight className="toggle" onClick={toggleSidebar}/>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <li className="nav-link">
                <a href="/home">
                  <HiHome className="icon" />
                  <span className="text nav-text">Home Page</span>
                </a>
              </li>
              <li className="nav-link">
                <a href="/term">
                  <FaGamepad className="icon" />
                  <span className="text nav-text">Term Game</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bottom-content">
            <li>
              <a href="#">
                <BiLogIn className="icon" />
                <span className="text nav-text">Log In</span>
              </a>
            </li>
            <li className="mode" onClick={toggleDarkMode}>
              <div className="sun-moon">
                <i className={darkMode ? "bx bx-moon icon moon" : "bx bx-sun icon sun"}></i>
              </div>
              <span className="mode-text text">
                {darkMode ? "Light mode" : "Dark mode"}
              </span>
              <div className="toggle-switch">
                <span className="switch"></span>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
