/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './Login.css';
import '../../App.css';
import {Link, useNavigate} from 'react-router-dom';
import Axios from 'axios';

import video from '../../Assets/waves.mp4';
import logo from '../../Assets/oil-spill.png'
import {FaUserShield} from 'react-icons/fa';
import {BsShieldLockFill} from 'react-icons/bs';
import {AiOutlineSwapRight} from 'react-icons/ai';


const Login = () =>{
  const[loginUsername, setLoginUsername] = useState('');
  const[loginPassword, setLoginPassword] = useState('');
  const navigateTo = useNavigate();
  const loginUser = (e)=>{
    e.preventDefault();
    Axios.post('http://localhost:3002/login', {
      LoginUsername: loginUsername,
      LoginPassword: loginPassword
    }).then((response)=>{
      console.log(response.data)
       if(response.data.message){
         navigateTo('/')
       } else{
         navigateTo('/dashboard')
       }
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
              <span className="text">Register here</span>
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
            <span className='showMessage'>Login Status will go here</span>
            <form action="" className="form grid">
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter username..."
                    onChange = {(event)=>{
                      setLoginUsername(event.target.value);
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
                    onChange ={(event)=>{
                      setLoginPassword(event.target.value);
                    }}
                  ></input>
                </div>
              </div>
              <button type="submit" className="btn flex" onClick={loginUser}>
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
}

export default Login;