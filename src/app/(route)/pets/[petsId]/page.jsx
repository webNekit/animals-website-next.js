import HeaderPage from '@/components/HeaderPage/HeaderPage'
import React from 'react'

export default function petsDetail({ params }) {
  return (
    <>
        <HeaderPage introTitle={params.petsId} />
    </>
  )
}
