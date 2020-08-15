import React, { useState, useEffect } from 'react';
import {Dropdown} from 'react-bootstrap';
import Link from '../Link/Link';

const Nav = () => {
  const [navClass, setNavClass] = useState('');
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let navClass = '';
      if (window.scrollY >= 100) {
        navClass = 'scrolled';
      }
      setNavClass(navClass);
    });
  }, []);
  return (
    <nav className={`navbar navbar-expand-md  ${navClass}`}>
      <div className='container'>
        <a className='navbar-brand' href='!#'>
        <img src={require("../../../img/almondAIlogo.png")}  className="img-fluid" alt="" data-aos="zoom-in" />
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return 'open';
            return '';
          })()}`}
          onClick={toggleNav}
        >
          <span ></span>
          <span ></span>
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return 'show';
            return '';
          })()}`}
        >
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link target='hero' offset={-120} classes='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='product' classes='nav-link'>
                products
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='services' classes='nav-link'>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='features' classes='nav-link'>
                Feature
              </Link>
            </li>
            <li className='nav-item'>
              <Link target='solution' classes='nav-link'>
                solution
              </Link>
            </li>
      
            <Dropdown>
              <Dropdown.Toggle style={{fontSize:"13px",fontWeight:"bold",marginTop:"10px",padding:"6px" }} variant="" id="dropdown-basic">
                MORE
              </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                          <Link target='testimonials' classes='nav-link'>
                            Testimonials
                          </Link>
                      </Dropdown.Item>

                    <Dropdown.Item href="#/action-2">
                          <Link target='portfolio' classes='nav-link'>
                            Portfolio
                          </Link>
                      </Dropdown.Item>

                      <Dropdown.Item href="#/action-3"> 
                          <Link target='team' classes='nav-link'>
                            Team
                          </Link>
                      </Dropdown.Item>

                      <Dropdown.Item href="#/action-3"> 
                          <Link target='clients' classes='nav-link'>
                            our associations
                          </Link>
                      </Dropdown.Item>
                </Dropdown.Menu>
             </Dropdown>
                          
            <li className='nav-item'>
              <Link target='contact' classes='nav-link'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
