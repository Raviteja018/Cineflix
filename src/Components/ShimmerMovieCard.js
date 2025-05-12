import React from "react";

export default function ShimmerMovieCard() {
  return (
    <div className="w-40 sm:w-48 h-64 bg-white/10 rounded-lg animate-pulse flex-shrink-0">
      <div className="w-full h-3/4 bg-gray-700 rounded-t-lg"></div>
    </div>
  );
}
