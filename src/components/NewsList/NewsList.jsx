import React from 'react';
import Image from 'next/image';
import { FaRegCalendar } from "react-icons/fa6";
import LoaderLink from '../UI/LoaderLink/LoaderLink';

const NewsList = ({ getData }) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                    <div key={index} className="relative w-full h-[380px] md:h-[470px] rounded-lg overflow-hidden">
                        <div className="absolute right-4 bottom-4 left-4 bg-white rounded-lg p-3">
                            <div className="w-full flex justify-between gap-4">
                                <div className="flex flex-col items-start gap-1">
                                    <h3 className="text-zinc-800 text-left font-medium text-lg">Lorem ipsum dolor sit amet.</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center gap-2">
                                            <FaRegCalendar className="opacity-70 text-base" />
                                            12.03.2024
                                        </span>
                                    </div>
                                </div>
                                <LoaderLink href={'/articles/' + 'lorem-ipsum-dolor'} />
                            </div>
                        </div>
                        <Image src={'/assets/img/news/img-1.jpg'} alt={''} width={300} height={300} className='w-full h-full object-cover object-center' />
                    </div>
                );
            })}
        </div>
    )
}

export default NewsList
