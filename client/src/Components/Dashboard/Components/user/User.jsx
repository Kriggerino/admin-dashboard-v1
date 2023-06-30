import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";
import { DataGrid} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button"

const User = () => {
  const [apidata, setapiData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/getUser")
      .then((res) => {
        if (res.data.Status === "Success") {
          setapiData(res.data.Result);
          console.log(res.data.Result);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8081/delete/" + id)
      .then((res) => {
        if (res.data.Status === "Success") {
          window.location.reload(true);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  };

  const dgColumns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
    },
    {
      field: "username",
      headerName: "Username",
      width: 150,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
    },
    {
      field: "extra",
      headerName: "Extra",
      width: 150,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 250,
      renderCell: (params) => {return(
        <div>
          <Button>
          <Link
            to={`/dashboard/userEdit/` + params.row.id}
            className="btn"
          >
            edit
          </Link>
          </Button>
          <Button
            onClick={(e) => handleDelete(params.row.id)}
            className="btn"
          >
            delete
          </Button>
        </div>
        );
      },
    },
  ];

  

  return (
    <div className="tableDiv">
      <div className="tableTitle">
        <h3>User List</h3>
      </div>
      <div className="tableContainer">
        <div className="justify-content-sm-between flex">
          <Link to={"/dashboard/createuser"}>
            <button className="btn">Add User</button>
          </Link>
        </div>
        <div className="searchHeader">
          <input
            type="text"
            className="row col-md-3 form control mb-3"
            onChange={(e) => {}}
          />
        </div>
        

        <Box sx={{ height: 400, width: "100%", background: "#f2f2f2" }}>
          <DataGrid
            rows={apidata}
            columns={dgColumns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
};

export default User;
