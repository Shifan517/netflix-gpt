import React from 'react'

const VideoTitle = ({title,overView}) => {
  
  
  return (
    <div className='pt-32 px-16 w-screen aspect-video absolute z-10 bg-gradient-to-r from-black'>
      <h1 className='text-4xl font-bold text-white'>{title}</h1>
      <p className='font-semibold w-[50%] pt-2  text-white'>{overView}</p>
      <div className='pt-2'>
        <button className='bg-white text-black py-2 px-8 rounded-md hover:opacity-50 font-semibold '> ▶ Play</button>
        <button className='bg-gray-200 bg-opacity-50 text-white font-semibold py-2 px-6 ml-2 rounded-md hover:bg-gray-500'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle