"use client";
import React from 'react'
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import PetsList from '@/components/PetsList/PetsList';
import usePets from '@/hooks/Pets/usePets';


export default function pets() {
  const petsData = usePets();
  return (
    <>
      <HeaderPage introTitle={'наши питомцы'} />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <PetsList getData={petsData} />
        </div>
      </section>
    </>
  )
}
