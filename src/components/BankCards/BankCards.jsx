"use client";
import React from 'react';

const BankCards = ({ getData }) => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {getData.length > 0 ? getData.map((item, index) => {
        return (
          <div key={index} className="w-full bg-gray-50 rounded-lg p-6 flex flex-col items-center gap-3 border">
            <span className="text-md">{item.attributes?.name}</span>
            <h2 className="text-xl font-medium text-zinc-800">{item.attributes?.code}</h2>
            <h3 className="text-md text-zinc-700 font-medium">Держатель карты: {item.attributes?.directors}</h3>
          </div>
        );
      }) : [1,2,3].map((item, index) => {
        return (
          <div key={index} className="w-full h-[150px] bg-gray-100 rounded-lg animate-pulse"></div>
        );
      })}
    </div>
  )
}

export default BankCards
