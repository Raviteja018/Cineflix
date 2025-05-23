import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../Utils/Constants";
import { addVideoTrailer } from "../Utils/VideoPlayerSlice";

const useVideoPlayer = () => {
  const videoId = useSelector((store) => store.videoPlayer?.videoId);
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${videoId}/videos`,
        API_OPTIONS
      );
      const json = await response.json();

      if (!json.results || json.results.length === 0) {
        console.warn("No video results found.");
        return;
      }

      const trailer = json.results.find((video) => video?.type === "Trailer") || json.results[0];
      dispatch(addVideoTrailer(trailer));
    } catch (error) {
      console.error("Failed to fetch movie videos:", error);
    }
  };

  useEffect(() => {
    if (videoId) getMovieVideos();
  }, [videoId]);
};

export default useVideoPlayer;

















