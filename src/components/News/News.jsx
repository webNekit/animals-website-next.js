import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleRight } from "react-icons/fa6";
import { FaCalendarDays } from "react-icons/fa6";
import NewsList from '../NewsList/NewsList';

const News = ({ newsData }) => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center gap-10">
          <h2 className="section-title text-center">важные новости</h2>
          <NewsList  getData={''} />
        </div>
      </div>
    </section>
  )
}

export default News
