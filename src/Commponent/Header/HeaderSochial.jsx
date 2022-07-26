import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import  {Rotate,Bounce }  from 'react-reveal';
const HeaderSochial = () => {
  return (
    <div className="header__sochials">
        {/* <Bounce top left> */}
          <a href="https://www.linkedin.com/in/muhammad-jawad-230026236/" target="_blank"><BsLinkedin/></a>
        {/* </Bounce> */}
        {/* <Bounce bottom right> */}
          <a href="https://github.com/jawadwebdeveloper" target="_blank"><FaGithub/></a>
        {/* </Bounce>   */}
        {/* <Bounce top right> */}
          <a href="https://www.instagram.com/jawad_codes/" target="_blank"><GrInstagram/></a>
        {/* </Bounce> */}
    </div>
  )
}

export default HeaderSochial