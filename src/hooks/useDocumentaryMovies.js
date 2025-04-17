import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/Constants"
import { useDispatch } from "react-redux";
import { addDocumentaryMovies } from "../Utils/movieSlice";


const useDocumentaryMovies = () => {
    const dispatch = useDispatch()
    const getDocumentaryMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/discover/movie?", API_OPTIONS);
        const json = await data.json();
        dispatch(addDocumentaryMovies(json.results));
        
    }
    useEffect(() => {
        getDocumentaryMovies();
    },[])
}

export default useDocumentaryMovies;