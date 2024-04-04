import HeaderPage from '@/components/HeaderPage/HeaderPage'
import React from 'react'

export default function detailArticles({ params }) {
  return (
    <HeaderPage introTitle={params.articlesId} />
  )
}
