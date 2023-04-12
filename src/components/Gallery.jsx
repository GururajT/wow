import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from "swiper";

import gallery1 from '../images/gg1.jpg'
import gallery2 from '../images/gg2.jpg'
import gallery3 from '../images/gg3.jpg'
import gallery4 from '../images/gg4.jpg'
import gallery5 from '../images/gg5.jpg'
import gallery6 from '../images/gg6.jpg'
import gallery7 from '../images/gg7.jpg'
import gallery8 from '../images/gg8.jpg'



export default function Gallery() {
  return (
    <div className='Chefs'>
      <div className='container-fluid'>
        <div className='ea'>
          <h5>GALLERY</h5>
          <h2>CHECK<span> OUR GALLERY </span></h2>
        </div>
        <div className='ea2'>

          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            
            pagination={{
              clickable: true,
            }}

          >
            <SwiperSlide><img src={gallery7} /></SwiperSlide>
            <SwiperSlide><img src={gallery8} /></SwiperSlide>
            <SwiperSlide><img src={gallery1} /></SwiperSlide>
            <SwiperSlide><img src={gallery2} /></SwiperSlide>
            <SwiperSlide><img src={gallery3} /></SwiperSlide>
            <SwiperSlide><img src={gallery4} /></SwiperSlide>
            <SwiperSlide><img src={gallery5} /></SwiperSlide>
            <SwiperSlide><img src={gallery6} /></SwiperSlide>

          </Swiper>
        </div>

      </div>
    </div>

  )
}
