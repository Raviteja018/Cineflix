import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import useVideoPlayer from "../hooks/useVideoPlayer";

const VideoPlayer = () => {
  const navigate = useNavigate();

  // const id = useSelector((store) => store.VideoPlayer?.videoId);
  // useVideoPlayer(id);
  const key = useSelector(store => store.movies.trailerVideo.key)




  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-red-600 to-red-400 shadow-lg">
        <div className="text-3xl font-bold tracking-wide">
          Cine<span className="text-black">flix</span>
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white bg-black/50 hover:bg-black/70 px-4 py-2 rounded-xl transition"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </header>

      {/* Video Player */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl">

            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${key}?&autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
