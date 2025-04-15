import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './videoBackground';
import VideoTitle from './videoTitle';

export default function MainContainer() {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // console.log(movies);
    if(!movies) return;
    const mainMovie = movies[0];
    // console.log(mainMovie);
    const {title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
      <VideoBackground movieId ={id}/>
    </div>
  )
} 
