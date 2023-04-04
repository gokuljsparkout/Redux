import React, { useState } from "react";
import { useRef } from "react";

const SignIn = () => {
  const form = useRef();
  const email = useRef();
  const password = useRef();
  const [error, setError] = useState(null);

  const handleFormValidation = (event) => {
    event.preventDefault();

    // Get the user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData")) || [];

    // Get the email and password values entered by the user
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    // Check if the email and password fields are empty
    if (userEmail === "" || userPassword === "") {
      setError("Please fill out all fields");
    } else {
      // Check if the email and password values match the values in localStorage
      const matchedUser = userData.find(
        (user) => user.email === userEmail && user.password === userPassword
      );
      if (matchedUser) {
        setError(null);
        setTimeout(() => {
          location.href = "/home";
        }, 1000);
      } else {
        setError("Invalid email or password");
      }
    }
  };

  return (
    <div className="main-parent">
      <div className="form-wrap">
        <form ref={form}>
          <h1>
            <span>Login </span>Form
          </h1>
          <div className="single-input">
            <input type="email" ref={email} placeholder="Email Address" />
          </div>
          <div className="single-input">
            <input type="password" ref={password} placeholder="Password" />
          </div>
          {error && <div className="error">{error}</div>}
          <div className="submit-button">
            <button className="button" onClick={handleFormValidation}>
              Sign In
            </button>
          </div>
          <div className="account-have">
            <a href="#">Forgot Password?</a>
            <a href="/signup">Create a new account?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
