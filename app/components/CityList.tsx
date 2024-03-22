import React from 'react'
import CityCard from './CityCard'
import { City } from '../types/types'

interface CitiesProps {
  cities: City[]
}
const CityList = ({cities}: CitiesProps) => {
  return (
    <div className='grid lg:grid-cols-3 px-20 py-10 gap-20'>
      {cities.map((city: City) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  )
}

export default CityList