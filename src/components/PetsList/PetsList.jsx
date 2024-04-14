import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PetsList = ({ getData }) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {getData.length > 0 ? getData.map((item, index) => {
                return (
                    <div key={index} className="w-full bg-white border p-3 rounded-lg">
                        <div className="w-full h-[320px] overflow-hidden rounded-lg group relative">
                            <span className="absolute top-2 left-2 px-2 py-1 bg-primary rounded-full z-30 text-sm text-white cursor-default">{item.attributes?.status_id?.data.attributes?.name}</span>
                            <Image priority src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.image?.data.attributes?.url ?? '')} className='group-hover:opacity-0 absolute z-20 top-0 right-0 bottom-0 left-0 w-full h-full object-cover object-center transition-all duration-500' alt='Изображение собаки' width={130} height={240} />
                            <Image priority src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.otherImage?.data[0].attributes?.url ?? '')} className='absolute z-10 top-0 right-0 bottom-0 left-0 w-full h-full object-cover' alt='Изображение собаки' width={130} height={240} />
                        </div>
                        <h3 className="text-left text-zinc-800 text-2xl font-medium mt-5">{item.attributes?.name}</h3>
                        <p className="text-left mt-1">{item.attributes?.breed}, {item.attributes?.gender}, {item.attributes?.age} год(а)</p>
                        <Link href={'/pets/' + item.id} className='inline-block text-lg text-zinc-800 font-medium border-b-2 mt-5 border-orange-300 hover:text-zinc-600 transition-colors'>Подробнее</Link>
                    </div>
                );
            }) : [1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                    <>
                        <div key={index} className="w-full bg-white border p-3 rounded-lg">
                            <div className="w-full h-[320px] bg-gray-200 animate-pulse rounded-lg"></div>
                            <div className="w-full h-5 rounded-lg bg-gray-200 animate-pulse mt-5"></div>
                            <div className="w-full h-5 rounded-lg bg-gray-200 animate-pulse mt-1"></div>
                            <div className="w-[70%] h-5 rounded-lg bg-gray-200 animate-pulse mt-5"></div>
                        </div>
                    </>
                );
            })}

        </div>
    )
}

export default PetsList
