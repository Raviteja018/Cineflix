import React from "react";
import { IMG_URL } from "../Utils/Constants";

export default function MovieCard({ posterPath }) {
  return (
    <div className="min-w-[80px] sm:min-w-[80px] md:min-w-[100px] lg:min-w-[120px]">
      <img
        alt="movie-poster"
        className="rounded-lg object-cover w-full h-auto"
        src={IMG_URL + posterPath}
      />
    </div>
  );
}
