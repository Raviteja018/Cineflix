import React from "react";
import { useDispatch } from "react-redux";
import { addTvSeriesCardDetails } from "../Utils/CardDetailsSlice";
import { useNavigate } from "react-router-dom";

export default function TvSeriesCard({ posterPath, title, rating, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!posterPath) return null;

  

  return (
    <div className="rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        className="w-full h-72 object-cover"
        onClick={() => {
          dispatch(addTvSeriesCardDetails(id));
          navigate("/tvSeriesCardInfo")
        }}
      />
      <div className="p-2 bg-black bg-opacity-70 text-white">
        <h3 className="text-md font-semibold truncate">{title}</h3>
        <p className="text-sm text-yellow-400">⭐ {rating}</p>
      </div>
    </div>
  );
}
