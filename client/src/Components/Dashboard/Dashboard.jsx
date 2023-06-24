import React from "react";
import "./Dashboard.css";
import Top from './Components/body_section/top/Top';
import Axios from "axios";
import "./sidebar.css";
import logo from "../../Assets/oil-spill.png";
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining, MdOutlinePermContactCalendar } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsCreditCard, BsQuestionCircle, BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="container">
      <div className="sideBar grid">
        <div className="logoDiv flex">
          <img src={logo} alt="Logo Image" />
          <h2>Project Title</h2>
        </div>

        <div className="menuDiv">
          <h3 className="divTitle">QUICK MENU</h3>
          <ul className="menuList grid">
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <IoMdSpeedometer className="icon" />
                <span className="smallText">Dashboard</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink flex">
                <MdDeliveryDining className="icon" />
                <span className="smallText">My Orders</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink flex">
                <MdOutlineExplore className="icon" />
                <span className="smallText">Explore</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink flex">
                <BsTrophy className="icon" />
                <span className="smallText">Products</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="settingDiv">
          <h3 className="divTitle">SETTINGS</h3>
          <ul className="menuList grid">
            <li className="listItem">
              <a href="#" className="menuLink flex">
                <AiOutlinePieChart className="icon" />
                <span className="smallText">Charts</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink flex">
                <BiTrendingUp className="icon" />
                <span className="smallText">Trends</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink flex">
                <MdOutlinePermContactCalendar className="icon" />
                <span className="smallText">Contact</span>
              </a>
            </li>

            <li className="listItem">
              <a href="#" className="menuLink flex">
                <BsCreditCard className="icon" />
                <span className="smallText">Payment</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sideBarCard">
          <BsQuestionCircle className="icon" />
          <div className="cardContent">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <button className="btn">
              <Link to={'/'}>
              Log out
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div className='mainContent'>
            <Top/>
            <div className='bottom flex'>
                <Outlet/>
            </div>
        </div>
    </div>
  );
};

export default Dashboard;
