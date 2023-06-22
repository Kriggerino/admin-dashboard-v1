import React from 'react';

import './Body.css';
import Top from './top/Top';
import Listing from './listing/Listing';
import Activity from './activity/Activity';

const Body = () => {
    return (
        <div className='mainContent'>
            <Top/>
            <div className='bottom flex'>
                <Listing/>
                <Activity/>
            </div>
        </div>
    );
};

export default Body;
