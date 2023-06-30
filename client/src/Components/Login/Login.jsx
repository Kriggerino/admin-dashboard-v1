/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Login.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import video from "../../Assets/waves.mp4";
import logo from "../../Assets/oil-spill.png";
import { FaUserShield } from "react-icons/fa";
import { BsShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        console.log(res.data);
        if (res.data.Status == "Success") {
          navigate("/dashboard");
        } else {
          setError(res.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Title goes here</h2>
            <p className="">Subtext here</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Register here</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex" onSubmit={handleSubmit}>
          <div className="headerDiv">
            <img src={logo} alt="logo image" />
            <h3>Welcome back</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <div className="input flex">
                <FaUserShield className="icon" />
                <label htmlFor="email">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
              
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="inputDiv">
              <div className="input flex">
                <BsShieldLockFill className="icon" />
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                
              />
              </div>
            </div>
            <button type="submit" className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click here!</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
