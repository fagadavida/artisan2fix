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
} from "../../StyledComponents";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DeleteForeverOutlined, Edit } from "@material-ui/icons";
import { Wrapper, SearchInput } from "../Search/Search";
import { SearchSharp } from "@material-ui/icons";
import { Search } from "@mui/icons-material";
toast.configure();

const HandleDelete = (id) => {
  axios.delete(`http://localhost:5000/services/delete/${id}`).then((user) => {
    window.location.href = "/index";
  });
};

export default function Index() {
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    axios
      .get("http://localhost:5000/services/index", config)
      .then((services) => {
        setRows(services.data);
        rows.map(() => {});
      });
  }, []);
  function search(rows) {
    return rows.filter((row) => row.name.toLowerCase().indexOf(query) > -1);
  }
  return (
    <ContainerShadow>
      <TitleBar>
        <h4>LIST OF SERVICES {`[${rows.length}]`}</h4>
        <Wrapper>
          <SearchSharp />
          <SearchInput
            placeholder="Search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Wrapper>
        <BTNCreate>
          <BTNLink to="/createservice">New Service</BTNLink>
        </BTNCreate>
      </TitleBar>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ fontWeight: "700 !important" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {search(rows).map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.amount}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.category.name}
                </TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <Link
                    to={`/editservice/${row._id}`}
                    title="Edit"
                    className="edit-link"
                  >
                    <Edit style={{ color: "green", margin: "1px 10px" }} />
                  </Link>
                  <Link to={`/servicedetails/${row._id}`}>Details</Link> ||
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
