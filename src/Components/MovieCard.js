import React from "react";
import { IMG_URL } from "../Utils/Constants";

export default function MovieCard({ posterPath }) {
  return (
    <div className="min-w-[95px] sm:min-w-[100px] md:min-w-[120px] lg:min-w-[150px] cursor-pointer">
      <img
        alt="movie-poster"
        className="rounded-lg object-cover w-full h-auto border-2 border-transparent hover:border-red-600"
        src={IMG_URL + posterPath}
      />
    </div>
  );
}
