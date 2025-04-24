import React from 'react'
import { useSelector } from 'react-redux';
import VideoBackground from './videoBackground';
import VideoTitle from './videoTitle';

export default function MainContainer() {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return;
    const index = Math.floor(Math.random()*20);
    const mainMovie = (movies[index]);
    const {title, overview, id} = mainMovie;
  return (
    <div>
      <VideoTitle title={title} overview={overview} movieId = {id}/>
      <VideoBackground movieId ={id}/>
    </div>
  )
} 
