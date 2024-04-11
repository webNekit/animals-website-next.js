import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from "react-icons/fa6";

const Help = ({ getData, helpData }) => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
          <h2 className="section-title">Как вы можете помочь?</h2>
          <p className="text-center text-xl max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni iure ratione, totam odio error ullam cupiditate eum ipsam. Pariatur dolorem nesciunt explicabo perspiciatis itaque!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[1, 2, 3, 4, 5, 6].map((item) => {
              return (
                <div className="w-full rounded-lg bg-gray-50 p-5 flex flex-col items-start gap-4 help-card">
                  <h3 className="text-2xl font-semibold text-zinc-800">Приютить животное</h3>
                  <p>Вы можете оказать помощь приюту, перечислив пожертвование на любую сумму напрямую по реквизитам фонда.</p>
                  <Link href={'/help/1'} className='text-lg text-zinc-800 font-medium border-b-2 border-orange-300 hover:text-zinc-600 transition-colors'>Подробнее</Link>
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
