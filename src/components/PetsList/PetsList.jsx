import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PetsList = ({ getData }) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <div className="w-full bg-white border p-3 rounded-lg">
                <div className="w-full h-[320px] overflow-hidden rounded-lg group relative">
                    <Image src={'/assets/img/pets/img-1.jpg'} className='group-hover:opacity-0 absolute z-20 top-0 right-0 bottom-0 left-0 w-full h-full object-cover transition-all duration-500' alt='Изображение собаки' width={130} height={240} />
                    <Image src={'/assets/img/pets/img-2.jpg'} className='absolute z-10 top-0 right-0 bottom-0 left-0 w-full h-full object-cover' alt='Изображение собаки' width={130} height={240} />
                </div>
                <h3 className="text-left text-zinc-800 text-2xl font-medium mt-5">Вафля</h3>
                <p className="text-left mt-1">Овчарка, девочка, 2 года</p>
                <Link href={'/'} className='inline-block text-lg text-zinc-800 font-medium border-b-2 mt-5 border-orange-300 hover:text-zinc-600 transition-colors'>Подробнее</Link>
            </div>
        </div>
    )
}

export default PetsList
