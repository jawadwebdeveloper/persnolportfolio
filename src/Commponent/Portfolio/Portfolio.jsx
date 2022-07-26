import React from 'react'
import './Portfolio.css'
import IMAGE1 from '../../assets/portfolio/post1.jpeg'
import IMAGE2 from '../../assets/portfolio/post2.jpeg'
import IMAGE3 from '../../assets/portfolio/post4.jpeg'
import IMAGE4 from '../../assets/portfolio4.jpg'
import IMAGE5 from '../../assets/portfolio5.png'
import IMAGE6 from '../../assets/portfolio6.jpg'

import {Roll,LightSpeed,Flip,Bounce,Zoom} from 'react-reveal';
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        
        <article className='portfolio__item'>
          <Bounce left>
          <div className="portfolio_item-image">
              <img src={IMAGE1} alt="" />
          </div>
          </Bounce>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://jawadwebdeveloper.github.io/Reactwhiteportfolio/#home" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <Zoom In>
          <div className="portfolio_item-image">
              <img src={IMAGE2} alt="" />
          </div>
          </Zoom>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://jawadwebdeveloper.github.io/GymReactWebsite/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
          </article>

        <article className='portfolio__item'>
          <Bounce right>
          <div className="portfolio_item-image">
              <img src={IMAGE3} alt="" />
          </div>
          </Bounce>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://jawadwebdeveloper.github.io/SoftwarewebsiteReact/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
        <Bounce lrft>
          <div className="portfolio_item-image">
              <img src={IMAGE4} alt="" />
          </div>
          </Bounce>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://jawadwebdeveloper.github.io/Reactwhiteportfolio/#home" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <Zoom Out>
          <div className="portfolio_item-image">
              <img src={IMAGE5} alt="" />
          </div>
          </Zoom>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://jawadwebdeveloper.github.io/GymReactWebsite/" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <Bounce right>
          <div className="portfolio_item-image">
              <img src={IMAGE6} alt="" />
          </div>
          </Bounce>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/jawadwebdeveloper" target="_blank" className='btn'>Github</a>
            <a href="https://jawadwebdeveloper.github.io/Reactwhiteportfolio/#home" target="_blank" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Portfolio