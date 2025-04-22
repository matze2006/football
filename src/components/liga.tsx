import React from 'react'

type Props = {}

export default function liga({jahr, text, image}: Props) {
  return (
    <div className='border grid grid-cols-2 h-50'>
      <div className='p-4'>
        <h2 className='font-bold text-xl'>{jahr}</h2>
        <h4>{text}</h4>
      </div>
      <div className='w-full'>
        <img src={image} alt="" className='object-cover w-full h-full'/>
      </div>
    </div>
  )
}