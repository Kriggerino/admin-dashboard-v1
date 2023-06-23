import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import User from './Components/Dashboard/Components/user/User';

import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

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
        {/*<Route path='/profile' element={<Profile />}></Route>
        <Route path='/create' element={<AddEmployee />}></Route>
  <Route path='/employeeEdit/:id' element={<EditEmployee />}></Route>*/}
      </Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
