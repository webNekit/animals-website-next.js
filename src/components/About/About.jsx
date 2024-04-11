import Image from 'next/image'
import React from 'react'

const About = ({ sectionData }) => {
  return (
    <section className='w-full py-12'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10">
          <h2 className='section-title'>{sectionData.attributes?.title}</h2>
          <p className="text-center text-xl max-w-xl mx-auto">{sectionData.attributes?.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {sectionData?.attributes?.images?.images?.data.length > 0 ? sectionData?.attributes?.images?.images?.data.map((item, index) => {
              return (
                <div key={index} className="w-full h-[350px] rounded-lg overflow-hidden">
                  <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (item?.attributes?.url ?? '')} className='w-full h-full object-cover' alt={'Назвние изображения'} width={200} height={350} />
                </div>
              );
            }) : ""}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
