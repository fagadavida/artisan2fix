import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../Signup/Register.css";

export default function CreateState({ props }) {
  const { id } = useParams();
  const history = useHistory();

  const [input, setInput] = useState({
    stateID: "",
    name: "",
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
  // Load data from server and reinitialize student form

  const [statesList, setStateList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/lga/index").then((statelist) => {
      setStateList(statelist.data);
    });
  }, []);

  async function saveLGA(event) {
    event.preventDefault();
    const newLGA = {
      stateID: input.stateID,
      name: input.name,
    };
    await axios.post("http://localhost:5000/lga/create", newLGA);
    history.push("/index/" + id);
  }

  return (
    <div className="wrapper">
      <center>
        <h2>Local Government Area </h2>
      </center>
      <div className="register-container">
        <form className="form-hrizontal">
          <div className="form-group">
            <select
              type="text"
              name="stateID"
              onChange={handleChange}
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
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="form-control"
              value={input.name}
            />
          </div>

          <div className="form-group">
            <button onClick={saveLGA} className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
