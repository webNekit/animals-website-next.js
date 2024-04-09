"use client";
import React, { useState } from 'react'
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import PetsList from '@/components/PetsList/PetsList';
import usePets from '@/hooks/Pets/usePets';
import usePetsStatus from '@/hooks/PetsStatus/usePetsStatus';


export default function pets() {
  // Вызов хуков
  const petsStatus = usePetsStatus();
  // два состояния для фильтрации по категориям
  const [statusName, setStatusName] = useState(null);
  const petsData = usePets(statusName);
  // функция клика, с параметром status
  const handleStatusClick = (status) => {
    setStatusName(status);
    console.log(status);
  };
  // функция для клика по кнопке "все категории"
  const handleShowAllStatus = () => {
    setStatusName(null);
  };

  return (
    <>
      <HeaderPage introTitle={'наши питомцы'} />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <ul className="flex items-center gap-4 pb-10">
            <li className="inline-flex">
              <button onClick={handleShowAllStatus} className='bg-primary border-2 border-primary font-medium text-white px-4 py-2 rounded-full cursor-pointer transition-all hover:bg-primary/80'>Все категории</button>
            </li>
            {petsStatus ? petsStatus.map((item, index) => {
              return (
                <li key={index} className="inline-flex">
                  <button onClick={() => handleStatusClick(item.id)} className='border-2 border-primary text-zinc-800 font-medium px-4 py-2 rounded-full cursor-pointer transition-all hover:bg-primary/80'>{item.attributes?.name}</button>
                </li>
              );
            }) : [1,2,3,4].map((item, index) => {
              return (
                <>
                  <div className='w-[115px] h-[43.2px] rounded-full bg-gray-200 animate-pulse'></div>
                </>
              );
            })}
          </ul>
          <PetsList getData={petsData} />
        </div>
      </section>
    </>
  )
}
