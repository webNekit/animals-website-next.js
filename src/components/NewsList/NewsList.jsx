import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";

const LoadingLink = ({ href, children }) => {
    const [isLoading, setIsLoading] = useState(false);
  
    const handleClick = () => {
      setIsLoading(true);
      // Вы можете добавить задержку, если хотите, чтобы текст "Загрузка" отображался некоторое время
      // setTimeout(() => {
      //   window.location.href = href;
      // }, 1000); // Пример задержки в 1 секунду
      window.location.href = href; // Здесь вы можете сразу выполнять переход на страницу
    };
  
    return (
      <>
        <Link href={href} onClick={handleClick} style={{ pointerEvents: isLoading ? 'none' : 'auto' }}>
            {isLoading ? 'Загрузка...' : children}
        </Link>
      </>
    );
  };
  

const NewsList = ({ getData }) => {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
                return (
                    <div key={index} className="relative w-full h-[380px] md:h-[470px] rounded-lg overflow-hidden">
                        <div className="absolute right-4 bottom-4 left-4 bg-white rounded-lg p-3">
                            <div className="w-full flex justify-between gap-4">
                                <div className="flex flex-col items-start gap-1">
                                    <h3 className="text-zinc-800 text-left font-medium text-lg">Lorem ipsum dolor sit amet.</h3>
                                    <div className="flex items-center gap-2">
                                        <span className="flex items-center gap-2">
                                            <FaRegCalendar className="opacity-70 text-base" />
                                            12.03.2024
                                        </span>
                                    </div>
                                </div>
                                <Link href={'/articles/' + 'lorem-ipsum-dolor'} className="aspect-square h-[40px] bg-primary hover:bg-primary/60 flex items-center justify-center rounded-full transition-colors">
                                    <FaAngleRight className="text-sm text-zinc-600" />
                                </Link>
                                <LoadingLink href={'/articles/' + 'lorem-ipsum-dolor'}>Подробнее</LoadingLink>
                            </div>
                        </div>
                        <Image src={'/assets/img/news/img-1.jpg'} alt={''} width={300} height={300} className='w-full h-full object-cover object-center' />
                    </div>
                );
            })}
        </div>
    )
}

export default NewsList
