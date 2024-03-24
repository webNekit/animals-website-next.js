import React from 'react';
import NavbarMenu from '@/collections/NavbarMenu';
import Link from 'next/link';

const MobileNavbar = ({ containerStyles }) => {
  return (
    <nav className={containerStyles}>
      <menu className='flex flex-col gap-2 pt-2 w-full'>
        {NavbarMenu.map((item, index) => {
            return (
                <li key={index} className='inline-flex w-full '>
                    <Link href={item.url} className='w-full text-xl font-medium'>{item.label}</Link>
                </li>
            )
        })}
      </menu>
    </nav>
  )
}

export default MobileNavbar
