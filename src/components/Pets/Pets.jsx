import React from 'react';
import PetsList from '../PetsList/PetsList';


const Pets = ({ getData, detailHelp }) => {
  return (
    <section className='w-full py-12 bg-gray-50'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
          <h2 className="section-title">{detailHelp.attributes?.title}</h2>
          <p className="text-center text-xl max-w-xl mx-auto">
            {detailHelp.attributes?.description}
          </p>
          <PetsList getData={getData} />
        </div>
      </div>
    </section>
  )
}

export default Pets
