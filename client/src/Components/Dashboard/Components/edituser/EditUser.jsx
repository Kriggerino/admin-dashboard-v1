import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
    const [data, setData] = useState({
		name: '',
		email: '',
		role:''
	})
    
    const navigate = useNavigate()
	
	const {id} = useParams();
    return (
        <div className='editForm'>
           Edit user info 
        </div>
    );
};

export default EditUser;
