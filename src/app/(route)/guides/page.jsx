"use client";
import GuideList from '@/components/GuideList/GuideList'
import HeaderPage from '@/components/HeaderPage/HeaderPage'
import useGuides from '@/hooks/Guides/useGuides'
import React from 'react'

export default function guides() {

  const guides = useGuides();

  return (
    <>
        <HeaderPage introTitle={'Справочная информация'} />
        <section className="w-full py-12">
          <div className="container mx-auto">
            <GuideList getData={guides} cols={3} />
          </div>
        </section>
    </>
  )
}
