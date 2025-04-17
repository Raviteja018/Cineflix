import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useNowPlaying from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useDocumentaryMovies from "../hooks/useDocumentaryMovies";

export default function SecondaryContainer() {
  useNowPlaying();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  useDocumentaryMovies();

  const popularMovies = useSelector((store) => store.movies?.popularMovies);  
  const upComingMovies = useSelector((store) => store.movies?.upcomingMovies);
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trendingMovies = useSelector((store) => store.movies?.trendingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const documentaryMovies = useSelector(store => store.movies?.documentaryMovies);

  return (
    <div className="bg-black ">
      <div className="z-20 -mt-3 lg:-mt-60  md:-mt-12 pl-12 relative">
        <MovieList title="Popular Movies" movies={popularMovies} />
        <MovieList title="Trending" movies={trendingMovies}/> 
        <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
        <MovieList title="Top Rated Movies" movies={topRatedMovies} />   
        <MovieList title="Upcoming Movies" movies={upComingMovies} />
        <MovieList title="Documentaries" movies={documentaryMovies} />

      </div>
    </div>
  );
}
