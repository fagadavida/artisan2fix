import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const Login = ({ history }) => {
  const [input, setInput] = useState({
    email: " ",
    password: " ",
  });
  const [isChecked, setIsChecked] = useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setInput((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
  }

  async function LoginHandler(event) {
    event.preventDefault();
    const newLogin = {
      email: input.email,
      password: input.password,
    };

    let { data } = await axios.post(
      "http://localhost:5000/user/login",
      newLogin
    );
    try {
      if (data.success === true) {
        localStorage.setItem("authToken", data.token);
        toast.success("Success!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
        });
        console.log(data.user.role);
        if (data.user.role === "user") {
          window.location.href = "/userdashboard";
        } else {
          window.location.href = "/dashboard";
        }
      } else {
        toast.warning(data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
        });
      }
    } catch (err) {
      toast.warning(err.response.data.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 4000,
      });
    }
  }

  return (
    <div className="donate">
      <div className="column-container">
        <center className="donate-h2">
          <h2>Log In</h2>
        </center>
        <div className="sections">
          <form className="form-hrizontal">
            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              name="password"
              className="form-control"
              type="text"
              placeholder="Password"
              onChange={handleChange}
            />
            <div>
              <label
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: "10px",
                }}
              >
                <input
                  type="checkbox"
                  onChange={(event) =>
                    setIsChecked(event.currentTarget.checked)
                  }
                  checked={isChecked}
                  name="rememberMe"
                  style={{
                    display: "flex",
                    marginRight: "10px",
                  }}
                />
                Remember Me
              </label>
            </div>
            <button onClick={LoginHandler} className="btn">
              Login
            </button>
          </form>
          <div className="accounts-reset">
            <Link to="/forgotpassword" className="links">
              Forgot Password?
            </Link>
            <Link to="/forgotpassword" className="links">
              Reset Password
            </Link>
          </div>
        </div>

        <div className="have-account">
          <span>
            Don't have account?{" "}
            <Link to="/signup" className="links">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
