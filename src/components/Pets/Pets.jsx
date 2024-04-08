import React from 'react';
import PetsList from '../PetsList/PetsList';


const Pets = ({getData}) => {
  return (
    <section className='w-full py-12 bg-gray-50'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="section-title">им нужна помощь</h2>
            <PetsList getData={getData} />
        </div>
      </div>
    </section>
  )
}

export default Pets
