"use client";
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import SingleBanner from '@/components/Single/SingleBanner/SingleBanner';
import SingleText from '@/components/Single/SingleText/SingleText';
import useDetailHelp from '@/hooks/Helps/useDetailHelp';
import React from 'react';

export default function helpById({ params }) {

  const detailHelp = useDetailHelp(params.helpId);

  return (
    <>
      <HeaderPage introTitle={detailHelp.attributes?.name} />
      <SingleText getText={detailHelp.attributes?.smallText} />
      {detailHelp.attributes?.content.map((item, index) => {
        return (
          <div key={index} className='w-full'>
            <SingleBanner getImage={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.image?.data?.attributes?.url ?? '')} getAlt={detailHelp.attributes?.name} />
            <SingleText getText={item.text} />
          </div>
        );
      })}
    </>
  )
}
