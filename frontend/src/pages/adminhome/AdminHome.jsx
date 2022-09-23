import React from "react";
import {Link} from "react-router-dom"
import './AdminHome.css'

function AdminHome() {
    return(
        <div>
        <div className='navbar'>
          <Link to="/AdminHome" style={{marginLeft:"-10px"}}><p className='title'>Nestophia</p></Link>
          <Link to='/AdminHome' style={{padding:"0px"}} className='home-link'>
            Home
          </Link>
        </div>

        <div className="top-navigation">
        <center>
        <div style={{borderRadius: "10px 0px 0px 10px", borderRight:"2px solid white"}}>
            <Link className="a2" to="/AdminHome/UserDetails">
                User Details
            </Link> 
        </div>
        <div style={{borderRadius: "0px", borderRight:"2px solid white"}}>
            <Link className="a2" to="/AdminHome/HouseDetails">
                House Details
            </Link> 
        </div>
        <div style={{borderRadius: "0px 10px 10px 0px"}}>
            <Link className="a2" to="/AdminHome/AddHouse">
                Add House
            </Link>
        </div>
        </center>
    </div>


        </div>
    );
}

export  default AdminHome;