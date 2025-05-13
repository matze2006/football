import React from 'react'

type Props = {
  liga: string;
  onClick:()=>void;
};

export default function Liga({liga, onClick}: Props) {
  return (
    <div className='border grid grid-cols-2 h-50 hover:bg-gray-100' onClick={onClick}>
      <div className='p-4'>
        <h2 className='font-bold text-xl'>{liga}</h2>
      </div>
    </div>
  )
}