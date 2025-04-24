import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import {
  addToTVWishlist,
  removeFromTVWishlist,
} from "../Utils/TVWishlistSlice"; // adjust this import path as needed

const TVWishlist = () => {
  const dispatch = useDispatch();
  const [tvDetails, setTVDetails] = useState([]);
  const tvId = useSelector((store) => store.details?.homeTVCardDetails); // assume selected TV ID

  const getWishlistTV = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}`,
        API_OPTIONS
      );
      const json = await res.json();

      setTVDetails([json]);
      dispatch(addToTVWishlist(json));
    } catch (err) {
      console.error("Failed to fetch TV series details:", err);
    }
  };

  useEffect(() => {
    getWishlistTV();
  }, []);

  const wishlist = useSelector((store) => store.tvWishList?.series); // state for wishlist TV series

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"></div>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-20 p-6 pt-24 text-white min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Your TV Series Wishlist</h1>

        {/* Series Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {wishlist.length > 0 ? (
            wishlist.map((series, index) => (
              <div
                key={`${series.id}-${index}`}
                className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${series?.poster_path}`}
                  alt={series.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{series?.name}</h2>
                  <p className="text-sm text-gray-300">{series?.first_air_date}</p>

                  <button
                    onClick={() => dispatch(removeFromTVWishlist(series.id))}
                    className="mt-4 inline-block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out text-sm hover:scale-105 transform"
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
  );
};

export default TVWishlist;
