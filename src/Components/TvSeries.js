import React, { useEffect, useState } from "react";
import { BACKGROUND_CINEFLIX } from "../Utils/Constants";
import Header from "./Header";
import useAiringToday from "../hooks/useAiringToday";
import useTopRatedSeries from "../hooks/useTopRatedSeries";
import usePopularTvSeries from "../hooks/usePopularTvSeries";
import useOnTheAir from "../hooks/useOnTheAir";
import { useSelector } from "react-redux";
import TvSeriesList from "./TvSeriesList";

export default function TvSeries() {
  const [loading, setLoading] = useState(true);

  useAiringToday();
  useTopRatedSeries();
  usePopularTvSeries();
  useOnTheAir();

  const popular = useSelector((store) => store.tvSeries?.popular);
  const airingToday = useSelector((store) => store.tvSeries?.airingToday);
  const onTheAir = useSelector((store) => store.tvSeries?.onTheAir);
  const topRated = useSelector((store) => store.tvSeries?.topRated);

  // Simulate loading for 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
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
        <TvSeriesList title="Popular TV Series" series={popular} loading={loading} />
        <TvSeriesList title="Airing Today" series={airingToday} loading={loading} />
        <TvSeriesList title="On The Air" series={onTheAir} loading={loading} />
        <TvSeriesList title="Top Rated" series={topRated} loading={loading} />
      </div>
    </div>
  );
}
