import React, { useState } from "react";
import Header from "./Header";
// import cineMax from "../Images/cineMax.png"

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="">
      <Header />
      <div className="absolute h-full w-full ">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg"
          alt="logo"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <form className="w-3/12 absolute p-8 bg-black m-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className=" font-bold text-3xl py-2">{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (<input
          type="text"
          name="Full name"
          placeholder="Full name"
          className="p-2 my-2 w-full outline-none text-black bg-gray-700"
        />)}
        <input
          type="text"
          name="Email Address"
          placeholder="Email Address"
          className="p-2 my-2 w-full outline-none text-black bg-gray-700"
        />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          className="p-2 my-2 w-full outline-none text-black bg-gray-700"
        />
        <button className="p-2 my-2 bg-red-700 w-full rounded-lg">{isSignIn? "Sign In" : "Sign Up"}</button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>{isSignIn? "New to Cineflix? please Sign Up" : "Already a user? Sign In now"}</p>
      </form>
    </div>
  );
}
