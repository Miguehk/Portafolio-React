import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Testimonilas = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
          <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR1} alt="Avatar One" />
              </div>
              <h5 className='client__name'>Ernest Achiever</h5>
                <small className='client__review'>
                Excellent work, always very attentive.
                </small>
            </SwiperSlide>

            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR2} alt="Avatar One" />
              </div>
              <h5 className='client__name'>Ernest Achiever</h5>
                <small className='client__review'>
                Your working methods are excellent.
                </small>
            </SwiperSlide>

            <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR3} alt="Avatar One" />
              </div>
              <h5 className='client__name'>Ernest Achiever</h5>
                <small className='client__review'>
                Very efficient
                </small>
            </SwiperSlide>


      </Swiper>
    </section> 
  )
}

export default Testimonilas
