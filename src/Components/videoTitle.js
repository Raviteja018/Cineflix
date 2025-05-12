import React from 'react';
import { Info, PlayIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { addVideoId, addVideoInfo } from '../Utils/VideoPlayerSlice';
import { useDispatch } from 'react-redux';

export default function VideoTitle({ title, overview, movieId, movie }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const truncatedOverview = overview?.length > 120 ? overview.slice(0, 300) + '...' : overview;


  return (
    <div className='absolute pt-32 px-4 md:px-12 md:pt-36 w-full md:w-2/3 lg:w-1/2 bg-gradient-to-r from-black h-[1000px] aspect-video'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md'>
        {title}
      </h1>
      <p className='hidden md:block py-3 md:py-5 text-sm md:text-base lg:text-lg text-white max-w-xl leading-relaxed opacity-90'>
        {truncatedOverview}
      </p>
      

      <div className='hidden sm:flex gap-4 mt-6'>
        <button onClick={() => {
          navigate("/videoplayer");
          dispatch(addVideoId(movieId));

        }} className='flex items-center gap-3 bg-white text-black font-semibold py-2.5 px-6 text-base lg:text-lg rounded-full hover:bg-gray-200 shadow-md transition-all duration-200'>
          <PlayIcon className='w-5 h-5 lg:w-6 lg:h-6' />
          <span>Play</span>
        </button>

        <button onClick={() =>{ navigate("/videoinfo");
        dispatch(addVideoInfo(movie))}} className='flex items-center gap-3 bg-white/20 text-white font-semibold py-2.5 px-6 text-base lg:text-lg rounded-full hover:bg-white/30 shadow-md transition-all duration-200'>
          <Info className='w-5 h-5 lg:w-6 lg:h-6' />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
}
