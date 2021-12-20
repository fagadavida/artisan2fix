import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

export default function Index({ history }) {
  const [allcategories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/categories/index").then((categorylist) => {
      setCategories(categorylist.data);
    });
  }, []);
  const HandleDelete = (id) => {
    axios
      .get("http://localhost:5000/categories/delete/" + id)
      .then((success) => {
        toast.success("Success!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 1500,
        });
        window.location.href = "/categoriesindex";
      });
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
          marginRight: "120px",
        }}
      >
        <h4>LIST OF CATEGORIES {`[${allcategories.length}]`}</h4>
        <h4>
          <Link to="/categoriescreate">New Category</Link>
        </h4>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allcategories.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.descriptions}</TableCell>
                <TableCell>
                  <Link to={`/categoriesedit/${row._id}`}>Edit</Link> ||
                  <Link to={`/categoriesdetails/${row._id}`}>Details</Link> ||
                  <button
                    className="delete button"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        `Do you really want to delete ${row.name}`
                      );
                      if (confirmBox === true) {
                        HandleDelete(row._id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
