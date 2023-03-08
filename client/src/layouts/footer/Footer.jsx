import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <img className="footer-logo" src="assets/images/logo.png" alt="logo.png"></img>
      <div className="footer-column">
        <h5 className="footer-column-title">Explorar</h5>
        <div className="footer-column-content">
          <ul className="footer-column-content-list">
            <li className="footer-column-content-list-item">
              <a href="/">Inicio</a>
            </li>
            <li className="footer-column-content-list-item">
              <a href="/">Nosotros</a>
            </li>
            <li className="footer-column-content-list-item">
              <a href="/">Misión</a>
            </li>
            <li className="footer-column-content-list-item">
              <a href="/">Visión</a>
            </li>
          </ul>
          <ul className="footer-column-content-list">
            <li className="footer-column-content-list-item">
              <a href="/">Menú</a>
            </li>
            <li className="footer-column-content-list-item">
              <a href="/">Peluditos</a>
            </li>
            <li className="footer-column-content-list-item">
              <a href="/">Recuerdos</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-column">
        <h5 className="footer-column-title">Contacto</h5>
        <div className="footer-column-content">
          <ul className="footer-column-content-list">
            <li className="footer-column-content-list-item">
              <div className="footer-column-content-list-item-icon-container">
                <FontAwesomeIcon icon={faLocationCrosshairs} size="xl" color='var(--primary-color)'/>
              </div>
              <a href="/">Carrera 15 # 48c - 51<br/>Cali - Colombia</a>
            </li>
            <li className="footer-column-content-list-item">
              <div className="footer-column-content-list-item-icon-container">
                <FontAwesomeIcon icon={faPhone} size="xl" color='var(--primary-color)'/>
              </div>
              <a href="/">333-333-3333</a>
            </li>
            <li className="footer-column-content-list-item">
              <div className="footer-column-content-list-item-icon-container">
                <FontAwesomeIcon icon={faEnvelope} size="xl" color='var(--primary-color)'/>
              </div>
              <a href="/">titoscatcafe@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-column">
        <h5 className="footer-column-title">Social</h5>
        <div className="footer-column-content">
          <ul className="footer-column-content-list">
            <li className="footer-column-content-list-item">
              <a href="/">
                <div className="footer-column-content-list-item-icon-container">
                  <img
                    className="footer-column-content-list-item-icon-container-img"
                    src="assets/images/facebook-logo.png"
                    alt="facebook-icon.png"
                  ></img>
                </div>
                Inicio
              </a>
            </li>
            <li className="footer-column-content-list-item">
              <a href="/">
                <div className="footer-column-content-list-item-icon-container">
                  <img
                    className="footer-column-content-list-item-icon-container-img"
                    src="assets/images/instagram-logo.png"
                    alt="instagram-icon.png"
                  ></img>
                </div>
                Nosotros
              </a>
            </li>
            <li className="footer-column-content-list-item">
              <a href="/">
                <div className="footer-column-content-list-item-icon-container">
                  <img
                    className="footer-column-content-list-item-icon-container-img"
                    src="assets/images/twitter-logo.png"
                    alt="twitter-icon.png"
                  ></img>
                </div>
                Misión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer