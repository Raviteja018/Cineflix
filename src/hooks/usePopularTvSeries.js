import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants"
import { addTvSeries } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";
import { addPopularTvSeries } from "../Utils/TvSeriesSlice";


const usePopularTvSeries = () => {
    const dispatch = useDispatch();
    const getTvSeries = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/popular?", API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularTvSeries(json.results));
    }
    useEffect(() => {
        getTvSeries();
    },[])
}

export default usePopularTvSeries;