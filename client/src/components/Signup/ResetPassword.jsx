import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const ResetPassword = ({ history }) => {
  const { resetToken } = useParams();
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");

  async function ResetPasswoedHandler(e) {
    e.preventDefault();
    const newData = {
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      let { data } = await axios.post(
        `http://localhost:5000/user/resetpassword/${resetToken}`,
        newData
      );
      alert(data.message);
      if (data.success === true) {
        toast.success(data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 15000,
        });
        history.push("/login");
      }
    } catch (err) {
      if (err.response) {
        console.log(err.response.status);
        console.log(err.response.data.message);
        toast.warning(err.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000,
        });
      }
    }
  }

  return (
    <div className="donate">
      <div className="column-container">
        <div className="sections">
          <center>
            <h4 style={{ alignContent: "center" }}>Reset Password</h4>
          </center>
          <form className="form-hrizontal">
            <input
              name="password"
              className="form-control"
              type="passwoord"
              placeholder="New password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              name="confirmPassword"
              className="form-control"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button onClick={ResetPasswoedHandler} className="btn">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
