import { useEffect } from "react";
import { addToWishlistSeries } from "../Utils/WishListSlice";
import { API_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";

const useWishlistSeries = () => {
  const dispatch = useDispatch();
  const movieId = useSelector((store) => store.details?.tvSeriesCardDetails);
  const getWishlist = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/tv/${movieId}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addToWishlistSeries(json));
  };
  useEffect(() => {
    getWishlist();
  }, []);
};

export default useWishlistSeries;
























