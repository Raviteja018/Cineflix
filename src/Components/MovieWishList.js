// import React, { useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromWishlist,
  removeFromWishlistSeries,
} from "../Utils/WishListSlice";
import useWishlistMovies from "../hooks/useWishlistMovies";
import useWishlistSeries from "../hooks/useWishlistSeries";

const WishList = () => {
  const dispatch = useDispatch();

  useWishlistMovies();
  useWishlistSeries();

  const wishlistMovies = useSelector((store) => store.wishList?.movies) || [];
  const wishlistSeries = useSelector((store) => store.wishList?.tvSeries) || [];

  const validWishlistMovies = wishlistMovies.filter(
    (movie) => movie && movie.poster_path
  );

  const validWishlistSeries = wishlistSeries.filter(
    (series) => series && series.poster_path
  );

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10" />

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-20 p-6 pt-24 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Wishlisted Movies</h1>

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-6">
          {validWishlistMovies.length > 0 ? (
            validWishlistMovies.map((movie, index) => (
              <div
                key={`${movie.id}-${index}`}
                className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{movie.title}</h2>
                  <p className="text-sm text-gray-300">{movie.release_date}</p>
                  <button
                    onClick={() => dispatch(removeFromWishlist(movie.id))}
                    className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out text-sm"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center text-gray-400">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                alt="Empty Wishlist"
                className="w-40 h-40 mb-4 opacity-50"
              />
              <p>Your movie wishlist is empty</p>
            </div>
          )}
        </div>

        {/* Wishlisted TV Series */}
        <h1 className="text-3xl font-bold mb-8 mt-16">Wishlisted TV Series</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-6">
          {validWishlistSeries.length > 0 ? (
            validWishlistSeries.map((series, index) => (
              <div
                key={`${series.id}-${index}`}
                className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{series.name}</h2>
                  <p className="text-sm text-gray-300">
                    {series.first_air_date}
                  </p>
                  <button
                    onClick={() => dispatch(removeFromWishlistSeries(series.id))}
                    className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out text-sm"
                  >
                    ❌ Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center text-center text-gray-400">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
                alt="Empty Wishlist"
                className="w-40 h-40 mb-4 opacity-50"
              />
              <p>Your TV series wishlist is empty</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishList;
