"use"
import Link from 'next/link';
import React from 'react';

const GuideList = ({ getData, cols = 3, gap = 7 }) => {
  return (
    <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-${gap}`}>
      {getData.length > 0 ? getData.map((item, index) => {
        return (
          <div key={index} className="w-full h-full p-5 rounded-lg bg-white border relative">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[45px] h-[45px] rounded-full bg-primary text-4xl font-bold text-white flex items-center justify-center">?</div>
            <h3 className="text-2xl font-medium text-zinc-900">{item.attributes?.name}</h3>
            <p className="text-zinc-700 mt-3">{item.attributes?.smallText.length > 145 ? item.attributes?.smallText.slice(0, 145) + "..." : item.attributes?.smallText}</p>
            <Link href={'/guides/' + item.attributes?.slug} className='inline-block text-lg text-zinc-800 font-medium border-b-2 mt-5 border-orange-300 hover:text-zinc-600 transition-colors'>Подробнее</Link>
          </div>
        );
      }) : [1,2,3].map((item, index) => {
        return(
          <div key={index} className="w-full h-[232px] p-5 rounded-lg bg-gray-100 animate-pulse">
            <div className="w-full h-5 rounded-lg bg-gray-200 animate-pulse"></div>
            <div className="w-full h-[70%] mt-5 rounded-lg bg-gray-200 animate-pulse"></div>
          </div>
        );
      })}
    </div>
  )
}

export default GuideList;