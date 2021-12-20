import React, { useState, useEffect } from "react";
import axios from "axios";
import { ContainerShadow, TitleBar } from "../../StyledComponents";

export default function Services({ history }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setServices] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/categories/index").then((categorylist) => {
      setServices(categorylist.data);
    });
  }, []);
  async function CreateService(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", image);
    formData.append("category", category);
    formData.append("name", name);
    formData.append("amount", amount);
    formData.append("description", description);
    console.log(formData);
    axios
      .post("http://localhost:5000/services/create", formData)
      .then((res) => {
        history.push(`/servicesdetails/${res.data._id}`);
      });
  }
  return (
    <ContainerShadow>
      <TitleBar>
        <h3>CREATE SERVICE</h3>
      </TitleBar>
      <form className="form-hrizontal" encType="multipart/form-data">
        <div className="form-group">
          <select
            id="categoryid"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
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
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="file"
            className="form-control"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-success" onClick={CreateService}>
            Save
          </button>
        </div>
      </form>
    </ContainerShadow>
  );
}
