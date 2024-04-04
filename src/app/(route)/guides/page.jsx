import GuideList from '@/components/GuideList/GuideList'
import HeaderPage from '@/components/HeaderPage/HeaderPage'
import React from 'react'

export default function guides() {
  return (
    <>
        <HeaderPage introTitle={'Справочная информация'} />
        <section className="w-full py-12">
          <div className="container mx-auto">
            <GuideList getData={''} cols={3} />
          </div>
        </section>
    </>
  )
}
