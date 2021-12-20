import React, { useState, useEffect } from "react";
import "./Services.css";
import axios from "axios";

const Services = (title, description) => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/services/index").then((services) => {
      console.log(services.data);
      setRows(services.data);
    });
  });

  return (
    <div class="serices-container">
      <h3 class="services-title"> Our Services </h3>
      <div class="row">
        {rows.map((row) => {
          return (
            <div class="card">
              <div>
                <h3>{row.name}</h3>
                <p>{row.amount}</p>
                <p>Some text</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
