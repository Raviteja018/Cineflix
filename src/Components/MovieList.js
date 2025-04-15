import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList({ movies, title }) {
  return (
    movies && (<div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-3xl py-2 sm:py-4 text-white">{title}</h1>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>)
  );
}
