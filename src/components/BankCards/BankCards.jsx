import React from 'react'

const BankCards = ({ getData }) => {
  return (
    <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      <div className="w-full bg-blue-50 rounded-lg p-6 flex flex-col items-center gap-3">
        <span className="text-md">Карта СберБанк</span>
        <h2 className="text-xl font-medium text-zinc-800">4276 4000 8508 4219</h2>
        <h3 className="text-md text-zinc-700 font-medium">Держатель карты: Мочалов Н.А.</h3>
      </div>
      <div className="w-full bg-blue-50 rounded-lg p-6 flex flex-col items-center gap-3">
        <span className="text-md">Карта СберБанк</span>
        <h2 className="text-xl font-medium text-zinc-800">4276 4000 8508 4219</h2>
        <h3 className="text-md text-zinc-700 font-medium">Держатель карты: Мочалов Н.А.</h3>
      </div>
      <div className="w-full bg-blue-50 rounded-lg p-6 flex flex-col items-center gap-3">
        <span className="text-md">Карта СберБанк</span>
        <h2 className="text-xl font-medium text-zinc-800">4276 4000 8508 4219</h2>
        <h3 className="text-md text-zinc-700 font-medium">Держатель карты: Мочалов Н.А.</h3>
      </div>
    </div>
  )
}

export default BankCards
