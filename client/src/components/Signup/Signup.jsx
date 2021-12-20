import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
const Signup = ({ history }) => {
  const [input, setInput] = useState({
    username: " ",
    email: " ",
    password: " ",
    confirmPassword: " ",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
  }
  // useEffect(() => {
  //   if (localStorage.getItem("authToken")) {
  //     history.push("/");
  //   }
  // }, [history]);
  async function SignupUser(event) {
    event.preventDefault();
    const newSignup = {
      username: input.username,
      email: input.email,
      password: input.password,
      confirmPassword: input.confirmPassword,
    };
    if (input.password !== input.confirmPassword) {
      history.push("/signup");
    } else {
      axios.post("http://localhost:5000/user/signup", newSignup).then((res) => {
        console.log(res.data);
        localStorage.setItem("authToken", res.data.token);
        history.push("/");
      });
    }
  }

  return (
    <div className="donate">
      <ToastContainer
        toastStyle={{ backgroundColor: "green", color: "white" }}
      />
      <div className="column-container">
        <center className="donate-h2">
          <h2>Sign Up</h2>
        </center>
        <div className="sections">
          <form className="form-hrizontal">
            <input
              name="username"
              className="form-control"
              type="text"
              placeholder="Username"
              onChange={handleChange}
              tabIndex={1}
            />

            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              tabIndex={2}
            />
            <input
              name="password"
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={handleChange}
              tabIndex={3}
            />
            <input
              name="confirmPassword"
              className="form-control"
              type="password"
              placeholder="comfirm password"
              onChange={handleChange}
              tabIndex={4}
            />

            <button onClick={SignupUser} className="btn" tabIndex={5}>
              Submit
            </button>
          </form>
        </div>
        <div className="have-account">
          <span>
            Already have account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
