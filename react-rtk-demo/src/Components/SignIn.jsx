import React from "react";
import { useRef } from "react";

const SignIn = () => {
  const form = useRef();
  const email = useRef();
  const password = useRef();

  const handleFormValidation = (event) => {
    event.preventDefault();

    // Get the email and password values from localStorage
    const loginemail = localStorage.getItem("Email");
    const loginpassword = localStorage.getItem("Password");

    // Get the email and password values entered by the user
    const userEmail = email.current.value;
    const userPassword = password.current.value;

    // Check if the email and password fields are empty
    if (userEmail === "" || userPassword === "") {
      alert("Input field has no value");
    } else {
      // Check if the email and password values match the values in localStorage
      if (loginemail === userEmail && loginpassword === userPassword) {
       
        setInterval(() => {
          location.href="/home";
        }, 1000);
        alert("j")
      } else {
        alert("Enter the correct credentials");
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
