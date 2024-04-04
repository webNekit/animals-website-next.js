import Link from 'next/link';
import React from 'react';

const GuideList = ({ getData, cols = 3, gap = 5 }) => {
  return (
    <div className={`w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${cols} gap-${gap}`}>
      {[1, 3, 4, 5].map((item, index) => {
        return (
          <div key={index} className="w-full h-full p-5 rounded-lg bg-white border relative">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[45px] h-[45px] rounded-full bg-primary text-4xl font-bold text-white flex items-center justify-center">?</div>
            <h3 className="text-2xl font-medium text-zinc-900">Список лучших ветклиник</h3>
            <p className="text-zinc-700 mt-3">Изучите список лучших клиник и их местоположение, чтобы быстро предоставить помощь пострадавшим</p>
            <Link href={'/pets/'} className='inline-block text-lg text-zinc-800 font-medium border-b-2 mt-5 border-orange-300 hover:text-zinc-600 transition-colors'>Подробнее</Link>
          </div>
        );
      })}
    </div>
  )
}

export default GuideList