import React from 'react'
import CTA from './CTA'
import './Header.css'
import me2 from '../../assets/kokoone.png'
// import me2 from '../../assets/PIXDDDD/dd.png'
import HeaderSochial from './HeaderSochial'
// import SoundBar from '../Sound/SoundBar'
// import {fade} from 'react-reveal'
import {Roll,LightSpeed,Flip,Bounce} from 'react-reveal';
// import { Typewriter } from 'react-simple-typewriter'
import Typical from 'react-typical'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        {/* <SoundBar/> */}

          <Roll right>
            <h5 className='hh5'>Hello I'm</h5>
            <h1>Muhammad Jawad</h1>
            <h5 className="text-light">
              <Typical className="text-light"
                steps= 
                {[
                  "Frontend Website Developer",
                  5000,
                  "Reactjs Developer", 
                  5000,
                  "Mern Stack Developer",
                  5000,
                  "UI/UX Web Designer",
                  5000,
                  "App Development📱",
                  5000,
                ]}
                loop={Infinity}
                // loop
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              {/* <span>
                        <Typewriter
                            // words={[' Reactjs Developer', ' Frontend web Developer', ' Professinol Coder']}
                            words={["A","B","C"]}
                            loop
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                        </span> */}
            </h5>
            {/* <h5 className="text-light">Frontend Web Developer</h5> */}
            
          </Roll> 
            <CTA/> 
            <HeaderSochial/> 
              <div className="me">
            <Roll right>
              <img src={me2} alt="" />
            </Roll>
              </div>

            {/* <Bounce left> */}
              <a href="#conntact" className='scroll__down'>Scroll Down -></a>
            {/* </Bounce> */}
      </div>
    </header>
  )
}

export default Header