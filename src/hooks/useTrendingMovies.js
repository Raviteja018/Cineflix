import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants"
import { addTrendingMovies } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";


const useTrendingMovies = () => {
    const dispatch = useDispatch();
    const getTrendingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/trending/movie/week?language=te-IN", API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }
    useEffect(() => {
        getTrendingMovies();
    },[])
}

export default useTrendingMovies;