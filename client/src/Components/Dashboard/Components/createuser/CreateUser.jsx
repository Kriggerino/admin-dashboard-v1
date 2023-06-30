
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
const CreateUser = () => {

    const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
		address:'',
		extra:''
	})
    const navigate = useNavigate()
	const handleSubmit = (event) => {
		event.preventDefault();

		axios.post('http://localhost:8081/create', data)
		.then(res => {
            console.log(res)
			navigate('/dashboard/user')
		})
		.catch(err => console.log(err));
	}

    return (
        <div classNameName='d-flex flex-column align-items-center pt-4'>
			<h2>Add User</h2>
			<form className="row g-3 w-50" onSubmit={handleSubmit}>
			<div className="col-12">
					<label for="inputName" className="form-label">Name</label>
					<input type="text" className="form-control" id="inputName" placeholder='Enter Name' autoComplete='off'
					onChange={e => setData({...data, name: e.target.value})}/>
				</div>
				<div className="col-12">
					<label for="inputEmail4" className="form-label">Email</label>
					<input type="email" className="form-control" id="inputEmail4" placeholder='Enter Email' autoComplete='off'
					onChange={e => setData({...data, email: e.target.value})}/>
				</div>
				<div className="col-12">
					<label for="inputPassword4" className="form-label">Password</label>
					<input type="password" className="form-control" id="inputPassword4" placeholder='Enter Password'
					 onChange={e => setData({...data, password: e.target.value})}/>
				</div>
				<div className="col-12">
					<label for="inputPassword4" className="form-label">Address</label>
					<input type="text" className="form-control" id="inputAddress4" placeholder='Enter Address'
					 onChange={e => setData({...data, address: e.target.value})}/>
				</div>
				<div className="col-12">
					<label for="inputPassword4" className="form-label">Extra</label>
					<input type="text" className="form-control" id="inputExtra4" placeholder='Enter Extra'
					 onChange={e => setData({...data, extra: e.target.value})}/>
				</div>
				
				<div className="col-12">
					<button type="submit" className="btn btn-primary">Create</button>
				</div>
			</form>
		</div>
    );
};

export default CreateUser;
