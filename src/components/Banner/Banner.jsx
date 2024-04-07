"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperButton from '../SwiperButtons/SwiperButton';

// styles for swiper
import 'swiper/css';
import 'swiper/css/navigation';

const Banner = ({ getData }) => {

  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full h-full sm:h-[435px] sm:max-h-full border border-zinc-300 rounded-lg">
          <Swiper slidesPerView={1} loop="true" autoplay={{ delay: 500, disableOnInteraction: false }} className='overflow-hidden h-full relative'>
            {getData.length > 0 ? getData.map((item, index) => {
              return (
                <SwiperSlide key={index} className='w-full h-full'>
                  <div className="w-full h-full flex flex-col sm:flex-row">
                    <div className='w-full order-2 sm:order-1 px-8 py-8 sm:w-8/12 md:w-4/12 flex flex-col items-start gap-5'>
                      <h2 className="text-2xl text-zinc-800 font-medium">{item.attributes?.postName}</h2>
                      <p className="text-lg">{item.attributes?.smallText.length > 150 ? item.attributes?.smallText.slice(0, 150) + "..." : item.attributes?.smallText}</p>
                      <Link href={'/articles/' + item.attributes?.slug} className='px-4 py-2 rounded-full bg-pink-400 text-white transition-all hover:bg-pink-500 duration-200 mt-auto inline-block'>Узнать подробнее</Link>
                    </div>
                    <div className='w-full order-1 sm:order-2 h-full sm:w-4/12 md:w-8/12'>
                      <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.postImage?.data.attributes?.url) ?? ''} className='w-full h-full rounded-lg object-cover' alt='Изображение баннера' width={1000} height={500} />
                    </div>
                  </div>
                </SwiperSlide>
              );
            }) : [1, 2].map((item, index) => {
              return (
                <SwiperSlide key={index} className='w-full h-full'>
                  <div className="w-full h-full flex flex-col sm:flex-row">
                    <div className='w-full order-2 sm:order-1 px-8 py-8 sm:w-8/12 md:w-4/12 flex flex-col items-start gap-5'>
                      <div className="w-full mr-2 rounded-md h-7 bg-gray-200 animate-pulse"></div>
                      <div className="w-full mr-2 rounded-md h-14 bg-gray-200 animate-pulse"></div>
                      <Link href={'/articles/' + item.attributes?.slug} className='px-4 py-2 rounded-full bg-pink-400 text-white transition-all hover:bg-pink-500 duration-200 mt-auto inline-block'>Узнать подробнее</Link>
                    </div>
                    <div className='w-full order-1 sm:order-2 h-full sm:w-4/12 md:w-8/12'>
                      <div className="w-full h-full bg-gray-200 animate-pulse"></div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperButton containerStyles={'absolute bottom-2 -right-10 border border-zinc-300 -translate-x-[50%] sm:-translate-x-0 sm:right-8 sm:bottom-8 '} />
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Banner
