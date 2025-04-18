import React, { useEffect, useState } from "react";
import { API_OPTIONS, genreMap, BACKGROUND_CINEFLIX } from "../Utils/Constants";
import Header from "./Header";

export default function TvSeries() {
  const [tvSeries, setTvSeries] = useState([]);

  const fetchTVSeries = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc`,
      API_OPTIONS
    );
    const json = await data.json();
    setTvSeries(json.results);
  };

  useEffect(() => {
    fetchTVSeries();
  }, []);

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
      <div className="relative z-20 flex flex-col min-h-screen items-center px-4 py-6 pt-28">
        <h2 className="text-3xl font-bold mb-8 text-white drop-shadow-lg">Popular TV Series</h2>

        {/* TV Series Cards */}
        <div className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pb-12 px-4">
          {tvSeries
            .filter((tv) => tv.poster_path)
            .map((tv) => (
              <div
                key={tv.id}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                  alt={tv.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-3 text-white">
                  <h3 className="text-base font-semibold truncate">
                    {tv.name || tv.original_name}
                  </h3>
                  <p className="text-xs text-white/70 mt-1">
                    {tv.first_air_date
                      ? new Date(tv.first_air_date).getFullYear()
                      : "Unknown Year"}{" "}
                    •{" "}
                    {tv.genre_ids
                      ?.map((id) => genreMap[id])
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
