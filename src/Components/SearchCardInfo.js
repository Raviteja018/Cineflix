import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart, FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import { API_OPTIONS, logo } from "../Utils/Constants";
import { addToWishlistMovies } from "../Utils/WishListSlice";
import { addVideoId } from "../Utils/VideoPlayerSlice";

const SearchCardInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector((store) => store.details?.searchCardDetails);
  console.log(movie)

  if (!movie) {
    return (
      <div className="text-white text-center py-10">
        Loading movie details... or no movie selected.
      </div>
    );
  }

  const handleWishlist = () => {
    dispatch(addToWishlistMovies(movie));
    navigate("/wishlist");
  };

  const handlePlay = () => {
    navigate("/videoPlayer");
    dispatch(addVideoId(movie.id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-80 shadow-md sticky top-0 z-50">
        <img src={logo} className=" w-36 text-2xl font-bold text-red-600" />
        <button className="text-white px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition">
          Back to Home
        </button>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-12">
        {/* Poster */}
        <div className="col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-2xl shadow-lg sm:w-full lg:w-2/3 md:w-[400px] object-cover "
          />
        </div>

        {/* Movie Info */}
        <div className="md:col-span-2 flex flex-col justify-center">
          <h1 className="text-4xl font-extrabold mb-4">
            {movie.original_title}
          </h1>
          <p className="text-gray-300 mb-4">{movie.overview}</p>

          <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-300">
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              Genre: {movie.genres?.[0]?.name || "Drama"}
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              Year: {movie.release_date?.split("-")[0]}
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              Popularity: {movie.popularity?.toFixed(0)}
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              {movie.vote_average} / 10
            </span>
            <span className="bg-gray-800 px-3 py-1 rounded-full">
              Reviews: {movie.vote_count}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
             onClick={handlePlay}
             className="flex items-center gap-2 px-5 py-3 bg-red-600 hover:bg-red-700 rounded-xl shadow-lg transition">
              <FaPlay />
              Play Trailer
            </button>
            <button
              onClick={handleWishlist}
              className="flex items-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl shadow-lg transition"
            >
              <FaHeart className="text-red-400" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCardInfo;
