import HeaderPage from '@/components/HeaderPage/HeaderPage'
import Link from 'next/link'
import React from 'react'

export default function contacts() {
  return (
    <>
        <HeaderPage introTitle={'Контакты'} />
        <section className="w-full py-12 bg-gray-50">
            <div className="container mx-auto">
                <div className="w-full">
                    <ul className="flex flex-col gap-2">
                        <li className="inline-flex gap-2 text-lg">
                            <span className="text-zinc-600">Моб.телефон:</span>
                            <Link href="/" className="text-zinc-800">89692881531</Link>
                        </li>
                        <li className="inline-flex gap-2 text-lg">
                            <span className="text-zinc-600">Адрес эл.почты:</span>
                            <Link href="/" className="text-zinc-800">nayskom@gmail.com</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}
