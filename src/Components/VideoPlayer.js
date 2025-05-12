import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logo } from "../Utils/Constants";
import { useEffect } from "react";
import useVideoPlayer from "../hooks/useVideoPlayer";
import useTvVideoPlayer from "../hooks/useTvVideoPlayer";

  const VideoPlayer = () => {
  const navigate = useNavigate();
  useVideoPlayer()
  useTvVideoPlayer()
  const key = useSelector((store) => store.videoPlayer?.videoTrailer?.key);

    useEffect(() => {
    const scrollY = window.innerHeight * 0.3;
    window.scrollTo({ top: scrollY, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-black bg-opacity-80 shadow-md sticky top-0 z-50">
        <img src={logo} alt="logo-png" className=" w-36 text-2xl font-bold text-red-600" />
        <button
          onClick={() => navigate("/")}
          className="text-white px-4 py-2 rounded bg-red-600 hover:bg-red-700 transition"
        >
          Back to Home
        </button>
      </header>

      {/* Video Player */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="w-full relative pt-[56.25%]">
          {" "}
          {/* 16:9 Aspect Ratio (9/16 = 0.5625 = 56.25%) */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
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
















