import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LogOut, SearchIcon, Film, Heart, Tv } from "lucide-react";
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { logo } from "../Utils/Constants";

export default function Header() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid, email }));
        if(location.pathname === "/"){
          navigate("/browse");
        }
        // navigate("/browse"); <- don't auto-navigate, causes redirect issues
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

  const navItems = [
    { label: "Movies", path: "/browse", icon: <Film className="inline-block mr-1 w-4 h-4" /> },
    { label: "TV Series", path: "/tvseries", icon: <Tv className="inline-block mr-1 w-4 h-4" /> },
    { label: "Wishlist", path: "/wishlist", icon: <Heart className="inline-block mr-1 w-4 h-4" /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
    {userLoggedIn && <header className={`absolute z-30 top-0 left-0 w-full px-6 py-4 bg-gradient-to-b ${!userLoggedIn? "bg-transparent" : "from-black/80 to-transparent bg-black/50 backdrop-blur-md" } `}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        { (<img
          className="w-32 md:w-40 drop-shadow-lg object-contain cursor-pointer"
          src={logo}
          alt="Cineflix Logo"
          onClick={() => navigate("/browse")}
        />)}

        {/* Desktop Nav */}
        { (<nav className="hidden md:flex items-center gap-6 text-white text-sm font-medium">
          {navItems.map((item) => (
            <div
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`cursor-pointer transition-all ${
                isActive(item.path) ? "text-red-500" : "hover:text-red-400"
              }`}
            >
              {item.icon}
              {item.label}
            </div>
          ))}
          <div
            onClick={() => navigate("/search")}
            className="flex items-center gap-1 text-white text-sm font-medium cursor-pointer hover:text-red-400 transition-all"
          >
            <SearchIcon className="inline-block w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
          </div>
        </nav>)}

        {/* Sign Out */}
        <div className="flex items-center gap-3">
          {(
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
        {navItems.map((item) => (
          <div
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`cursor-pointer ${
              isActive(item.path) ? "text-red-400" : "hover:text-gray-300"
            }`}
          >
            {item.label}
          </div>
        ))}
        <div
          onClick={() => navigate("/search")}
          className="flex items-center gap-1 text-white text-sm font-medium hover:text-red-400 transition-all cursor-pointer"
        >
          <SearchIcon className="inline-block w-4 h-4" />
          <span className="hidden sm:inline">Search</span>
        </div>
      </div>
    </header>}
    </>
  );
}

