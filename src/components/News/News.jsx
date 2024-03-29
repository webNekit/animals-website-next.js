import React from 'react'

const News = () => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full">
          <h2 className="section-title">важные новости</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"></div>
        </div>
      </div>
    </section>
  )
}

export default News
