import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Services({ history }) {
  const { id } = useParams();

  const [categories, setServices] = useState([]);
  const [data, setData] = useState({
    category: "",
    name: "",

    amount: "",
    description: "",
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
      .get(`http://localhost:5000/services/editById/${id}`)
      .then((serviceslist) => {
        setData(serviceslist.data);
        console.log(serviceslist.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  useEffect(() => {
    axios.get("http://localhost:5000/categories/index").then((categorylist) => {
      setServices(categorylist.data);
    });
  }, []);
  async function EditService(event) {
    event.preventDefault();
    const editService = {
      category: data.category,
      name: data.name,
      amount: data.amount,
      description: data.description,
    };
    await axios.post(`http://localhost:5000/services/edit/${id}`, editService);
    history.push("/index");
  }
  return (
    <div className="all-users">
      <div className="col-md-6">
        <form className="form-hrizontal">
          <h3>Update Service</h3>
          <div className="form-group">
            <select
              id="categoryid"
              name="category"
              value={data.category}
              onChange={handleChange}
              className="form-control"
            >
              <option value="-1">--- Select -- </option>
              {categories.map((category) => {
                return (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              name="amount"
              className="form-control"
              type="number"
              placeholder="amount"
              value={data.amount}
              onChange={handleChange}
            />
            <input
              name="description"
              className="form-control"
              type="text"
              placeholder="Description"
              value={data.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success" onClick={EditService}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
