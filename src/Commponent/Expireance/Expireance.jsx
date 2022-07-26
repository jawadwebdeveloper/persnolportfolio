import React from 'react'
import './Experinace.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import  {Rotate,Bounce,Zoom,Roll}  from 'react-reveal';
const Expireance = () => {
  return (
    
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
          <div className="experience__frontend">
                <Bounce left>
              <h3>Frontend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                </article>
                {/* </Bounce> */}
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>CSS</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>JavaScript</h4>
                      <small className='text-light'>Intermmediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>BootStrap</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>OOP</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>Reactjs</h4>
                      <small className='text-light'>Intermmediate</small>
                    </div>
                </article>
              
              </div>
          </Bounce> 
          </div>

          <div className="experience__backend">
          <Bounce right>
          <h3>Backend Development</h3>
              <div className="experience__content">
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>NoseJs</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>MongoDB</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>PHP</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>MySQL</h4>
                      <small className='text-light'>Basic</small>
                    </div>
                </article>
                <article className='experience__details'>
                    <BsPatchCheckFill className='experience__details-icons'/>
                    <div>
                      <h4>Python</h4>
                      <small className='text-light'>Basic</small>
                    </div>
                </article>

              </div>


          </Bounce> 
          </div>

      </div>
    </section>
  )
}

export default Expireance