import React from 'react';
import Link from 'next/link';

const Requisites = () => {
  return (
    <section className="w-full py-12 bg-[url(/assets/img/requisites/bg.avif)] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto">
            <div className="w-full flex flex-col items-center gap-7">
                <h2 className="section-title">Помочь материально</h2>
                <p className="max-w-3xl text-zinc-700 px-0 sm:px-[2rem] mx-auto text-center text-lg leading-7">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum sapiente illum dignissimos adipisci placeat perspiciatis, labore est necessitatibus debitis animi eligendi ad, ullam error molestias praesentium sint sed hic nisi temporibus ea odit, maxime earum. Minus eveniet quaerat saepe dolorum tempore deserunt, fuga nulla est quis cupiditate illo iure accusantium?
                </p>
                <Link href={'/requisites'} className='px-4 py-2 rounded-full bg-pink-400 text-white transition-all hover:bg-pink-500 duration-200 mt-auto inline-block'>Все реквизиты</Link>
            </div>
        </div>
    </section>
  )
}

export default Requisites