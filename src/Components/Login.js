import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { BACKGROUND_CINEFLIX } from "../Utils/Constants";
import cineflixLogo from "../Images/cineflix-logo.png";

export default function Login() {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [firebaseError, setFirebaseError] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setFirebaseError("");
    setIsSignIn(!isSignIn);
    setErrorMessage({ name: "", email: "", password: "" });
    if (name.current) name.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
  };

  const handleClick = () => {
    const nameValue = name.current?.value || "";
    const emailValue = email.current?.value || "";
    const passwordValue = password.current?.value || "";

    const Message = checkValidData(
      nameValue,
      emailValue,
      passwordValue,
      isSignIn
    );
    if (Message) {
      setErrorMessage(Message);
      return;
    }

    setErrorMessage({ name: "", email: "", password: "" });

    if (!isSignIn) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setFirebaseError(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setFirebaseError(error.message);
        });
    }
  };

  return (
    <div className="relative min-h-screen">
      <Header />
      <img
        className="absolute w-full h-full object-cover "
        src={BACKGROUND_CINEFLIX}
        alt="Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 "></div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-[70%] sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4
        p-8 bg-black bg-opacity-40  backdrop-blur-lg rounded-2xl text-white shadow-2xl"
      >
        <div className="flex flex-col items-center">
          <img
            src={cineflixLogo}
            alt="Cineflix Logo"
            className="w-36 mb-4 drop-shadow-lg"
          />
          <h1 className="text-3xl font-bold mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
        </div>

        {!isSignIn && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 w-full rounded-md bg-gray-800 bg-opacity-70 text-white outline-none"
            />
            {errorMessage.name && (
              <p className="text-red-400 text-sm">{errorMessage.name}</p>
            )}
          </>
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full rounded-md bg-gray-800 bg-opacity-70 text-white outline-none"
        />
        {errorMessage.email && (
          <p className="text-red-400 text-sm">{errorMessage.email}</p>
        )}

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full rounded-md bg-gray-800 bg-opacity-70 text-white outline-none"
        />
        {errorMessage.password && (
          <p className="text-red-400 text-sm">{errorMessage.password}</p>
        )}

        {firebaseError && (
          <p className="text-red-500 text-sm mt-2">{firebaseError}</p>
        )}

        <button
          className="p-3 my-4 bg-red-600 hover:bg-red-700 transition-colors w-full rounded-lg font-semibold"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="text-sm text-center text-gray-300 hover:underline cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? "New to Cineflix? Sign Up here"
            : "Already a user? Sign In"}
        </p>
      </form>
      <div className="flex gap-2 fixed z-50 bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs bg-black bg-opacity-70 p-4 rounded-lg opacity-70">
        <h4 className="font-bold">Use Credentials: </h4>
        <p>Email Id: ravi@gmail.com</p>
        <p>Password: Ravi@123</p>
      </div>
    </div>
  );
}
