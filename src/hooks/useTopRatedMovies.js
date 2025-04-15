import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants"
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";



const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const getTopRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?", API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }
    useEffect(() => {
        getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;