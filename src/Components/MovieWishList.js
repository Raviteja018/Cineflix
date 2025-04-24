import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import {
  addToWishlistMovies,
  removeFromWishlist,
} from "../Utils/WishListSlice";
import useWishlistMovies from "../hooks/useWishlistMovies";
import useWishlistSeries from "../hooks/useWishlistSeries";

const WishList = () => {
  const dispatch = useDispatch();
  const [movieDetails, setMovieDetails] = useState([]);
  const [seriesDetails, setSeriesDetails] = useState([]);

  useWishlistMovies();
  useWishlistSeries();

  const wishlistMovies = useSelector((store) => store.wishList?.movies);
  const wishlistSeries = useSelector((store) => store.wishList?.tvSeries);

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"></div>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-20 p-6 pt-24 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Wishlisted Movies</h1>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-6">
          {wishlistMovies?.length > 0 ? (
            wishlistMovies.map((movie, index) => (
              <div
                key={`${movie?.id}-${index}`}
                className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  alt={movie?.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{movie?.title}</h2>
                  <p className="text-sm text-gray-300">{movie?.release_date}</p>

                  <button
                    onClick={() => dispatch(removeFromWishlist(movie?.id))}
                    className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out text-sm"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 col-span-full text-center">
              Your wishlist is empty or loading...
            </p>
          )}
        </div>
        {/* wishlisted Series*/}
        <div className="relative z-20 p-6 pt-24 text-white min-h-screen">
          <h1 className="text-3xl font-bold mb-8">Wishlisted Tv Series</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-6">
            {wishlistSeries.length > 0 ? (
              wishlistSeries.map((movie, index) => (
                <div
                  key={`${movie?.id}-${index}`}
                  className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    alt={movie?.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{movie?.name}</h2>
                    <p className="text-sm text-gray-300">
                      {movie?.first_air_date}
                    </p>

                    <button
                      onClick={() => dispatch(removeFromWishlist(movie?.id))}
                      className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out text-sm"
                    >
                      ❌ Remove
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-400 col-span-full text-center">
                Your wishlist is empty or loading...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
