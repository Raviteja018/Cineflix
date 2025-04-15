import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlaying from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

export default function SecondaryContainer() {
  useNowPlaying();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  const popularMovies = useSelector((store) => store.movies?.popularMovies);  
  const upComingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);

  return (
    <div className="bg-black ">
      <div className="z-20 -mt-52 pl-12 relative">
        <MovieList title="Popular Movies" movies={popularMovies} />
        <MovieList title="Trending" movies={trendingMovies}/> 
        <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
        <MovieList title="Top Rated Movies" movies={topRatedMovies} />   
        <MovieList title="Upcoming Movies" movies={upComingMovies} />
      </div>
    </div>
  );
}
