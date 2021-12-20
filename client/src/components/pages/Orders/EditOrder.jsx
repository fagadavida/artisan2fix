import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";

export default function EditOrder() {
  const { id } = useParams();
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    surname: "",
    othernames: "",
    phone: "",
    dob: "",
    address: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setData((newInput) => {
      return {
        ...newInput,
        [name]: value,
      };
    });
  }
  // Load data from server and reinitialize student form
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    axios
      .get(`http://localhost:5000/user/details/${id}`, config)
      .then((user) => {
        setData(user.data);
      })
      .catch((err) => console.log(err));
  });

  async function updateUser(event) {
    event.preventDefault();
    const user = {
      email: data.email,
      surname: data.surname,
      othernames: data.othernames,
      phone: data.phone,
      dob: data.dob,
      address: data.address,
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    await axios.post("http://localhost:5000/user/edit/" + id, user, config);
    history.push("/dashboard");
  }

  return (
    <div className="edit-users">
      <form className="form-hrizontal">
        <h3>Update Profile</h3>

        <div className="form-group">
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-control"
            value={data.email}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="surname"
            onChange={handleChange}
            className="form-control"
            value={data.surname}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="othernames"
            onChange={handleChange}
            className="form-control"
            value={data.othernames}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            className="form-control"
            value={data.phone}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dob"
            onChange={handleChange}
            className="form-control"
            value={data.dob}
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            name="address"
            onChange={handleChange}
            className="form-control"
            value={data.address}
            cols="10"
            rows="8"
          ></textarea>
        </div>

        <div className="form-group">
          <button onClick={updateUser}>Save</button>
        </div>
      </form>
    </div>
  );
}
