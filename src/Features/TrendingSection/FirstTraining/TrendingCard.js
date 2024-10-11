import React from 'react'
import CardBody from './CardBody'
import CardHeader from './CardHeader'

const TrendingCard = () => {
  return (
    <div className='trending flex flex-col w-72 h-96 border rounded-lg  absolute left-1/3 mt-5 hover:-translate-y-3 hover:shadow-2xl transition delay-150 duration-300 ease-in-out'>
      <CardHeader />
      <CardBody />
    </div>
  )
}

export default TrendingCard