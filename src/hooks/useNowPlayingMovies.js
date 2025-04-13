import { useEffect } from "react";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import {API_OPTIONS} from "../Utils/Constants";
import { useDispatch } from "react-redux";

const useNowPlaying = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?", API_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      }
      useEffect(() => {
        getNowPlayingMovies();
      },[]);
}

export default useNowPlaying;





