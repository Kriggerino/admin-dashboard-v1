import React from 'react';
import './Dashboard.css';
import Sidebar from './Components/sidebar/sidebar';
import Body from './Components/body_section/body';
const Dashboard = () =>{
    return(
        <div className='container'>
            <Sidebar/>
            <Body/>
        </div>
    );
}

export default Dashboard;