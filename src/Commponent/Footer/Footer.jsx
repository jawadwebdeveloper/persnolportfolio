import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MRJD</a>
      <ul className='permalinks'>

        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonial">Testimonial</a></li>
        <li><a href="#conntact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/muhammad-jawad-230026236/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/jawadwebdeveloper" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/jawad_codes/" target="_blank"><GrInstagram/></a>
    
    
      </div>
      <div className="footer__copywrite">
        <small>&copy;Muhammad Jawad Created by jd.</small>
      </div>
    </footer>
  )
}

export default Footer