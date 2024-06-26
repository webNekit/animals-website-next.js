import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NewsList from '../NewsList/NewsList';

const News = ({ getData }) => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center gap-10">
          <h2 className="section-title text-center">важные новости</h2>
          <NewsList getData={getData} />
        </div>
      </div>
    </section>
  )
}

export default News
