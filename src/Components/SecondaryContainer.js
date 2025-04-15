import React from 'react'
import usePopularMovies from '../hooks/usePopularMovies'
import MovieList from './MovieList';

export default function SecondaryContainer() {
  // usePopularMovies();
  return (
    <div>
      <MovieList />
    </div>
  )
}
