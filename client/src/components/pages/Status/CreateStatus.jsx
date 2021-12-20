import React, { useState } from "react";
import axios from "axios";

export default function Services({ history }) {
  const [name, setName] = useState("");

  async function CreateService(event) {
    event.preventDefault();
    const newSstatus = {
      name,
    };
    await axios.post("http://localhost:5000/status/create", newSstatus);
    history.push("/statusindex");
  }
  return (
    <div className="all-users">
      <div className="col-md-6">
        <form className="form-hrizontal">
          <h3>Update Status</h3>
          <div className="form-group">
            <input
              name="name"
              className="form-control"
              type="text"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success" onClick={CreateService}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
