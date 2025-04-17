import React from 'react';

const TvSeriesCard = ({ series }) => {
  const imageUrl = series.poster_path
    ? `https://image.tmdb.org/t/p/w500${series.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={series.name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{series.name}</h3>
        <p className="text-sm text-gray-600 mt-1">Rating: {series.vote_average}</p>
        <p className="text-sm text-gray-500 mt-1">First Air Date: {series.first_air_date}</p>
      </div>
    </div>
  );
};

export default TvSeriesCard;