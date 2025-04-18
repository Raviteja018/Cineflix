import React from "react";
import Header from "./Header";

const WishList = () => {
  const sampleMovies = Array(8).fill({
    title: "Movie Title",
    poster_path: "",
  });

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-10"></div>

      {/* Header */}
      <Header />

      {/* Content */}
      <div className="relative z-20 p-6 pt-24 text-white min-h-screen">

        {/* Movie Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {sampleMovies.map((movie, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg animate-pulse"
            >
              <div className="w-full h-64 bg-white/10" />
              <div className="p-4 flex justify-between items-center">
                <div className="h-4 bg-white/20 rounded w-2/3"></div>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;
