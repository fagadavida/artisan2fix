import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import axios from "axios";

export default function Edit({ props }) {
  const { id } = useParams();
  const history = useHistory();

  const [data, setData] = useState({
    name: "",
    descriptions: "",
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
    axios
      .get("http://localhost:5000/categories/categoryedit/" + id)
      .then((category) => {
        setData(category.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  async function updateCatogory(event) {
    event.preventDefault();
    const category = {
      name: data.name,
      descriptions: data.descriptions,
    };
    await axios.post("http://localhost:5000/categories/edit/" + id, category);
    history.push("/categoriesindex");
  }

  return (
    <div className="edit-users">
      <h3>Service Category </h3>
      <form className="form-hrizontal">
        <h3>Update category</h3>

        <div className="form-group">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="form-control"
            value={data.name}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="descriptions"
            onChange={handleChange}
            className="form-control"
            value={data.descriptions}
          />
        </div>

        <div className="form-group">
          <button onClick={updateCatogory}>Save</button>
        </div>
      </form>
    </div>
  );
}
