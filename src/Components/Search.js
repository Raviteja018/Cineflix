import React, { useEffect, useState } from "react";
import { API_OPTIONS, BACKGROUND_CINEFLIX } from "../Utils/Constants";
import { useNavigate } from "react-router-dom";
import { addSearchMovies } from "../Utils/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { genreMap } from "../Utils/Constants";
import { SearchIcon } from "lucide-react";
import Header from "./Header";
import { addSearchCardDetails } from "../Utils/CardDetailsSlice";

export default function Search() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const movies = useSelector((store) => store.search?.searchMovies);

   useEffect(() => {
    dispatch(addSearchMovies(null)); // clear on mount

    return () => {
      dispatch(addSearchMovies(null)); // clear on unmount
    };
  }, []);

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

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target?.value);
    if (e.target?.value === "") {
      dispatch(addSearchMovies(null));
    }
  };

  // const handleClick = ;

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <img
        src={BACKGROUND_CINEFLIX}
        alt="Cineflix Background"
        className="absolute h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"></div>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-20 flex flex-col min-h-screen items-center px-4 py-6 pt-24">
        {/* Search Bar */}
        <div className="w-full max-w-3xl mt-6 mb-12">
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-4 shadow-xl hover:shadow-2xl transition-all">
            <input
              onChange={handleChange}
              type="text"
              placeholder="Search for movies, shows..."
              className="bg-transparent outline-none text-white placeholder-white/60 flex-1 text-lg"
            />
            <button
              onClick={searchResults}
              className=" bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold transition-all"
            >
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Movie Cards Section (Dynamic with TMDB) */}
        {movies && movies.length > 0 && (
          <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-12 px-4">
            {movies
              .filter((movie) => movie.poster_path)
              .map((movie) => (
                <div
                  key={movie.id}
                  className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title || movie.name}
                    className="w-full h-60 object-cover"
                    onClick={() => {
                      dispatch(addSearchCardDetails(movie));
                      navigate("/searchCardInfo");
                    }}
                  />
                  <div className="p-3 text-white">
                    <h3 className="text-base font-semibold truncate">
                      {movie.title || movie.name || movie.original_title}
                    </h3>
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
