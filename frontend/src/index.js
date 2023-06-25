import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/signup/SignUp.jsx';
import SignIn from './pages/signin/SignIn';
import Home from './pages/home/home'
import MyReservations from './pages/myreservations/MyReservations.js'
import ReceivedRequests from './pages/receivedrequest/ReceivedRequests'
import MyHouses from './pages/myhouses/MyHouses'
import AddMyHouse from './pages/addmyhouse/AddMyHouse'
import FindMyHouse from './pages/findmyhouse/FindMyHouse'
import AdminHome from './pages/adminhome/AdminHome'
import AUserDetails from './pages/Auserdetails/AUserDetails'
import AHouseDetails from './pages/Ahousedetails/AHouseDetails'
import AAddHouse from './pages/Aaddhouse/AAddHouse'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Home/MyReservations" element={<MyReservations/>} />
      <Route path="/Home/ReceivedRequests" element={<ReceivedRequests/>} />
      <Route path="/Home/MyHouses" element={<MyHouses/>} />
      <Route path="/Home/FindMyHouse" element={<FindMyHouse/>} />
      <Route path="/Home/AddMyHouse" element={<AddMyHouse/>} />

      <Route path="/AdminHome" element={<AdminHome/>}/>
      <Route path="/AdminHome/UserDetails" element={<AUserDetails/>}/>
      <Route path="/AdminHome/HouseDetails" element={<AHouseDetails/>}/>
      <Route path="/AdminHome/AddHouse" element={<AAddHouse/>}/>
    </Routes>

  </BrowserRouter>
);