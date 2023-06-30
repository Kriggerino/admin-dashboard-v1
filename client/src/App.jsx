import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import User from './Components/Dashboard/Components/user/User';
import EditUser from './Components/Dashboard/Components/edituser/EditUser';
import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import CreateUser from './Components/Dashboard/Components/createuser/CreateUser';
import { useState } from 'react';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div><Login/></div>
//   },
//   {
//     path: '/register',
//     element: <div><Register/></div>
//   },
//   {
//     path: '/dashboard',
//     element: <div><Dashboard/></div>
//   }
// ]);

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}>
       <Route path='/dashboard/user' element={<User/>}></Route>
        {/*<Route path='/profile' element={<Profile />}></Route>*/}
        <Route path='/dashboard/createuser' element={<CreateUser />}></Route>
        <Route path='/dashboard/userEdit/:id' element={<EditUser />}></Route>
      </Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
