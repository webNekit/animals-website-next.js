import React from 'react';
import HeaderPage from '@/components/HeaderPage/HeaderPage';
import Link from 'next/link';
import { FaFileLines } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";

export default function reports() {
  return (
    <>
      <HeaderPage introTitle={'Отчеты'} />
      <section className="w-full py-12">
        <div className="container mx-auto">
            <div className="w-full grid grid-grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                <div className="w-full rounded-lg bg-blue-50 p-5">
                    <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center bg-white border">
                        <FaFileLines className='text-2xl text-zinc-800' />
                    </div>
                    <h2 className="text-left text-lg font-medium mt-3">Отчет за декабрь 2023 год</h2>
                    <Link href={''} download className='mt-5 inline-flex items-center gap-4 h-10 pl-4 border bg-white rounded-full group'>
                        <span className='text-zinc-600 group-hover:text-zinc-600/80'>Скачать</span>
                        <span className='aspect-square h-full bg-primary rounded-full flex items-center justify-center group-hover:bg-primary/80 transition-all'><FaDownload className='text-zinc-600' /></span>
                    </Link>
                </div>
                <div className="w-full rounded-lg bg-blue-50 p-5">
                    <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center bg-white border">
                        <FaFileLines className='text-2xl text-zinc-800' />
                    </div>
                    <h2 className="text-left text-lg font-medium mt-3">Отчет за декабрь 2023 год</h2>
                    <Link href={''} download className='mt-5 inline-flex items-center gap-4 h-10 pl-4 border bg-white rounded-full group'>
                        <span className='text-zinc-600 group-hover:text-zinc-600/80'>Скачать</span>
                        <span className='aspect-square h-full bg-primary rounded-full flex items-center justify-center group-hover:bg-primary/80 transition-all'><FaDownload className='text-zinc-600' /></span>
                    </Link>
                </div>
                <div className="w-full rounded-lg bg-blue-50 p-5">
                    <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center bg-white border">
                        <FaFileLines className='text-2xl text-zinc-800' />
                    </div>
                    <h2 className="text-left text-lg font-medium mt-3">Отчет за декабрь 2023 год</h2>
                    <Link href={''} download className='mt-5 inline-flex items-center gap-4 h-10 pl-4 border bg-white rounded-full group'>
                        <span className='text-zinc-600 group-hover:text-zinc-600/80'>Скачать</span>
                        <span className='aspect-square h-full bg-primary rounded-full flex items-center justify-center group-hover:bg-primary/80 transition-all'><FaDownload className='text-zinc-600' /></span>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
