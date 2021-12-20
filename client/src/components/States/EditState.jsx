import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../usersList/Edit.css";
import axios from "axios";

export default function EditUser({ props }) {
  const { id } = useParams();
  const history = useHistory();

  const [input, setInput] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
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
      .get("http://localhost:5000/users/edituser/" + id)
      .then((res) => {
        const { id, name, email, password } = res.data;
        setInput({ id, name, email, password });
      })
      .catch((err) => console.log(err));
  }, []);

  async function updateUser(event) {
    event.preventDefault();
    const updatedUser = {
      id: id,
      name: input.name,
      email: input.email,
      password: input.password,
    };
    await axios.post("http://localhost:5000/users/edit/" + id, updatedUser);
    history.push("/Details/" + id);
  }

  return (
    <div className="edit-users">
      <h3>State </h3>
      <form className="form-hrizontal">
        <h3>Update User</h3>
        <div className="form-group">
          <select
            type="text"
            name="countryID"
            onChange={handleChange}
            className="form-control"
            value={input.name}
          ></select>
        </div>

        <div className="form-group">
          <button onClick={updateUser}>Save</button>
        </div>
      </form>
    </div>
  );
}
