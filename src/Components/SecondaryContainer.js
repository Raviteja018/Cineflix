import React, { useEffect, useState } from "react";
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000)
    return () => clearTimeout(timer);
  },[])

  return (
    <div className="bg-black ">
      <div className="z-20 -mt-3 lg:-mt-52  md:-mt-12 pl-2 md:pl-12 relative">
        <MovieList title="Popular Movies" movies={popularMovies}  loading={loading}/>
        <MovieList title="Trending" movies={trendingMovies} loading={loading}/> 
        <MovieList title="Now Playing Movies" movies={nowPlayingMovies}  loading={loading}/>
        <MovieList title="Top Rated Movies" movies={topRatedMovies}  loading={loading}/>   
        <MovieList title="Upcoming Movies" movies={upComingMovies}  loading={loading}/>
        <MovieList title="Documentaries" movies={documentaryMovies}  loading={loading}/>
      </div>
    </div>
  );
}
