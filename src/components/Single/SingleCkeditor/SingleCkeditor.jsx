import React from 'react'

const SingleCkeditor = ({ getText }) => {
    return (
        <section className="w-full py-12">
            <div className="max-w-3xl px-[2rem] mx-auto">
                <div className="w-full">
                    <div className="text-lg text-zinc-700" dangerouslySetInnerHTML={{ __html: getText }}></div>
                </div>
            </div>
        </section>
    )
}

export default SingleCkeditor
