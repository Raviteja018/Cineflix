import React from "react";
import TvSeriesCard from "./TvSeriesCard";
import ShimmerTvCard from "./ShimmerTvCard";

export default function TvSeriesList({ title, series, loading }) {
  if (!series || series.length === 0) return null;

  return (
    <div className="w-full max-w-7xl mb-14 px-4">
      {/* Section Title with Vertical Bar */}
      <div className="flex items-center mb-8">
        <div className="w-1 h-8 sm:h-10 bg-red-600 rounded-sm mr-4"></div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
          {title}
        </h2>
      </div>

      {/* TV Series Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {loading? Array(10).fill().map((_, i) => <ShimmerTvCard key={i}/>) : series.map((tv) => (
          <TvSeriesCard
            key={tv.id}
            posterPath={tv.poster_path}
            title={tv.name}
            rating={tv.vote_average.toFixed(1)}
            id={tv.id}
            tv={tv}
          />
        ))}
      </div>
    </div>
  );
}
