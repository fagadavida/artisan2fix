import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notify = () =>
    toast.success("Wow so easy!", {
      // Set to 15sec
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        toastStyle={{ backgroundColor: "green", color: "white" }}
      />
    </div>
  );
};
export default Toast;
