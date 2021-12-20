import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.clear("authToken");
    window.location.href = "/";
  });

  return <div></div>;
};

export default Logout;
