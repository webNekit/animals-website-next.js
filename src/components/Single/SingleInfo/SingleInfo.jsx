import React from 'react'

const SingleInfo = ({getData}) => {
  return (
    <section className='w-full pt-6'>
      <div className='max-w-3xl px-[2rem] mx-auto'>
        <div className="w-full">
            <p className="text-left text-md">{getData}</p>
        </div>
      </div>
    </section>
  )
}

export default SingleInfo
