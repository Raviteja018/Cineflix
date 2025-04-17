import React from 'react';
import TvSeriesCard from './TvSeriesCard';

const TvSeriesList = ({ title, series, searchTerm }) => {
  if (!series || series.length === 0) return null;

  const filteredSeries = series.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredSeries.map(item => (
          <TvSeriesCard key={item.id} series={item} />
        ))}
      </div>
    </div>
  );
};

export default TvSeriesList;