import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Search from "./Search";
import TvSeries from "./TvSeries";
import MovieCardInfo from "./MovieCardInfo";
import WishList from "./MovieWishList";
import TvSeriesCardInfo from "./TvSeriesCardInfo";
import SearchCardInfo from "./SearchCardInfo";
import VideoPlayer from "./VideoPlayer";

export default function Body() {

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
          path: "/search",
          element: <Search />
        },
        {
          path: "/tvseries",
          element: <TvSeries />
        },
        {
          path: "/wishlist",
          element: <WishList/>
        },
        {
          path: "/moviecardinfo",
          element: <MovieCardInfo/>
        },
        {
          path: "/tvSeriesCardInfo",
          element: <TvSeriesCardInfo />
        },
        {
          path: "/searchCardInfo",
          element: <SearchCardInfo />
        },
        {
          path: "/videoplayer",
          element: <VideoPlayer />
        }
    ]);


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}
