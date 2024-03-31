import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavbarMenu from '@/collections/NavbarMenu';

const Footer = () => {
  return (
    <footer className='w-full py-12 bg-primary'>
      <div className="container mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 md:grid-cols-4">
          <div className="w-full flex justify-center md:justify-start">
            <Link href={'/'} className='inline-block'>
              <Image src={'/assets/img/logo.png'} alt={'Логотип сайта дай лапу'} width={200} height={60} />
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
              <li className="inline-flex">
                <span className='opacity-80'>Эл.почта:</span> <Link className='text-zinc-500 font-medium transition-colors duration-300 hover:text-zinc-500/50' href={'mailto:nayskom@gmail.com'}>nayskom@gmail.com</Link>
              </li>
              <li className="inline-flex">
                <span className='opacity-80'>Моб.телефон:</span> <Link className='text-zinc-500 font-medium transition-colors duration-300 hover:text-zinc-500/50' href={'mailto:nayskom@gmail.com'}>89692881531</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
