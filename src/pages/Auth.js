import React, { useContext, useRef } from "react";
import "../AuthForm.css";
import modeContext from "../context/modeContext";

import LoginFb from "../components/auth/LoginFb";

export default function Register() {
  const mode_context = useContext(modeContext);

  const { mode } = mode_context;

  // use the following ref to make the container active according to the button clicked
  const ref = useRef();

  // handle when clicked on signup click
  const handleSignUpClick = () => {
    ref.current.classList.add("right-panel-active");
  };
  // handle when clicked on sign in button
  const handleSignInClick = () => {
    ref.current.classList.remove("right-panel-active");
  };

  // changing document title
  document.title = "Authentication";

  return (
    <div className="login-reg">
      <div className="container" id="container" ref={ref}>
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <div className="social-container">
              <LoginFb />
            </div>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="">
            <h1>Sign in</h1>
            <div className="social-container">
              <LoginFb />
            </div>
          </form>
        </div>
        <div className="overlay-container">
          <div
            className="overlay"
            style={{ backgroundColor: mode === "dark" ? "#1a1a1a" : "#242424" }}
          >
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => handleSignInClick()}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start blogging</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => handleSignUpClick()}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
