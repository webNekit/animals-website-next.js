import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className='w-full py-10'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-6">
            <h2 className='section-title'>О нас</h2>
            <p className="text-center text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magni iure ratione, totam odio error ullam cupiditate eum ipsam. Pariatur dolorem nesciunt explicabo perspiciatis itaque!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                <div className="w-full h-[350px] rounded-lg overflow-hidden">
                    <Image src={'/assets/img/about/img-1.jpg'} className='w-full h-full object-cover' alt={'Назвние изображения'} width={200} height={350} />
                </div>
                <div className="w-full h-[350px] rounded-lg overflow-hidden">
                    <Image src={'/assets/img/about/img-1.jpg'} className='w-full h-full object-cover' alt={'Назвние изображения'} width={200} height={350} />
                </div>
                <div className="w-full h-[350px] rounded-lg overflow-hidden">
                    <Image src={'/assets/img/about/img-1.jpg'} className='w-full h-full object-cover' alt={'Назвние изображения'} width={200} height={350} />
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
