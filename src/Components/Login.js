import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../Utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { BACKGROUND_CINEFLIX } from "../Utils/Constants";

export default function Login() {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [firebaseError, setFirebaseError] = useState("");

  const toggleSignInForm = () => {
    setFirebaseError("");
    setIsSignIn(!isSignIn);
    setErrorMessage({ name: "", email: "", password: "" });
    if (name.current) name.current.value = "";
    if (email.current) email.current.value = "";
    if (password.current) password.current.value = "";
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

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
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFirebaseError(errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setFirebaseError(errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute h-full w-full ">
        <img
          className="w-full h-full object-cover"
          src={BACKGROUND_CINEFLIX}
          alt="logo"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-8 bg-black m-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className=" font-bold text-3xl py-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <>
            <input
              ref={name}
              type="text"
              name="Full name"
              placeholder="Full name"
              className="p-2 my-2 w-full outline-none text-white bg-gray-700"
            />
            {errorMessage.name && (
              <p className="text-red-500 text-sm">{errorMessage.name}</p>
            )}
          </>
        )}
        <input
          ref={email}
          type="text"
          name="Email Address"
          placeholder="Email Address"
          className="p-2 my-2 w-full outline-none text-white bg-gray-700"
        />
        {errorMessage.email && (
          <p className="text-red-500 text-sm">{errorMessage.email}</p>
        )}
        <input
          ref={password}
          type="password"
          name="Current-Password"
          autoComplete="Current-Password"
          placeholder="Password"
          className="p-2 my-2 w-full outline-none text-white bg-gray-700"
        />
        {errorMessage.password && (
          <p className="text-red-500 text-sm">{errorMessage.password}</p>
        )}
        {firebaseError && (
          <p className="text-red-500 text-sm">{firebaseError}</p>
        )}

        <button
          className="p-2 my-2 bg-red-700 w-full rounded-lg"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="cursor-pointer text-center mt-4"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? "New to Cineflix? please Sign Up"
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
}
