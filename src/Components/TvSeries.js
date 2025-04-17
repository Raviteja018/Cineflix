import React, { useState } from 'react';
import usePopularTvSeries from '../hooks/usePopularTvSeries';
import useAiringToday from '../hooks/useAiringToday';
import useOnTheAir from '../hooks/useOnTheAir';
import useTopRatedSeries from '../hooks/useTopRatedSeries';
import { useSelector } from 'react-redux';
import TvSeriesList from './TvSeriesList';

export default function TvSeries() {
  const [searchTerm, setSearchTerm] = useState('');
  const { popular, airingToday, onTheAir, topRated } = useSelector(store => store.tvSeries);

  usePopularTvSeries();
  useAiringToday();
  useOnTheAir();
  useTopRatedSeries();

  const handleSearchChange = (e) => setSearchTerm(e.target.value);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search TV series..."
          className="w-full p-3 rounded-lg shadow mb-6 border border-gray-300"
        />

        <TvSeriesList title="Popular" series={popular} searchTerm={searchTerm} />
        <TvSeriesList title="Airing Today" series={airingToday} searchTerm={searchTerm} />
        <TvSeriesList title="On The Air" series={onTheAir} searchTerm={searchTerm} />
        <TvSeriesList title="Top Rated" series={topRated} searchTerm={searchTerm} />
      </div>
    </div>
  );
}

































// import React, { useEffect } from 'react'
// import { API_OPTIONS } from '../Utils/Constants'
// import { addTvSeries } from '../Utils/movieSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import usePopularTvSeries from '../hooks/usePopularTvSeries';
// import useAiringToday from '../hooks/useAiringToday';
// import useOnTheAir from '../hooks/useOnTheAir';
// import useTopRatedSeries from '../hooks/useTopRatedSeries';

// export default function TvSeries() {
//     const series = useSelector(store => store.tvSeries)
//     // const dispatch = useDispatch();
//     usePopularTvSeries();
//     useAiringToday();
//     useOnTheAir();
//     useTopRatedSeries();


//     // const tvSeries = async () => {
//     //     const data = await fetch("https://api.themoviedb.org/3/search/tv?query=avengers", API_OPTIONS);
//     //     const json = await data.json();
//     //     dispatch(addTvSeries(json.results))
//     // }
//     // useEffect(() => {
//     //     tvSeries();
//     // },[])
//   return (
//     <div>
//     Tv Series
//     </div>
//   )
// }
