"use client";
import HeaderPage from '@/components/HeaderPage/HeaderPage'
import NewsList from '@/components/NewsList/NewsList'
import useNews from '@/hooks/News/useNews'
import React from 'react'

export default function articles() {
  const { postData, setPageSize, isLoading } = useNews();
  const loadMorePost = () => {
    setPageSize(( prevPageSize ) => prevPageSize + 1);
  }
  return (
    <>
        <HeaderPage introTitle={'Объявления и новости'} />
        <section className="w-full py-12">
          <div className="container mx-auto">
            <NewsList getData={postData} />
            <div className='w-full flex justify-center pt-6'>
              <button onClick={loadMorePost} className='px-4 py-2 bg-primary rounded-lg text-zinc-900 font-medium transition-colors hover:bg-primary/80 hover:text-zinc-600'>{isLoading ? "загрузка" : "Загрузить еще"}</button>
            </div>
          </div>
        </section>
    </>
  )
}
