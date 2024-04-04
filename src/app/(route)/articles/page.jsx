import HeaderPage from '@/components/HeaderPage/HeaderPage'
import NewsList from '@/components/NewsList/NewsList'
import React from 'react'

export default function articles() {
  return (
    <>
        <HeaderPage introTitle={'Объявления и новости'} />
        <section className="w-full py-12">
          <div className="container mx-auto">
            <NewsList getData={''} />
          </div>
        </section>
    </>
  )
}
