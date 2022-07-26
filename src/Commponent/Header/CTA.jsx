import React from 'react'
import CV from '../../assets/Ch Jawad Cv Update.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#conntact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA