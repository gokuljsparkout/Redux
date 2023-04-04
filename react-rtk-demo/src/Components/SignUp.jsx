import React from "react";
import { useRef } from "react";

const SignUp = () => {
  const form = useRef();
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const password = useRef();
  const rpassword = useRef();

  const handleFormValidation = (event) => {
    event.preventDefault();
    localStorage.setItem("First Name", fname.current.value);
    localStorage.setItem("Last Name", lname.current.value);
    localStorage.setItem("Email", email.current.value);
    localStorage.setItem("Password", password.current.value);
    localStorage.setItem("Recheck Password", rpassword.current.value);

    if (
      fname.current.value == "" &&
      lname.current.value == "" &&
      email.current.value == "" &&
      password.current.value == "" &&
      rpassword.current.value == ""
    ) {
      alert("Input field has no value");
    } else {
      if (password.current.value !== rpassword.current.value) {
        alert("Password not matching");
      } else {
        alert("Registration Successful");
        location.href = "/sigup";
        form.current.reset();
      }
    }
  };
  return (
    <div className="main-parent">
      <div className="form-wrap">
        <form ref={form}>
          <h1>
            <span>Register </span>Form
          </h1>
          <div className="single-input">
            <input type="text" ref={fname} placeholder="First Name" />
          </div>
          <div className="single-input">
            <input type="text" ref={lname} placeholder="Last Name" />
          </div>
          <div className="single-input">
            <input type="email" ref={email} placeholder="Email Address" />
          </div>
          <div className="single-input">
            <input type="password" ref={password} placeholder="Password" />
          </div>
          <div className="single-input">
            <input
              type="password"
              ref={rpassword}
              placeholder="Retype Password"
            />
          </div>
          <div className="submit-button">
            <button className="button" onClick={handleFormValidation}>
              Sign Up
            </button>
          </div>
          <div className="account-have">
            <a href="#">Forgot Password?</a>
            <a href="/signin">Have an account?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
