/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './Register.css';
import '../../App.css';
import {Link, useNavigate} from 'react-router-dom';
import Axios from 'axios';

import video from '../../Assets/waves.mp4';
import logo from '../../Assets/oil-spill.png'
import {MdEmail} from 'react-icons/md';
import {FaUserShield} from 'react-icons/fa';
import {BsShieldLockFill} from 'react-icons/bs';
import {AiOutlineSwapRight} from 'react-icons/ai';


const Register = () =>{
  const[email, setEmail] = useState('');
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');

  //Onclick track user info entered
  const createUser = ()=>{
    //Axios to call server
    Axios.post('http://localhost:3002/register', {
      //Packing data payload
      Email: email,
      Username: username,
      Password: password
    }).then(()=>{
      console.log('User has been created');
    })
  }
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
              <span className="text">Let us know you!</span>
              <Link to={"/register"}>
                <button className="btn">Sign Up</button>
              </Link>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="logo image"/>
              <h3>Welcome back</h3>
            </div>
            <form action="" className="form grid">
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdEmail className="icon" />
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter email..."
                    onChange={(event) =>{
                      setEmail(event.target.value)
                    }}
                  ></input>
                </div>
              </div>
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter username..."
                    onChange={(event) =>{
                      setUsername(event.target.value)
                    }}
                  ></input>
                </div>
            </div>
              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsShieldLockFill className="icon" />
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter password..."
                    onChange={(event) =>{
                      setPassword(event.target.value)
                    }}
                  ></input>
                </div>
              </div>
              <button type="submit" className="btn flex" onClick={createUser}>
                <span>Register</span>
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
}

export default Register;