"use client";
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import SingleBanner from '@/components/Single/SingleBanner/SingleBanner';
import SingleText from '@/components/Single/SingleText/SingleText';
import useSingleGuide from '@/hooks/Guides/useSingleGuide';
import React from 'react';

const page = ({params}) => {

  const guide = useSingleGuide(params.guideId);

  return (
    <>
        <HeaderPage introTitle={guide.attributes?.name} />
        <SingleText getText={guide.attributes?.smallText} />
        {guide.attributes?.content.map((item, index) => {
          return (
            <div key={index} className='w-full'>
              <SingleBanner getImage={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.image?.data?.attributes?.url ?? '')} getAlt={guide.attributes?.name} />
              <SingleText getText={item.text} />
            </div>
          );
        })}
    </>
  )
}

export default page;