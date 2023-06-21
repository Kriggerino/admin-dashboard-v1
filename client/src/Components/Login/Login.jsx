import React from 'react';
import './Login.css';
import '../../App.css';
import {Link} from 'react-router-dom';

import video from '../../Assets/waves.mp4';

import {FaUserShield} from 'react-icons/fa';
import {BsShieldLockFill} from 'react-icons/bs';
import {AiOutlineSwapRight} from 'react-icons/ai';


const Login = () =>{
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
              <img src="" alt="logo image"/>
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
                  ></input>
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
}

export default Login;