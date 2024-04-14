"use client";

import React from 'react';
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import SingleText from '@/components/Single/SingleText/SingleText';
import useAbout from '@/hooks/SectionsHook/useAbout';
import Image from 'next/image';

export default function about() {

  const aboutDetail = useAbout();

  return (
    <>
      <HeaderPage introTitle={aboutDetail.attributes?.title} />
      <section className="w-full py-12">
        <div className="container mx-auto">
          <div className="w-full">
            <SingleText getText={aboutDetail.attributes?.description} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {aboutDetail?.attributes?.images?.images?.data.length > 0 ? aboutDetail?.attributes?.images?.images?.data.map((item, index) => {
                return (
                  <div key={index} className="w-full h-[350px] rounded-lg overflow-hidden">
                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.url ?? '')} className='w-full h-full object-cover' alt={'Назвние изображения'} width={200} height={350} />
                  </div>
                );
              }) : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
