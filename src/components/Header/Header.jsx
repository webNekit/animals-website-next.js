"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaBars } from "react-icons/fa6";
import Navbar from '../Navbar/Navbar';
import Image from 'next/image';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import useSettings from '@/hooks/SectionsHook/useSettings';

const Header = () => {


  const setting = useSettings();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className='w-full bg-primary'>
      <div className="container mx-auto h-full flex items-center flex-col">
        <div className="w-full flex flex-col gap-4 sm:flex-row items-center justify-between py-4 border-b border-black/10">
          <ul className="flex items-center gap-4 order-3 sm:order-1">
            <li className='inline-flex'>
              <Link className='font-medium text-xl flex items-center gap-2 transition-all hover:opacity-80' href={"tel:" + setting.attributes?.contacts[0].contactValue}>
                <span className='text-base'>
                  <FaPhone />
                </span>
                {setting.attributes?.contacts[0].contactValue}
              </Link>
            </li>
          </ul>
          <div className='inline-flex order-1 sm:order-2'>
            <Link href="/" className=''>
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (setting.attributes?.siteLogo?.data.attributes?.url ?? '')} alt="Логотип сайта" width={200} height={60} />
            </Link>
          </div>
          <div className='inline-flex order-2 sm:order-3'>
            <Link href={'/'} className='px-4 py-2 rounded-full bg-pink-400 text-white transition-all hover:bg-pink-500 duration-200'>Помочь прямо сейчас</Link>
          </div>
        </div>
        <div className="w-full flex items-center flex-col py-4 sm:py-0 sm:flex-row">
          <button onClick={() => setOpenMenu(!openMenu)} className='ml-auto w-[40px] h-[40px] font-xl text-white bg-neutral-500 rounded-md flex items-center justify-center sm:hidden'><FaBars /></button>
          {/* Mobile menu */}
          <MobileNavbar containerStyles={`${openMenu ? 'max-h-max' : 'max-h-0 overflow-hidden transition-all'} w-full duration-300 block sm:hidden`} />
          {/* Desktop menu */}
          <Navbar containerStyle={'w-full py-2 hidden sm:block'} />
        </div>
      </div>
    </header>
  )
}

export default Header
