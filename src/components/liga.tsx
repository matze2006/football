import React from 'react'

type Props = {
  liga: string;
};

export default function Liga({liga}: Props) {
  return (
    <div className='border grid grid-cols-2 h-50 hover:bg-gray-100'>
      <div className='p-4'>
        <h2 className='font-bold text-xl'>{liga}</h2>
      </div>
    </div>
  )
}