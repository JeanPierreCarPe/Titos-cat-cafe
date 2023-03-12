import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {

  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  const isActive = (e) => {
    setActive(!active);
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="navbar-header">
        <img className="navbar-logo" src="assets/images/logo.png" alt="" onClick={() => {navigate('/')}}></img>
        <hr></hr>
        <FontAwesomeIcon className='navbar-icon' icon={faShoppingBag} color='var(--primary-color)' size='xl'/>
        <FontAwesomeIcon className='navbar-icon' icon={faUser} color='var(--primary-color)' size='xl' onClick={() => {navigate('/login')}}/>
        <div
          className={
            active ? "navbar-menu-button active" : "navbar-menu-button"
          }
          onClick={(e) => {
            isActive(e);
          }}
        >
          <div className="navbar-menu-button-line"></div>
        </div>
      </div>
      {active && <div className="navbar-menu">
        <a className="navbar-menu-item" href="/">Nosotros</a>
        <a className="navbar-menu-item" href="/">Menú</a>
        <a className="navbar-menu-item" href="/cats">Peluditos</a>
        <a className="navbar-menu-item" href="/">Recuerdos</a>
        <a className="navbar-menu-item" href="/">Merchandise</a>
        <hr></hr>
        <div className="navbar-menu-social-media">
          <a className="navbar-menu-social-media-item" href="/">Facebook</a>
          <a className="navbar-menu-social-media-item" href="/">Instagram</a>
          <a className="navbar-menu-social-media-item" href="/">Twitter</a>
        </div>
      </div>}
    </div>
  )
}

export default Navbar