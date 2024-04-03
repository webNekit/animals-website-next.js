import HeaderPage from '@/components/HeaderPage/HeaderPage';
import SingleBanner from '@/components/Single/SingleBanner/SingleBanner';
import SingleText from '@/components/Single/SingleText/SingleText';
import React from 'react';

export default function page() {
  return (
    <>
      <HeaderPage introTitle={'Как нам помочь?'} />
      <div className="w-full py-10">
        <SingleText getText={'привет вчем!!!!'} />
        <SingleBanner getImage={'/assets/img/about/img-1.jpg'} alt={'Изображение для баннера'} />
        <SingleText getText={'привет вчем!!!!'} />
      </div>
    </>
  )
}
