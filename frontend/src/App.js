import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import { BrowserRouter, Route, Link, Routes, Navigate } from 'react-router-dom';
import Admin from './components/admin';

import Dashboard from './components/admin/Dashboard';
import Manageuser from './components/admin/Manageuser';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import User from './components/user';
import Home from './components/main/Home';


import ContactUs from './components/main/ContactUs';



import Vieworders from './components/admin/Vieworders';
import ListBlog from './components/user/ListBlog';
import ManageBlog from './components/user/ManageBlog';
import VideoManager from './components/admin/VideoManager';
import ResetPassword from './components/main/ResetPassword';
import Addvideo from './components/user/Addvideo';
import AddBlog from './components/user/AddBlog';
import ManageVideo from './components/user/ManageVideo';
import Authorizer from './components/Auth';
import { Card } from '@mui/material';
import Sidebar from './components/admin/Sidebar';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>

          <Route path="/" element={
            <Navigate to="/main/home" />
          } />
          <Route element={<Main />} path="main">
            <Route path="login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="listblog" element={<ListBlog />} />


            <Route path="resetpassword" element={<ResetPassword />} />


            <Route path="contactus" element={<ContactUs />} />
            <Route path="signup" element={<Signup />} />
            


          </Route>

          <Route element={<Admin />} path="admin">
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sidebar" element={<Sidebar />} />
            <Route path="manageuser" element={<Manageuser />} />
            <Route path="profile" element={<AdminProfile />} />
            
          
            <Route path="vieworders" element={<Vieworders />} />
            <Route path="videomanager" element={<VideoManager />} />

          </Route>

          <Route element={<User />} path="user">
            <Route path="profile" element={<UserProfile />} />
            <Route path="listblog" element={<ListBlog />} />
            <Route path="manageblog" element={<ManageBlog />} />
            <Route path='addblog' element={
            <Authorizer>
              <AddBlog />
            </Authorizer>} />
            <Route path="managevideo" element={<ManageVideo />} />
            <Route path='addvideo' element={
              <Authorizer>
                <Addvideo/>
                </Authorizer>} />
             
           


          </Route>
        </Routes>



      </BrowserRouter>

    </div>
  );
}

export default App;
