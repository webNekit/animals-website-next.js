"use client";
import Image from 'next/image';
import React, { useEffect } from 'react';

const SingleGallery = ({ getImage }) => {
    return (
        <section className='w-full py-12'>
            <div className="container mx-auto">
                <div className="w-full grid grid-cols-2 gap-5">
                    {getImage?.attributes?.otherImage?.data.map((item, index) => {
                        return (
                            <div key={index} className="w-full h-[240px] md:h-[470px] rounded-lg overflow-hidden">
                                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.attributes?.url ?? '')} alt={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.url && '')} width={800} height={500} className="w-full h-full object-cover object-center" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default SingleGallery
