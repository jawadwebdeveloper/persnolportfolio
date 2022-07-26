import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

import {Roll,LightSpeed,Flip,Bounce} from 'react-reveal';
// use state
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNave] = useState('#')
  return (
    <nav>
      <Bounce left>
      <a href="#" onClick={()=> setActiveNave('#')} className={activeNav === '#' ?  'active': ''}><AiOutlineHome/></a>
      </Bounce>
      <Bounce right>
      <a href="#about" onClick={()=> setActiveNave('#about')} className={activeNav === '#about' ?  'active': ''}><AiOutlineUser/></a>
      </Bounce>
      <Bounce top>
      <a href="#experience" onClick={()=> setActiveNave('#experience')} className={activeNav === '#experience' ?  'active': ''}><BiBook/></a>
      </Bounce>
      <Bounce bottom>
      <a href="#service" onClick={()=> setActiveNave('#services')} className={activeNav === '#services' ?  'active': ''}><RiServiceLine/></a>
      </Bounce>
      <Bounce bottom left>
      <a href="#conntact" onClick={()=> setActiveNave('#conntact')} className={activeNav === '#conntact' ?  'active': ''}><BiMessageSquareDetail/></a>
      </Bounce>
    </nav>
  )
}

export default Nav