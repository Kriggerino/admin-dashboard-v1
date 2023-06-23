import React from 'react';
import './top.css'
import { BiSearchAlt } from 'react-icons/bi';
import { TbMessageCircle } from 'react-icons/tb';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import video from '../../../../../Assets/waves.mp4';
const Top = () => {
    return (
        <div className='topSection'>
            <div className='headerSection flex'>
                <div className='title'>
                    <h1>Welcome.</h1>
                    <p>Hello user.</p>
                </div>
                <div className='searchBar flex'>
                    <input type='text' placeholder='Search dashboard'/>
                    <BiSearchAlt className='icon'/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle className='icon' />
                    <MdOutlineNotificationsNone className='icon' />
                    <div className="adminImage">
                        <img src="" alt="Admin Image"/>
                    </div>
                </div>
            </div>

            {/* <div className="cardSection flex">
                <div className="rightCard flex">
                    <h1>Introduction text</h1>
                    <p>Introducton subtext</p>

                    <div className='buttons flex'>
                        <button className='btn'>Explore more</button>
                        <button className='btn transparent'>Top Sellers</button>
                    </div>

                    <div className='videoDiv'>
                        <video src={video} autoPlay loop muted></video>
                    </div> 
                </div>

                <div className="leftCard flex">
                    <div className='main flex'>
                        <div className='textDiv'>
                            <h1>My Stat</h1>
                            <div className="flex"></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Top;