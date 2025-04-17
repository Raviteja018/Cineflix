import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LogOut, SearchIcon, Film, Heart, Tv, Import } from "lucide-react";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { logo } from "../Utils/Constants";

export default function Header() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => console.error("Sign out error:", error));
  };

  return (
    <header className="absolute top-0 left-0 w-full px-6 py-4 z-10 bg-gradient-to-b from-black/80 to-transparent bg-black/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img
          className="w-32 md:w-40 drop-shadow-lg object-contain cursor-pointer"
          src={logo}
          alt="Cineflix Logo"
          onClick={() => navigate("/browse")}
        />
        <nav className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          <NavLink
            to="/browse"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-400 transition-all"
            }
          >
            <Film className="inline-block mr-1 w-4 h-4" /> Movies
          </NavLink>
          <NavLink
            to="/tvseries"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-400 transition-all"
            }
          >
            <Tv className="inline-block mr-1 w-4 h-4" /> TV Series
          </NavLink>
          <NavLink
            to="/wishlist"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-400 transition-all"
            }
          >
            <Heart className="inline-block mr-1 w-4 h-4" /> Wishlist
          </NavLink>
          <NavLink
            to="/search"
            className="flex items-center gap-1 text-white text-sm font-medium hover:text-red-400 transition-all"
          >
            <SearchIcon className="inline-block w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          {userLoggedIn && (
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-sm bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold shadow-md transition-all"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          )}
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden mt-4 flex justify-center gap-4 text-white text-xs font-medium">
        <NavLink
          to="/browse"
          className={({ isActive }) =>
            isActive ? "text-red-400" : "hover:text-gray-300"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/tvseries"
          className={({ isActive }) =>
            isActive ? "text-red-400" : "hover:text-gray-300"
          }
        >
          TV
        </NavLink>
        <NavLink
          to="/wishlist"
          className={({ isActive }) =>
            isActive ? "text-red-400" : "hover:text-gray-300"
          }
        >
          Wishlist
        </NavLink>
        <NavLink
          to="/search"
          className="flex items-center gap-1 text-white text-sm font-medium hover:text-red-400 transition-all"
        >
          <SearchIcon className="inline-block w-4 h-4" />
          <span className="hidden sm:inline">Search</span>
        </NavLink>
      </div>
    </header>
  );
}

