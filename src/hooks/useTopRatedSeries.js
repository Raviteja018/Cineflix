
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants"
import { useDispatch } from "react-redux";
import { addTopRatedSeries } from "../Utils/TvSeriesSlice";


const useTopRatedSeries = () => {
    const dispatch = useDispatch();
    const getTopRatedSeries = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/top_rated?", API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedSeries(json.results));
    }
    useEffect(() => {
        getTopRatedSeries();
    },[])
}

export default useTopRatedSeries;