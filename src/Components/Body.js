import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Search from "./Search";
import TvSeries from "./TvSeries";
import MovieCardInfo from "./MovieCardInfo";
import WishList from "./WishList";

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
        }
    ]);


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  );
}
