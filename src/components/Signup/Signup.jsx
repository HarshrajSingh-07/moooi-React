import React, { useEffect, useState } from "react";
import "./Signup.css";
import { FirebaseApp } from "firebase/app";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import BasicModal from "../Login/Modals";
import { RemoveScroll } from "react-remove-scroll";

const Signup = ({ handleLogin, open, handleOpen, handleClose }) => {
  const [user1, setUser1] = useState(null);
  const [user, setUser] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    fname: "",
    lname: "",
    password: "",
    confirmpassword: "",
  });
  const [finalErr, setFinalErr] = useState("");

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when input changes
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!user.email || user.email.length < 3) {
      newErrors.email = "Please enter a valid email address";
    }
    if (
      !user.fname ||
      user.fname.length < 3 ||
      !user.lname ||
      user.lname.length < 3
    ) {
      newErrors.fname =
        "First name and last name must be at least 3 characters";
      newErrors.lname =
        "First name and last name must be at least 3 characters"; // Fix for last name error
    }
    if (!user.password || user.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (user.password !== user.confirmpassword) {
      newErrors.confirmpassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // Proceed with signup if there are no errors
    if (Object.keys(newErrors).length === 0) {
      // Perform signup
      handleSignupWithFirebase(user.email, user.password, user.fname);
    }
  };
  const handleSignupWithFirebase = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", response.user);
      handleOpen("Signup Successfully !");
      setFinalErr("Sucessfully signup");
      // handleLogin();
      await setDoc(doc(db, "users", response.user.uid), {
        username: user.fname,
        // contact: contact
      });

      // You can redirect the user to another page or show a success message
    } catch (error) {
      setFinalErr(error.message.substring(10) + "..!");
    }
  };

  useEffect(() => {
    // Check if user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        setUser1(user);
        console.log(user1);
      } else {
        // No user is signed in
        setUser1(null);
      }
    });

    // Unsubscribe from the auth listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <RemoveScroll>
      <section id="signup">
        <BasicModal
          handleClose={handleClose}
          handleOpen={handleOpen}
          open={open}
          msg={"Signup Successfully !"}
        />
        <div className="signupContainer">
          <form onSubmit={handleSignup}>
            <h1>Welcome!</h1>
            <span>Create an account</span>
            <div className="signup-fields">
              <div className="inputarea firstinput">
                <label>E-mail address*</label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputs}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
              <div className="inputarea">
                <label>First name*</label>
                <input
                  type="text"
                  name="fname"
                  value={user.fname}
                  onChange={handleInputs}
                />
                {errors.fname && <span className="error">{errors.fname}</span>}
              </div>
              <div className="inputarea">
                <label>Last Name*</label>
                <input
                  type="text"
                  name="lname"
                  value={user.lname}
                  onChange={handleInputs}
                />
                {errors.lname && <span className="error">{errors.lname}</span>}
              </div>
              <div className="inputarea">
                <label>Create password*</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                />
                {errors.password && (
                  <span className="error">{errors.password}</span>
                )}
              </div>
              <div className="inputarea">
                <label>Confirm password*</label>
                <input
                  type="password"
                  name="confirmpassword"
                  value={user.confirmpassword}
                  onChange={handleInputs}
                />
                {errors.confirmpassword && (
                  <span className="error">{errors.confirmpassword}</span>
                )}
              </div>
              {finalErr && (
                <span
                  className={
                    finalErr.includes("Sucessfully")
                      ? "txt-green"
                      : "finalerror"
                  }
                >
                  {finalErr}
                </span>
              )}
            </div>
            <button type="submit">Create Account</button>
          </form>
          <div className="SignupFooter">
            <span className="haveAccount">Already have an account?</span>
            <button className="loginBtn" onClick={handleLogin}>
              <span>Login</span>
            </button>
          </div>
        </div>
      </section>
    </RemoveScroll>
  );
};

export default Signup;
