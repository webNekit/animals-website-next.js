import React from 'react'
import NewsList from '../NewsList/NewsList'

const Reccomendation = ({ getData }) => {
  return (
    <section className='w-full py-12'>
        <div className="container mx-auto">
            <h2 className="section-title">Читайте также</h2>
            <NewsList getData={getData} />
        </div>
    </section>
  )
}

export default Reccomendation
