import Image from 'next/image'
import React from 'react'

const Pets = () => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="section-title">им нужна помощь</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="w-full border border-zinc-300 p-3 rounded-lg">
                    <div className="w-full h-[320px] overflow-hidden rounded-lg">
                        <Image src={'/assets/img/pets/img-1.jpg'} className='w-full h-full object-cover' alt='Изображение собаки' width={130} height={240} />
                    </div>
                    <h3 className="text-left text-zinc-800 text-2xl font-medium mt-5">Вафля</h3>
                    <p className="text-left mt-1">Овчарка, девочка, 2 года</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Pets
