import React, { useState } from "react";
import Image from "./movies-background1.jpeg";
import "./Signup.css";

export default function SignUpPage() {
  const [signStatus, setSignStatus] = useState(true);
  const toggleForm = () => {
    setSignStatus(!signStatus);
  };

  return (
    <div className="signUp">
      <img className="imge" src={Image} alt="images" />
      <div className="black-blend"></div>
      <div className="container">
        <div className="form-box">
          <div className="form-box-elements">
            <h2>{signStatus ? "Sign In" : "Sign Up"}</h2>
            <form>
              {signStatus ? (
                <>
                  <div className="input-box">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="input-box">
                    <input type="password" placeholder="Password" required />
                  </div>
                </>
              ) : (
                <>
                  <div className="input-box">
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className="input-box">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="input-box">
                    <input type="password" placeholder="Password" required />
                  </div>
                </>
              )}

              <button type="submit">
                Submit
              </button>
              <p>
                {signStatus? "Don't have an account?" : "Already have an account? "}  
                <a href="#" onClick={toggleForm}> {signStatus ? "Register here" : " sign in"}</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
  