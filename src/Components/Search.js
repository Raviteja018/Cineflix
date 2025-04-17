import React, { useEffect, useState } from "react";
import { API_OPTIONS, BACKGROUND_CINEFLIX, logo } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import { addSearchMovies } from "../Utils/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { genreMap } from "../Utils/Constants";
import { Home, SearchIcon } from "lucide-react"; // Importing the home icon

export default function SearchHeader() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.search?.searchMovies);
  console.log(movies);

  const searchResults = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addSearchMovies(json.results));
  };

  useEffect(() => {
    if (query.trim() !== "") {
      const timer = setTimeout(() => {
        searchResults();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [query]);

  const handleHome = () => {
    navigate("/browse");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target?.value);
    if (e.target?.value === "") {
      dispatch(addSearchMovies(null));
    }
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <img
        src={BACKGROUND_CINEFLIX}
        alt="Cineflix Background"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen items-center px-4 py-6">
        {/* Top Nav */}
        <div className="w-full flex justify-between items-center px-4 md:px-10 mb-8">
          <img
            src={logo}
            alt="Cineflix Logo"
            className="w-32 md:w-40 drop-shadow-lg"
          />
          <button
            onClick={handleHome}
            className="flex items-center gap-2 bg-transparent text-white border-2 border-white/20 hover:border-white/30 py-2 px-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
          >
            <Home className="w-5 h-5" />
            <span className="hidden sm:inline">Home</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-3xl mt-6 mb-12">
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 shadow-xl hover:shadow-2xl transition-all">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Search for movies, shows, or actors..."
              className="bg-transparent outline-none text-white placeholder-white/60 flex-1 text-lg"
            />
            <button
              onClick={searchResults}
              className=" flex gap-4 ml-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full font-semibold transition-all"
            >
            <SearchIcon />
              Search
            </button>
          </div>
        </div>

        {/* Movie Cards Section (Dynamic with TMDB) */}
        {movies && movies.length > 0 && (
          <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-12 px-4">
            {/* Example Placeholder Card */}
            {movies
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
                >
                  {/* Poster */}
                  {movie.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title || movie.name}
                      className="w-full h-60 object-cover"
                    />
                  )}

                  {/* Text Content */}
                  <div className="p-3 text-white">
                    {/* Title */}
                    <h3 className="text-base font-semibold truncate">
                      {movie.title || movie.name || movie.original_title}
                    </h3>

                    {/* Release Year + Genres */}
                    <p className="text-xs text-white/70 mt-1">
                      {movie.release_date
                        ? new Date(movie.release_date).getFullYear()
                        : "Unknown Year"}{" "}
                      •{" "}
                      {movie.genre_ids
                        ?.map((id) => genreMap[id])
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
