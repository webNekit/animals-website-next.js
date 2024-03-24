"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <section className='w-full py-8'>
      <div className="container mx-auto">
        <div className="w-full border border-zinc-300 rounded-lg">
            <Swiper className='overflow-hidden'>
                <SwiperSlide>
                  1
                </SwiperSlide>
                <SwiperSlide>
                  2
                </SwiperSlide>
                <SwiperSlide>
                  3
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Banner
