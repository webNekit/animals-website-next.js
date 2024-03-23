import NavbarMenu from '@/collections/NavbarMenu';
import Link from 'next/link';
import React from 'react';

const Navbar = ({ containerStyle }) => {
    return (
        <>
            <nav className={containerStyle}>
                <menu className="flex items-center justify-between gap-4">
                    {NavbarMenu.map((item, index) => {
                        return (
                            <li key={index} className="inline-flex">
                                <Link href={item.url} className='p-2 text-zinc-700 transition-colors duration-300 hover:text-zinc-700/50'>{item.label}</Link>
                            </li>
                        );
                    })}
                </menu>
            </nav>
        </>
    )
}

export default Navbar
