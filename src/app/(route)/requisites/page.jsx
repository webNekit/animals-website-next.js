import HeaderPage from '@/components/HeaderPage/HeaderPage'
import React from 'react'

export default function requisites() {
  return (
    <>
        <HeaderPage introTitle={'Реквизиты'} />
        <section className="w-full py-12">
          <div className="container mx-auto">
            <h2 className="inline-block py-1 text-left text-2xl font-medium border-b-2 border-primary">Перевод на карту</h2>
          </div>
        </section>
    </>
  )
}
