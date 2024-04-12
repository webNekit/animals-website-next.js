import React from 'react'
import GuideList from '../GuideList/GuideList'

const Guide = ({getData, detailData}) => {
  return (
    <section className="w-full py-12">
        <div className="container mx-auto">
            <div className="w-full flex flex-col gap-10">
                <h2 className="section-title">{detailData.attributes?.title}</h2>
                <p className="max-w-3xl text-zinc-700 px-0 sm:px-[2rem] mx-auto text-center text-lg leading-7">{detailData.attributes?.description}</p>
                <GuideList getData={getData} cols={2}/>
            </div>
        </div>
    </section>
  )
}

export default Guide