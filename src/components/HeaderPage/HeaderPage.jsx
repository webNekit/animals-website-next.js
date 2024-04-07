import React from 'react'

const HeaderPage = ({ introTitle }) => {
  return (
    <section className='w-full py-12 md:py-20 bg-[url(/assets/img/pages/intro-bg.svg)] bg-no-repeat bg-cover bg-left'>
      <div className="container mx-auto flex justify-start">
        <h2 className="section-title text-left">{introTitle}</h2>
      </div>
    </section>
  )
}

export default HeaderPage
