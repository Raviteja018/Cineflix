import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { LogOut } from "lucide-react"; // Logout icon
import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { logo } from "../Utils/Constants";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserLoggedIn(!!user);
      if (user) {
        const {uid, email} = user;
        dispatch(addUser({uid: uid, email: email, }));
        navigate("/browse")
       } else {
         dispatch(removeUser());
         navigate("/")
       }
    });
    return () => unsubscribe();  //unscribes when the component unmounts

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
          src={logo}
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
