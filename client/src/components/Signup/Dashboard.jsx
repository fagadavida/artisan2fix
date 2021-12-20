import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import "./Profile.css";
import FeaturedInfo from "../FeaturedInfo/FeaturedInfo";
import LatestActivities from "../LatestActivities/LatestActivities";
const Dashboard = (history) => {
  axios.defaults.withCredentials = true;

  const [isAdmin, setIsAccess] = useState(true);
  useEffect(() => {
    const data = jwt.decode(localStorage.getItem("authToken"));
    if (data) {
      if (data.role === "user") {
        setIsAccess(false);
      }
    }
  }, [history]);
  useEffect(() => {
    const data = jwt.decode(localStorage.getItem("authToken"));
    if (data) {
      console.log(data.role);
    }
  });

  return (
    <div className="container" style={{ flex: isAdmin ? "1" : " " }}>
      <div className="content">
        <FeaturedInfo />
        <LatestActivities />
      </div>
    </div>
  );
};

export default Dashboard;
