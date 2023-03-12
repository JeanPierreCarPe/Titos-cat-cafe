import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './social-networks.css'

const SocialNetworks = () => {
  return (
    <div className='social-networks'>
        <img className='social-networks-img' src='assets/images/facebook-logo.png' alt='facebook-icon.png'></img>
        <img className='social-networks-img' src='assets/images/instagram-logo.png' alt='instagram-icon.png'></img>
        <img className='social-networks-img' src='assets/images/twitter-logo.png' alt='twitter-icon.png'></img>
    </div>
  )
}

export default SocialNetworks