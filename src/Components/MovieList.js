import MovieCard from "./MovieCard";
import ShimmerMovieCard from "./ShimmerMovieCard";

export default function MovieList({ movies, title, loading }) {
  return (
    movies && (
      <div className="p-4 sm:p-6">
        <h2 className="text-xl sm:text-3xl font-bold text-white mb-4 border-l-4 border-red-600 transition-transform duration-300 ease-in-out transform hover:scale-105 pl-4">
          {title}
        </h2>
        <div className="overflow-x-auto scrollbar-hide transition-colors duration-300 ease-in-out">
          <div className="flex space-x-4 pb-4">
            {loading
              ? Array(10).fill().map((_, i) => <ShimmerMovieCard key={i} />)
              : movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    posterPath={movie?.poster_path}
                    title={movie?.original_title}
                    id={movie?.id}
                    movie={movie}
                  />
                ))}
          </div>
        </div>
      </div>
    )
  );
}
