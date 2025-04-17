import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants"
import { useDispatch } from "react-redux";
import { addAiringTodaySeries } from "../Utils/TvSeriesSlice";


const useAiringToday = () => {
    const dispatch = useDispatch();
    const getAiringToday = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/airing_today?", API_OPTIONS);
        const json = await data.json();
        dispatch(addAiringTodaySeries(json.results));
    }
    useEffect(() => {
        getAiringToday();
    },[])
}

export default useAiringToday;