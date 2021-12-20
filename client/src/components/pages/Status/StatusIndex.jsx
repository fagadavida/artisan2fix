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

import {
  BTNCreate,
  BTNLink,
  ContainerShadow,
  TitleBar,
} from "../../../StyledComponents";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeleteForeverOutlined, Edit } from "@material-ui/icons";
toast.configure();

const HandleDelete = (id) => {
  axios.delete(`http://localhost:5000/status/delete/${id}`).then((user) => {
    window.location.href = "/statusindex";
  });
};

export default function StatusIndex() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    axios.get("http://localhost:5000/status/index", config).then((status) => {
      setRows(status.data);
    });
  }, []);

  return (
    <ContainerShadow>
      <TitleBar>
        <h4>LIST OF SERVICES {`[${rows.length}]`}</h4>
        <BTNCreate>
          <BTNLink to="/createstatus">New Status</BTNLink>
        </BTNCreate>
      </TitleBar>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ fontWeight: "700 !important" }}>
            <TableRow>
              <TableCell>Name</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>

                <TableCell>
                  <Link
                    to={`/editstatus/${row._id}`}
                    title="Edit"
                    className="edit-link"
                  >
                    <Edit style={{ color: "green", margin: "1px 10px" }} />
                  </Link>
                  <Link to={`/statusdetails/${row._id}`}>Details</Link> ||
                  <DeleteForeverOutlined
                    style={{ color: "red" }}
                    className="delete button"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        `Do you really want to delete `
                      );
                      if (confirmBox === true) {
                        HandleDelete(row._id);
                      }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ContainerShadow>
  );
}
