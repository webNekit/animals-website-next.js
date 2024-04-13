"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavbarMenu from '@/collections/NavbarMenu';
import useSettings from '@/hooks/SectionsHook/useSettings';

const Footer = () => {

  const setting = useSettings();

  return (
    <footer className='w-full py-12 bg-primary'>
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 md:grid-cols-4">
          <div className="w-full flex justify-center md:justify-start">
            <Link href={'/'} className='inline-block'>
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (setting.attributes?.siteLogo?.data.attributes?.url ?? '')} alt={'Логотип сайта дай лапу'} width={200} height={60} />
            </Link>
          </div>
          <div className="w-full">
            <nav className="w-full">
              <menu className="w-full inline-table">
                {NavbarMenu.map((item, index) => {
                  return (
                    <li key={index} className='inline-flex'>
                      <Link href={item.url} className='p-1 text-zinc-800 font-medium transition-colors duration-300 hover:text-zinc-700/50'>{item.label}</Link>
                    </li>
                  )
                })}
              </menu>
            </nav>
          </div>
          <div className="w-full">
            <h2 className="text-left text-lg">Мы в социальных сетях</h2>
            <ul className="flex flex-wrap gap-3 pt-2">
              <li className='inline-flex'>
                <Link href={'https://vk.com/brand'} target='_blank'>
                  <Image className='aspect-auto h-[35px] object-cover' src={'/assets/img/icons/VK.svg'} alt='Логотип Вконтатке' width={35} height={35} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full">
            <h2 className="text-left text-lg">Наши контакты</h2>
            <ul className="pt-2 flex flex-col gap-1">
              {setting.attributes?.contacts?.map((item, index) => {
                return (
                  <li key={index} className="inline-flex gap-1">
                    <span className='opacity-80'>{item.type == 'Номер телефона' ? 'Номер телефона' : 'Email адрес' }:</span>
                    <Link className='text-zinc-500 font-medium transition-colors duration-300 hover:text-zinc-500/50' href={item.type == 'Номер телефона' ? 'tel:' + item.contactValue : 'mailto:' + item.contactValue}>{item.contactValue}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
