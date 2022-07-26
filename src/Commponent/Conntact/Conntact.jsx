import React from 'react'
import './Conntact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {GrInstagram} from 'react-icons/gr'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react'
import emailjs from 'emailjs-com'


// import emailjs from '@emailjs/browser'
const Conntact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vnnbgpo', 'template_k3qlyza', form.current, 'BWYtHtvfwwvZ18v5p')
      e.target.reset()
  };


  return (
    <section id='conntact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
           <article className='contact__option'>
           

              <MdOutlineEmail className='contact__option-icon'/>
        
              <h4>Email</h4>
              <h5>mrjd927@gmail.com</h5>
              <a href="mailto:mrjd927@gmail.com" target={"_blank"}>Send a message</a>
            </article>
            <article className='contact__option'>
              <GrInstagram className='contact__option-icon'/>
              <h4>Instagram</h4>
              <h5>M.Jawad</h5>
              {/* <a href="https://m.me/jawad_codes" target={"_blank"}>Send a message</a> */}
              <a href="https://www.instagram.com/jawad_codes/" target={"_blank"}>Send a message</a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+92 333 4950 384</h5>
              {/* <a href="https://api.whatsapp.com/send?phone=+923334950384" target={"_blank"}>Send a message</a> */}
              <a href="https://web.whatsapp.com/send?phone=+923334950384" target={"_blank"}>Send a message</a>
            </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message'></textarea>
            <button type='submit' className='btn btn-primary'>Send a Message</button>
        </form>
        <a href="#" className='scroll__up'>Scroll Up -></a>
      </div>
    </section>
  )
}

export default Conntact