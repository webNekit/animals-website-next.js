"use client";
import NavbarMenu from '@/collections/NavbarMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = ({ containerStyle }) => {

    const pathName = usePathname();

    return (
        <>
            <nav className={containerStyle}>
                <menu className="flex items-center justify-between gap-4">
                    {NavbarMenu.map((item, index) => {
                        return (
                            <li key={index} className="inline-flex">
                                <Link href={item.url} className={`${pathName === item.url ? 'text-white' : 'text-zinc-800'} p-2 font-bold transition-colors duration-300 hover:text-zinc-700/50`}>{item.label}</Link>
                            </li>
                        );
                    })}
                </menu>
            </nav>
        </>
    )
}

export default Navbar
