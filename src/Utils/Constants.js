import Logo from "../Images/cineflix-logo.png";
import FAVICON from "../Images/Cineflix-favicon.png"

export const favicon = FAVICON;

export const logo = Logo;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWQ1MDZjNWQ2YjM1OTBkNjhhZjJmMjcxN2VmYjVkMSIsIm5iZiI6MTcwNjQ1MzcxMy42MjMwMDAxLCJzdWIiOiI2NWI2NmFkMTYwYzUxZDAxODRkMjYxNTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2Hd_2F5zbT-NqUjii31bN39QTJ9guWC74uU0UOsUnRo'
    }
  };

  export const IMG_URL = "https://image.tmdb.org/t/p/w300";

  export const BACKGROUND_CINEFLIX = "https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg";

  export const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };