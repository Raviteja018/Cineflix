import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import cineflix from "../Images/cineflix-logo.png";
import { LogOut } from "lucide-react"; // Logout icon

export default function Header() {
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <header className="absolute top-0 left-0 w-full px-4 py-3 bg-gradient-to-b from-black z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img
          className="w-32 md:w-44 object-contain"
          src={cineflix}
          alt="Cineflix Logo"
        />

        {userLoggedIn && (
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm sm:text-base bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded-md font-medium transition-all duration-200"
          >
            <LogOut className="w-4 h-4 sm:w-5 sm:h-5" />
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
}
