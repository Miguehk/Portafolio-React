import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Miguel Paniagua</a>


      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonilas</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a target='_blank' href="https://www.facebook.com/migueleduado.paniaguasuarez.9/"><FaFacebookF/></a>
        <a target='_blank' href="https://www.instagram.com/miguel_paniagua_/"><FiInstagram/></a>
        <a target='_blank' href="https://twitter.com/MiguelP81132300"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Miguel Paniagua. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer