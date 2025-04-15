import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

export default function VideoBackground({movieId}) {
  const trailer = useSelector(store => store.movies?.trailerVideo?.key);

  useMovieTrailer(movieId);
  
  return (
    <div className="w-full overflow-hidden">
      <iframe
      className="aspect-video w-screen "
        src={`https://www.youtube.com/embed/${trailer}?&autoplay=1&mute=1&loop=1&playlist=${trailer}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}
