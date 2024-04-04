import React from 'react'
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import PetsList from '@/components/PetsList/PetsList';


export default function pets() {
  return (
    <>
      <HeaderPage introTitle={'наши питомцы'} />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <PetsList getData={''} />
        </div>
      </section>
    </>
  )
}
