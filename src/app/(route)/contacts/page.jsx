"use client";
import HeaderPage from '@/components/HeaderPage/HeaderPage'
import useSettings from '@/hooks/SectionsHook/useSettings';
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

export default function contacts() {

    const setting = useSettings();

    return (
        <>
            <HeaderPage introTitle={'Контакты'} />
            <section className="w-full py-12">
                <div className="container mx-auto">
                    <div className="w-full flex flex-col gap-7">
                        <div className="w-full">
                            <h2 className="inline-flex py-1 text-left text-2xl font-medium border-b-2 border-primary">Контактные данные</h2>
                            <ul className="flex flex-col gap-2 pt-5">
                                {setting.attributes?.contacts.map((item, index) => {
                                    return (
                                        <li key={index} className="inline-flex gap-2 text-lg">
                                            <span className="text-zinc-600">{item.type == 'Номер телефона' ? 'Номер телефона' : 'Email адрес'}:</span>
                                            <Link href={item.type == 'Номер телефона' ? 'tel:' + item.contactValue : 'mailto:' + item.contactValue} className="text-zinc-800">{item.contactValue}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="w-full">
                            <h2 className="inline-flex py-1 text-left text-2xl font-medium border-b-2 border-primary">Социальные сети</h2>
                            <ul className="flex flex-wrap gap-3 pt-2">
                                {setting.attributes?.socials.map((item, index) => {
                                    return (
                                        <li key={index} className='inline-flex'>
                                            <Link href={item.socialLink} target='_blank'>
                                                <Image className='aspect-auto h-[35px] w-auto object-cover' src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item.socialLogo?.data.attributes?.url ?? '')} alt='Логотип Вконтатке' width={50} height={35} />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
