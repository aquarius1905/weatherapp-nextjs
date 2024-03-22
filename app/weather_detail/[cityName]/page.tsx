import React from 'react'

const WeatherDetailPage = async ({ params }: { params: { cityName: string } }) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&units=metric&appid=57a0e88dc2fb0caab20390c84e74a2b2`)
  const { main, weather, wind } = await response.json();
  return (
    <div className='w-screen h-screen'>
      <div className='w-1/3 my-0 mx-auto'>
        <h1 className='text-5xl'>{params.cityName}の天気情報</h1>
        <ul className='text-4xl'>
          <li className='mt-5'>天気: { weather[0].main} </li>
          <li className='mt-4'>温度: { main.temp }℃</li>
          <li className='mt-4'>湿度: { main.humidity }％</li>
          <li className='mt-4'>風速: { wind.speed }m</li>
        </ul>
      </div>
    </div>
  )
}

export default WeatherDetailPage