import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./User.css";
const User = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/getUser")
      .then((res) => {
        if (res.data.Status === "Success") {
          setData(res.data.Result);
          console.log(res.data);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="tableDiv">
      <div className="tableTitle">
        <h3>User List</h3>
      </div>
      <div className="tableContainer">
        <table className="data-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index)=>{
                return(
                    <tr key={index}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
