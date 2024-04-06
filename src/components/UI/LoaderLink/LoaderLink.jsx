"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Loader from '../Loader/Loader';
import { FaAngleRight } from "react-icons/fa6";

const LoaderLink = ({ href }) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleClick = () => {
        setIsLoading(true);
        window.location.href = href;
    }
    return (
        <Link href={href} onClick={handleClick} className="aspect-square h-[40px] bg-primary hover:bg-primary/60 flex items-center justify-center rounded-full transition-colors">
            {isLoading ? <Loader /> :  <FaAngleRight className="text-sm text-zinc-600" />}
        </Link>
        // '/articles/' + 'lorem-ipsum-dolor'
    )
}

export default LoaderLink
