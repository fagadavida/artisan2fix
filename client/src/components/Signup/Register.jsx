import React, { useState, useEffect } from "react";
import "./Register.css";
import axios from "axios";

const Register = (history) => {
  const [surname, setSurname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [stateID, setStateID] = useState("");
  const [phone, setPhone] = useState("");
  const [lga, setLGA] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");

  // Load data from server and reinitialize student form

  const [statesList, setStateList] = useState([]);
  const [alllgalist, setAllLGA] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/lga/index").then((stateslist) => {
      setStateList(stateslist.data);
    });
  });
  const fetchLGA = () => {
    let id = document.getElementById("stateid").value;
    setStateID(id);
    axios.get(`http://localhost:5000/lga/lgaid/${id}`).then((lgalist) => {
      setAllLGA(lgalist.data);
    });
  };
  async function RegisterRecord(event) {
    event.preventDefault();
    const newUser = {
      surname,
      firstname,
      email,
      password,
      phone,
      dob,
      stateID,
      lga,
      address,
    };
    // useEffect(() => {
    //   if (localStorage.getItem("authToken")) {
    //     //access allowed
    //     history.push("/");
    //   }
    // });
    const data = await axios.post(
      "http://localhost:5000/user/register",
      newUser
    );
    localStorage.setItem("authToken", data.token);
    history.push("/Details/" + data._id);
  }

  return (
    <div className="wrapper">
      <div className="register-container">
        <center>
          <h2>JOIN AS</h2>
          <h3>Benefiary || Donor</h3>
        </center>
        <div className="sections">
          <form className="form-hrizontal">
            <input
              name="surname"
              className="form-control"
              type="text"
              placeholder="Surname"
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              name="firstname"
              className="form-control"
              type="text"
              placeholder="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              name="email"
              className="form-control"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="phone"
              className="form-control"
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              name="password"
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              name="dob"
              className="form-control"
              type="date"
              placeholder="LGA"
              onChange={(e) => setDOB(e.target.value)}
            />
            <select
              type="text"
              id="stateid"
              name="stateID"
              onChange={fetchLGA}
              className="form-control"
            >
              <option value="-1"> Select State </option>
              {statesList.map((stat) => {
                return (
                  <option key={stat._id} value={stat._id}>
                    {stat.name}
                  </option>
                );
              })}
            </select>
            <select
              type="text"
              name="lga"
              onChange={(e) => setLGA(e.target.value)}
              className="form-control"
            >
              <option value="-1" name="lga">
                Select LGA
              </option>
              {alllgalist.map((lga) => {
                return (
                  <option key={lga._id} value={lga._id}>
                    {lga.name}
                  </option>
                );
              })}
            </select>
            <input
              name="address"
              className="form-control"
              type="text"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
            />
            <button onClick={RegisterRecord} className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
