import React from 'react';
import { Info} from 'lucide-react';
import { ListVideo } from 'lucide-react';

export default function VideoTitle({ title, overview }) {
  return (
    <div className='absolute pt-32 px-4 md:px-12 md:pt-36 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-black h-screen'>
      <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white'>{title}</h1>
      <p className='py-4 md:py-6 text-base md:text-lg lg:text-xl text-white'>{overview}</p>
      
      <div className='flex flex-col sm:flex-row gap-4 mt-4'>
        <button className='flex items-center justify-center gap-2 bg-white text-black py-3 px-6 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-70 transition'>
          <ListVideo className='w-6 h-6' />
          <span>PlayList</span>
        </button>
        
        <button className='bg-gray-500 bg-opacity-50 text-white py-3 px-6 text-lg rounded-lg hover:bg-opacity-100 transition flex gap-2'>
          <Info className='w-6 h-6'/>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
}
