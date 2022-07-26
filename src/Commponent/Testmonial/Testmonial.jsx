import React from 'react'
import './Testmonial.css'
import AVART1 from '../../assets/avatar1.jpg'
import AVART2 from '../../assets/avatar2.jpg'
import AVART3 from '../../assets/avatar3.jpg'
import AVART4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const Testmonial = () => {
  return (
    <section id='testmonial'>
      <h5>Review from clients</h5>
      <h2>Testmonial</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        <SwiperSlide className='testmonial'>
            <div className="client__avatar">
              <img src={AVART1} alt="" />
              
            </div>
            <h5 className='clients__name'>Ernest Achiever</h5>
              <small className='clients__review'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore libero odio fugit commodi repellendus debitis, corporis praesentium ipsa atque voluptas et rerum dolores
                 adipisci qui, cum optio voluptate reprehenderit!
              </small>
        </SwiperSlide>
        <SwiperSlide className='testmonial'>
            <div className="client__avatar">
              <img src={AVART2} alt="" />
            </div>
              <h5 className='clients__name'>Ernest Achiever</h5>
              <small className='clients__review'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore libero odio fugit commodi repellendus debitis, corporis praesentium ipsa atque voluptas et rerum dolores
                 adipisci qui, cum optio voluptate reprehenderit!
              </small>
        </SwiperSlide>
        <SwiperSlide className='testmonial'>
            <div className="client__avatar">
              <img src={AVART3} alt="" />
            </div>
              <h5 className='clients__name'>Ernest Achiever</h5>
              <small className='clients__review'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore libero odio fugit commodi repellendus debitis, corporis praesentium ipsa atque voluptas et rerum dolores
                 adipisci qui, cum optio voluptate reprehenderit!
              </small>
        </SwiperSlide>
        <SwiperSlide className='testmonial'>
            <div className="client__avatar">
              <img src={AVART4} alt="" />
            </div>
              <h5 className='clients__name'>Ernest Achiever</h5>
              <small className='clients__review'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur labore libero odio fugit commodi repellendus debitis, corporis praesentium ipsa atque voluptas et rerum dolores
                 adipisci qui, cum optio voluptate reprehenderit!
              </small>
        </SwiperSlide>

      </Swiper>


    </section>
  )
}

export default Testmonial