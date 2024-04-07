"use client";
import HeaderPage from '@/components/HeaderPage/HeaderPage'
import NewsList from '@/components/NewsList/NewsList'
import useNews from '@/hooks/News/useNews'
import React from 'react'

export default function articles() {
  const postData = useNews();
  return (
    <>
        <HeaderPage introTitle={'Объявления и новости'} />
        <section className="w-full py-12">
          <div className="container mx-auto">
            <NewsList getData={postData} />
          </div>
        </section>
    </>
  )
}
