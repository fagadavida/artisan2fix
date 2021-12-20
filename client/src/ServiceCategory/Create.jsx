import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { Container, Content } from "./Category.element";

const CategoryCreate = ({ history }) => {
  const [name, setName] = useState("");
  const [descriptions, setDescription] = useState("");

  async function RegisterRecord(event) {
    event.preventDefault();
    const newCategory = {
      name,
      descriptions,
    };
    const data = await axios.post(
      "http://localhost:5000/categories/create",
      newCategory
    );
    if (data) {
      history.push("/categoriesindex");
    }
  }

  return (
    <Container>
      <Content>
        <center>
          <h3>CREATE CATEGORY</h3>
        </center>
        <form className="form-hrizontal">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            name="descriptions"
            className="form-control"
            type="text"
            placeholder="Descriptions"
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={RegisterRecord} className="btn">
            Create
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default CategoryCreate;
