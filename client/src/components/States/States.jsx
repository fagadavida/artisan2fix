import React, { useState, useEffect } from "react";
import axios from "axios";

export default function States() {
  const [statesList, setStateList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/states").then((countryslist) => {
      setUserList(countryslist.data);
    });
  }, []);
  async function getLGA() {
    let id = document.getElementById("countryid").value;
    axios.get("http://localhost:5000/lga/lgaid/" + id).then((stateslist) => {
      setStateList(stateslist.data);
    });
  }
  return (
    <div className="all-users">
      <div className="col-md-6">
        <form className="form-hrizontal">
          <h3>Update state</h3>
          <div className="form-group">
            <select
              id="stateid"
              name="stateID"
              onChange={getLGA}
              className="form-control"
            >
              <option value="-1">--- Select -- </option>
              {userList.map((user) => {
                return (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <select name="stateID" className="form-control">
              <option value="-1">--- Select -- </option>
              {statesList.map((myState) => {
                return (
                  <option key={myState._id} value={myState._id}>
                    {myState.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <button className="btn btn-success">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
