import React from 'react';

const Bars = ({ title, icon: Icon, progress }) => {
  return (
    <div className='lg:basis-[24%] basis-[300px] m-auto p-1'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <Icon className='text-4xl text-gray-800 rounded-full p-1 ' />
          <p className='font-bold'>{title}</p>
        </div>
        <p>{progress}%</p>
      </div>
      <div className='w-full h-2 bg-fuchsia-200 rounded'>
        <div className='bg-fuchsia-700 h-2 rounded' style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default Bars;
