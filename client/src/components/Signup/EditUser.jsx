import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import jwt from "jsonwebtoken";

import axios from "axios";

export default function EditUser() {
  const { id } = useParams();
  const history = useHistory();
  const [image, setImage] = useState("");
  const [showImage, setShowImage] = useState([]);

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
    let deta = jwt.decode(localStorage.getItem("authToken"));
    axios
      .get(`http://localhost:5000/user/details/${deta.id}`, config)
      .then((user) => {
        setData(user.data);
      })
      .catch((err) => console.log(err));
  });

  async function updateUser(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    await axios.post("http://localhost:5000/user/edit/" + id, formData, config);
    history.push("/dashboard");
  }

  return (
    <div className="donate">
      <div className="column-container">
        <div className="sections" style={{ width: "100%" }}>
          <form className="form-hrizontal">
            <center>
              <h4>kindly Complete Your Profile </h4>
            </center>

            <div className="form-group">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="form-control"
                disabled
                value={data.email}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                onChange={handleChange}
                className="form-control"
                value={data.surname}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="othernames"
                placeholder="Other names"
                onChange={handleChange}
                className="form-control"
                value={data.othernames}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                className="form-control"
                value={data.phone}
              />
            </div>

            <div className="form-group">
              <textarea
                type="text"
                name="address"
                onChange={handleChange}
                className="form-control"
                placeholder="Address"
                value={data.address}
                cols="10"
                rows="8"
              ></textarea>
              <input
                type="file"
                name="file"
                className="form-control"
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            <div className="form-group">
              <button onClick={updateUser} className="btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
