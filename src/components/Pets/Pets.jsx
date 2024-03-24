import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa6";

const Pets = () => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
            <h2 className="section-title">им нужна помощь</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="w-full border border-zinc-300 p-3 rounded-lg">
                    <div className="w-full h-[320px] overflow-hidden rounded-lg group relative">
                        <Image src={'/assets/img/pets/img-1.jpg'} className='group-hover:opacity-0 absolute z-20 top-0 right-0 bottom-0 left-0 w-full h-full object-cover transition-all' alt='Изображение собаки' width={130} height={240} />
                        <Image src={'/assets/img/pets/img-2.jpg'} className='absolute z-10 top-0 right-0 bottom-0 left-0 w-full h-full object-cover' alt='Изображение собаки' width={130} height={240} />
                    </div>
                    <h3 className="text-left text-zinc-800 text-2xl font-medium mt-5">Вафля</h3>
                    <p className="text-left mt-1">Овчарка, девочка, 2 года</p>
                    <Link href={'/'} className='flex items-center gap-2 text-lg text-pink-500 font-medium mt-5 hover:ml-2 transition-all'>Узнать подробнее <FaChevronRight className='text-sm'/></Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Pets
