import React from 'react'

const SingleText = ({ getText }) => {
  return (
    <section className="w-full py-10">
        <div className="max-w-3xl px-[2rem] mx-auto">
            <div className="w-full">
                <p className="text-lg text-zinc-700">
                    {getText}
                </p>
            </div>
        </div>
    </section>
  )
}

export default SingleText