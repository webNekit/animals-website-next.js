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
              <button onClick={handleShowAllStatus} className='bg-primary text-white px-4 py-2 rounded-full cursor-pointer transition-all hover:bg-primary/80'>Все категории</button>
            </li>
            {petsStatus.map((item, index) => {
              return (
                <li key={index} className="inline-flex">
                  <button onClick={() => handleStatusClick(item.id)} className='bg-primary text-white px-4 py-2 rounded-full cursor-pointer transition-all hover:bg-primary/80'>{item.attributes?.name}</button>
                </li>
              );
            })}
          </ul>
          <PetsList getData={petsData} />
        </div>
      </section>
    </>
  )
}
