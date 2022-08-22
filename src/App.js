import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom';
import Admin from './components/admin';

import Dashboard from './components/admin/Dashboard';
import Manageuser from './components/admin/Manageuser';
import AdminProfile from './components/admin/Profile';
import UserProfile from './components/user/Profile';
import User from './components/user';
import Home from './components/main/Home';
import Listlocations from './components/main/Listlocations';
import Packagingmaterial from './components/main/Packagingmaterial';
import ResetPassword from './components/main/ResetPassword';
import Viewlocation from './components/main/Viewlocation';
import ContactUs from './components/main/ContactUs';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>

        <Route element={<Main/>} path="main">
          <Route path="login" element={<Login/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="listlocations" element={<Listlocations/>}/>
          <Route path="packagingmaterial" element={<Packagingmaterial/>}/>
          <Route path="resetpassword" element={<ResetPassword/>}/>
          <Route path="viewlocation" element={<Viewlocation/>}/>
          <Route path="contactus" element={<ContactUs/>}/>
          <Route path="signup" element={<Signup/>}/>
          


        </Route>

        <Route element={<Admin/>}path="admin">
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="manageuser" element={<Manageuser/>}/>
          <Route path="profile" element={<AdminProfile/>}/>
        </Route>
      
      <Route element={<User/>}path="user">
          <Route path="profile" element={<UserProfile/>}/>


        </Route>
      </Routes>

      

      </BrowserRouter>
      
    </div>
  );
}

export default App;
