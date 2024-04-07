import React from 'react'

const RequisitesData = ({ getData }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {getData.length > 0 ? getData.map((item, index) => {
                return (
                    <div key={index} className="w-full bg-gray-50 border rounded-lg p-5 md:p-7">
                        <h3 className="text-left text-xl font-medium text-zinc-800">Счет №{item.id}</h3>
                        <p className="text-left mt-5">{item.attributes?.description}</p>
                        <ul className="flex flex-col gap-2 mt-8">
                            <li className="inline-flex gap-1">
                                <span className="text-zinc-600 font-medium">ИНН:</span>
                                <span className="text-base">{item.attributes?.inn}</span>
                            </li>
                            <li className="inline-flex gap-1">
                                <span className="text-zinc-600 font-medium">КПП:</span>
                                <span className="text-base">{item.attributes?.kpp}</span>
                            </li>
                            <li className="inline-flex gap-1">
                                <span className="text-zinc-600 font-medium">Расчетный счет:</span>
                                <span className="text-base">{item.attributes?.payment}</span>
                            </li>
                            <li className="inline-flex gap-1">
                                <span className="text-zinc-600 font-medium">БИК:</span>
                                <span className="text-base">{item.attributes?.bik}</span>
                            </li>
                            <li className="inline-flex gap-1">
                                <span className="text-zinc-600 font-medium">Кор.счет:</span>
                                <span className="text-base">{item.attributes?.cor}</span>
                            </li>
                        </ul>
                    </div>
                );
            }) : [1, 2].map((item, index) => {
                return (
                    <div key={index} className="w-full bg-gray-50 border rounded-lg p-5 md:p-7">
                    <h3 className="text-left text-xl font-medium text-zinc-800 w-xl h-9 rounded-md animate-pulse bg-gray-100"></h3>
                    <p className="text-left mt-5 w-xl h-9 rounded-md animate-pulse bg-gray-100"></p>
                    <ul className="flex flex-col gap-2 mt-8">
                        <li className="inline-flex gap-1">
                            <span className="text-zinc-600 font-medium">ИНН:</span>
                            <span className="text-base w-1/2 h-6 block rounded-md animate-pulse bg-gray-100"></span>
                        </li>
                        <li className="inline-flex gap-1">
                            <span className="text-zinc-600 font-medium">КПП:</span>
                            <span className="text-base w-1/2 h-6 block rounded-md animate-pulse bg-gray-100"></span>
                        </li>
                        <li className="inline-flex gap-1">
                            <span className="text-zinc-600 font-medium">Расчетный счет:</span>
                            <span className="text-base w-1/2 h-6 block rounded-md animate-pulse bg-gray-100"></span>
                        </li>
                        <li className="inline-flex gap-1">
                            <span className="text-zinc-600 font-medium">БИК:</span>
                            <span className="text-base w-1/2 h-6 block rounded-md animate-pulse bg-gray-100"></span>
                        </li>
                        <li className="inline-flex gap-1">
                            <span className="text-zinc-600 font-medium">Кор.счет:</span>
                            <span className="text-base w-1/2 h-6 block rounded-md animate-pulse bg-gray-100"></span>
                        </li>
                    </ul>
                </div>
                )
            })}

        </div>
    )
}

export default RequisitesData