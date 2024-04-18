import React from 'react';
import { VKShareButton, VKIcon } from 'next-share';
import { TelegramShareButton, TelegramIcon } from 'next-share'

const SingleShareSocial = ({ url, image, title }) => {
    return (
        <section className='w-full pb-12'>
            <div className="container mx-auto">
                <div className="flex justify-end items-center gap-2">
                    <span className='text-lg text-zinc-800 font-medium'>Поделиться</span>
                    <ul className='flex items-center gap-2 rounded-full bg-white border border-zinc-300 p-3'>
                        <li className='inline-flex'>
                            <VKShareButton url={url} image={image}>
                                <VKIcon size={32} round />
                            </VKShareButton>
                        </li>
                        <li className='inline-flex'>
                            <TelegramShareButton url={url} title={title}>
                                <TelegramIcon size={32} round />
                            </TelegramShareButton>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default SingleShareSocial
