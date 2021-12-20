import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../Signup/Register.css";

export default function CreateState({ props }) {
  const [input, setInput] = useState({
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
  useEffect(() => {
    axios
      .get("http://localhost:5000/states/create")
      .then((res) => {
        const { name } = res.data;
        setInput({ name });
      })
      .catch((err) => console.log(err));
  }, []);

  async function saveState(event) {
    event.preventDefault();
    const newState = {
      name: input.name,
    };
    await axios.post("http://localhost:5000/states/create", newState);
    //history.push("/Details/" + id);
  }

  return (
    <div className="wrapper">
      <center>
        <h2>STATE </h2>
      </center>
      <div className="register-container">
        <form className="form-hrizontal">
          <h3>Create State</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="form-control"
              value={input.name}
            />
          </div>

          <div className="form-group">
            <button onClick={saveState} className="btn">
              Save State
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
