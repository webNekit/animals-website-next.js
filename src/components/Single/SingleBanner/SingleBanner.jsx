import React from 'react';
import Image from 'next/image';

const SingleBanner = ({ getImage, getAlt }) => {
  return (
    <section className="w-full py-10">
        <div className="container mx-auto">
            <div className="w-full h-[350px] md:h-[550px]">
                <Image src={getImage} alt={getAlt} width={1200} height={550} className="w-full h-full object-cover object-center rounded-lg" />
            </div>
        </div>
    </section>
  )
}

export default SingleBanner