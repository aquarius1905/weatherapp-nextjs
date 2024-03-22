import React from 'react'
import { City } from '../types/types'
import Link from 'next/link'

interface CityProps {
  city: City
}

const CityCard = ({ city }: CityProps) => {
  const { id, name, displayname } = city
  return (
    <div className='bg-white rounded-md shadow-md'>
      <img src="https://coachtech-video.s3-ap-northeast-1.amazonaws.com/clouds-449822_640.jpg" alt="" className='max-w-full rounded-t-md' />
        <Link href={`/weather_detail/${name}`} className='inline-block text-xl text-gray-700 text-center font-bold p-5 w-full'>
          {displayname}
        </Link>
    </div>
  )
}

export default CityCard