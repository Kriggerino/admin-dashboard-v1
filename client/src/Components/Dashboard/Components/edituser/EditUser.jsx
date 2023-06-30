import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
const EditUser = () => {
    const [data, setData] = useState({
		username: '',
		email: '',
		role:'',
        address: '',
        extra: ''
	})

    useEffect(()=> {
		axios.get('http://localhost:8081/get/'+id)
		.then(res => {
			setData({...data, username: res.data.Result[0].username,
				email: res.data.Result[0].email,
				role: res.data.Result[0].role, address: res.data.Result[0].address,
                extra: res.data.Result[0].extra
			})
		})
		.catch(err =>console.log(err));
	}, [])
    
    const handleSubmit = (event) => {
		event.preventDefault();
		axios.put('http://localhost:8081/update/'+id, data)
		.then(res => {
			if(res.data.Status === "Success") {
				navigate('/dashboard/user')
			}
		})
		.catch(err => console.log(err));
	}
    const navigate = useNavigate()
	
	const {id} = useParams();
    return (
        <div className='d-flex flex-column align-items-center pt-4'>
        <h2>Update Employee</h2>
        <form className="row g-3 w-50" onSubmit={handleSubmit}>
            <div className="col-12">
                <label for="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
                onChange={e => setData({...data, username: e.target.value})} value={data.username}/>
            </div>
            <div className="col-12">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
                onChange={e => setData({...data, email: e.target.value})} value={data.email}/>
            </div>
            <div className="col-12">
                <label for="inputSalary" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputSalary" placeholder="Enter Role" autoComplete='off'
                onChange={e => setData({...data, role: e.target.value})} value={data.address}/>
            </div>
            <div className="col-12">
                <label for="inputSalary" className="form-label">Extra</label>
                <input type="text" className="form-control" id="inputSalary" placeholder="Enter Role" autoComplete='off'
                onChange={e => setData({...data, role: e.target.value})} value={data.extra}/>
            </div>
            <div className="col-12">
                <label for="inputSalary" className="form-label">Role</label>
                <input type="text" className="form-control" id="inputSalary" placeholder="Enter Role" autoComplete='off'
                onChange={e => setData({...data, role: e.target.value})} value={data.role}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    );
};

export default EditUser;
