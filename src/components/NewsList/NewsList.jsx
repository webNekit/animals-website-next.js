import React from 'react';
import Image from 'next/image';
import { FaRegCalendar } from "react-icons/fa6";
import LoaderLink from '../UI/LoaderLink/LoaderLink';

const NewsList = ({ getData }) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {getData.length > 0 ? getData.map((item, index) => {
                return (
                    <div key={index} className="relative w-full h-[380px] md:h-[470px] rounded-lg overflow-hidden">
                        <span className="absolute top-4 left-4 text-ms text-white px-3 py-1 rounded-full bg-pink-500">{item.attributes?.categoryId?.data.attributes?.categoryName}</span>
                        <div className="absolute right-4 bottom-4 left-4 bg-white rounded-lg p-3">
                            <div className="w-full flex justify-between gap-4">
                                <div className="flex flex-col items-start gap-1">
                                    <h3 className="text-zinc-800 text-left font-medium text-lg">{item.attributes?.postName.length > 45 ? item.attributes?.postName.slice(0, 45) + "..." : item.attributes?.postName }</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center gap-2">
                                            <FaRegCalendar className="opacity-70 text-base" />
                                            {item.attributes?.createdAt.slice(0, 10)}
                                        </span>
                                    </div>
                                </div>
                                <LoaderLink href={'/articles/' + item.attributes?.slug} />
                            </div>
                        </div>
                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.postImage?.data.attributes?.url) ?? ''} alt={''} width={300} height={300} className='w-full h-full object-cover object-center' />
                    </div>
                );
            }) : [1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                    <div key={index} className="relative w-full h-[380px] md:h-[470px] rounded-lg overflow-hidden">
                        <span className="absolute top-4 left-4 bg-gray-400 w-48 h-6 rounded-md animate-pulse"></span>
                        <div className="absolute right-4 bottom-4 left-4 bg-gray-300 rounded-lg p-3 animate-pulse">
                            <div className="w-full flex justify-between gap-4">
                                <div className="flex flex-col gap-1">
                                    <div className="bg-gray-400 w-full h-6 rounded-md animate-pulse"></div>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-gray-400 w-48 h-6 rounded-md animate-pulse"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full h-full object-cover object-center bg-gray-200 animate-pulse'></div>
                    </div>
                );
            })}
        </div>
    )
}

export default NewsList
