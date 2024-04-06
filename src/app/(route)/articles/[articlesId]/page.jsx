import HeaderPage from '@/components/HeaderPage/HeaderPage'
import Reccomendation from '@/components/Reccomendation/Reccomendation'
import React from 'react'

export default function detailArticles({ params }) {
  return (
   <>
     <HeaderPage introTitle={params.articlesId} />
      <Reccomendation getData={''} />
   </>
  )
}
