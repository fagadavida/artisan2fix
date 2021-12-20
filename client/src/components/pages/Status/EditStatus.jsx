import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Services({ history }) {
  const { id } = useParams();

  const [data, setData] = useState({
    name: "",
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
      .get(`http://localhost:5000/status/editById/${id}`)
      .then((serviceslist) => {
        setData(serviceslist.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  async function EditStatus(event) {
    event.preventDefault();
    const editStatus = {
      name: data.name,
    };
    await axios.post(`http://localhost:5000/status/edit/${id}`, editStatus);
    history.push("/statusindex");
  }
  return (
    <div className="all-users">
      <div className="col-md-6">
        <form className="form-hrizontal">
          <h3>Update Service</h3>
          <div className="form-group">
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success" onClick={EditStatus}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
