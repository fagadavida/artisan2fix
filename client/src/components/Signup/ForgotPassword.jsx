import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ForgotPassword = (history) => {
  const [email, setEmail] = useState(" ");
  // const [error, setError] = useState(" ");

  async function ForgotPasswordHandler(e) {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    try {
      let { data } = await axios.post(
        "http://localhost:5000/user/forgotpassword",
        { email },
        config
      );
      if (data.success === true) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 15000,
        });
        history.push("/login");
      } else {
        toast.warning(data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
        });
        history.push("/");
      }
    } catch (error) {
      setEmail(" ");
      setTimeout(() => {
        // setError(" ");
      }, 500);
    }
  }

  return (
    <div className="donate">
      <div className="column-container">
        <div className="sections">
          <center>
            <h4>Forgot Password</h4>
          </center>
          <hr />
          <form className="form-hrizontal">
            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={ForgotPasswordHandler} className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
