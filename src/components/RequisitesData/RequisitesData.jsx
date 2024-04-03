import React from 'react'

const RequisitesData = ({ getData }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full bg-gray-50 border rounded-lg p-5 md:p-7">
            <h3 className="text-left text-xl font-medium text-zinc-800">Счет №1</h3>
            <p className="text-left mt-5">Рублёвый расчётный счёт БФ «Лохматая Душа» в ПАО «Сбербанк» В филиале Сбербанка или в онлайн-кабинете, уточнив цель перевода — «Благотворительный взнос».</p>
            <ul className="flex flex-col gap-2 mt-8">
                <li className="inline-flex gap-1">
                    <span className="text-zinc-600 font-medium">ИНН:</span>
                    <span className="text-base">5048046620</span>
                </li>
                <li className="inline-flex gap-1">
                    <span className="text-zinc-600 font-medium">КПП:</span>
                    <span className="text-base">5048046620</span>
                </li>
                <li className="inline-flex gap-1">
                    <span className="text-zinc-600 font-medium">Расчетный счет:</span>
                    <span className="text-base">5048046620</span>
                </li>
                <li className="inline-flex gap-1">
                    <span className="text-zinc-600 font-medium">БИК:</span>
                    <span className="text-base">5048046620</span>
                </li>
                <li className="inline-flex gap-1">
                    <span className="text-zinc-600 font-medium">Кор.счет:</span>
                    <span className="text-base">5048046620</span>
                </li>
                <li className="inline-flex gap-1">
                    <span className="text-zinc-600 font-medium">ОГРН:</span>
                    <span className="text-base">5048046620</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default RequisitesData