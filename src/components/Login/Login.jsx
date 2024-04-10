import React, { useEffect, useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import "firebase/auth";
import { auth } from "../../firebase";
import BasicModal from "./Modals";
import { RemoveScroll } from "react-remove-scroll";

const Login = ({ handleSignup, open, handleOpen, handleClose }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {}, [data]);
  const handleLoginInputs = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!data.email || data.email.length < 3) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!data.password || data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      handleSignInWithFirebase(data.email, data.password);
    }
  };
  const handleSignInWithFirebase = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      handleOpen("Login Successfully !");
      setData({ email: "", password: "" });
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-credential") {
        console.log("Invalid Password or Email Id.");
        // You can display a message prompting the user to create an account
      } else {
        // Handle other errors if needed
        console.error(
          "your address is not registered-please signup before login"
        );
      }
      setErrors(error.message);
    }
  };

  return (
    <RemoveScroll>
      <section id="login">
        <div>
          <BasicModal
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
            msg={"Login Successfully !"}
          />
        </div>
        <div className="loginContainer ">
          <div className="loginHead">
            <h3>Good day!</h3>
            <p>
              Fill in your e-mail address and password to log in or create an
              Account.
            </p>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="loginfields">
              <label>E-mail address*</label>
              <input
                type="email"
                name="email"
                autoComplete="on"
                value={data.email}
                onChange={handleLoginInputs}
              />
            </div>
            <div className="loginfields">
              <label>Password*</label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                value={data.password}
                onChange={handleLoginInputs}
              />
            </div>
            <button type="submit">Continue</button>
          </form>
          <div className="Loginfooter">
            <span>Don't have an account ?</span>
            <button className="signupBtn" onClick={handleSignup}>
              Signup Now
            </button>
          </div>
        </div>
      </section>
    </RemoveScroll>
  );
};

export default Login;
