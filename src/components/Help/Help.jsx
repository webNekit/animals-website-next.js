import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const Help = ({ getData, detailData }) => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
          <h2 className="section-title">{detailData.attributes?.title}</h2>
          <p className="text-center text-xl max-w-xl mx-auto">{detailData.attributes?.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {getData.map((item, index) => {
              return (
                <div key={index} className="w-full rounded-lg bg-gray-50 p-5 flex flex-col items-start gap-4 help-card">
                  <h3 className="text-2xl font-semibold text-zinc-800">{item.attributes?.name}</h3>
                  <p>{item.attributes?.smallText.length > 137 ? item.attributes?.smallText.slice(0, 137) + '...' : item.attributes?.smallText}</p>
                  <Link href={'/help/' + item.attributes?.slug} className='text-lg text-zinc-800 font-medium border-b-2 border-orange-300 hover:text-zinc-600 transition-colors'>Подробнее</Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Help
