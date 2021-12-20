import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { DeleteForeverOutlined, Edit } from "@material-ui/icons";
import {
  BTNCreate,
  BTNLink,
  ContainerShadow,
  TitleBar,
} from "../../StyledComponents";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@restart/ui/esm/Button";
toast.configure();

const columns = [
  { field: "_id", headerName: "ID", width: 250, hide: true },
  { field: "id", headerName: "id", width: 100, hide: true },
  { field: "surname", headerName: "Name", width: 130 },
  { field: "othernames", headerName: "Othernames", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "email", headerName: "Email", width: 160 },

  { field: "role", headerName: "Role", width: 160 },

  {
    field: "action",
    headerName: "Actions",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          <Link
            to={`/editprofile/${params.row._id}`}
            title="Edit"
            className="edit-link"
          >
            <Edit style={{ color: "green", margin: "1px 10px" }} />
          </Link>
          <DeleteForeverOutlined
            style={{ color: "red" }}
            className="delete button"
            onClick={() => {
              const confirmBox = window.confirm(
                `Do you really want to delete `
              );
              if (confirmBox === true) {
                HandleDelete(params.row._id);
              }
            }}
          />
          <Link
            to={`/userdetails/${params.row._id}`}
            title="Details "
            style={{
              textDecoration: "none",
              marginLeft: "10px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            Details
          </Link>
        </div>
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    width: 80,
    renderCell: (params) => {
      return (
        <div>
          <Button>Pending</Button>
        </div>
      );
    },
  },
];
const HandleDelete = (id) => {
  axios.delete(`http://localhost:5000/user/delete/${id}`).then((user) => {
    window.location.href = "/usersindex";
  });
};

export default function Index() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
    };
    axios.get("http://localhost:5000/user/index", config).then((users) => {
      setRows(users.data);
    });
  }, []);

  return (
    <ContainerShadow>
      <TitleBar>
        <h4>LIST OF SERVICES {`[${rows.length}]`}</h4>
        <form>
          <input type="text" placeholder="Search" />
        </form>
        <BTNCreate>
          <BTNLink to="/signup">New Artisan</BTNLink>
        </BTNCreate>
      </TitleBar>

      <DataGrid
        style={{ width: "100%" }}
        rows={rows}
        getRowId={(row) => row._id}
        id="_id"
        disableSelectionOnClick
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </ContainerShadow>
  );
}
