import { useEffect } from "react";
import { addToWishlistMovies } from "../Utils/WishListSlice";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";

const useWishlistSearch = () => {
  const dispatch = useDispatch();
  const movieId = useSelector((store) => store.details?.searchCardDetails);
  const getWishlist = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addToWishlistMovies(json));
  };
  useEffect(() => {
    getWishlist();
  }, []);
};

export default useWishlistSearch;
