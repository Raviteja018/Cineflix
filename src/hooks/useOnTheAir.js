import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants"
import { useDispatch } from "react-redux";
import { addOnTheAirToday } from "../Utils/TvSeriesSlice";


const useOnTheAir = () => {
    const dispatch = useDispatch();
    const getOnTheAir = async () => {
        const data = await fetch("https://api.themoviedb.org/3/tv/on_the_air?", API_OPTIONS);
        const json = await data.json();
        dispatch(addOnTheAirToday(json.results));
    }
    useEffect(() => {
        getOnTheAir();
    },[])
}

export default useOnTheAir;