import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Services({ history }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/services/index").then((servicelist) => {
      setServices(servicelist.data);
    });
  }, []);
  async function CreateOrder(event) {
    event.preventDefault();
    const newService = {
      category,
      name,
      amount,
      description,
    };
    await axios.post("http://localhost:5000/orders/create", newService);
    history.push("/indexorder");
  }
  return (
    <div className="all-users">
      <div className="col-md-6">
        <form className="form-hrizontal">
          <h3>Order </h3>
          <div className="form-group">
            <select
              id="categoryid"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
            >
              <option value="-1">--- Select -- </option>
              {services.map((service) => {
                return (
                  <option key={service._id} value={service._id}>
                    {service.name}
                  </option>
                );
              })}
            </select>

            <input
              name="amount"
              className="form-control"
              type="number"
              placeholder="amount"
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              name="description"
              className="form-control"
              type="text"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success" onClick={CreateOrder}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
