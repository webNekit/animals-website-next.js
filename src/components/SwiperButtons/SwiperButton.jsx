"use client";
import React from 'react';
import { useSwiper } from 'swiper/react';
import { FiChevronRight, FiChevronLeft  } from "react-icons/fi";

const SwiperButton = ({ containerStyles }) => {
    const swiper = useSwiper();
    return (
        <div className={containerStyles + 'flex gap-2 px-2 py-2 rounded-full bg-white z-50'}>
            <button onClick={() => swiper.slidePrev()} className='w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors'><FiChevronLeft /></button>
            <button onClick={() => swiper.slideNext()} className='w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors'><FiChevronRight /></button>
        </div>
    )
}

export default SwiperButton
