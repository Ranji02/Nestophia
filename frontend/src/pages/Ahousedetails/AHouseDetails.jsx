import React from "react";
import {Link} from "react-router-dom"

function AHouseDetails() {
    return(
        <div>
        <div className='navbar'>
          <Link to="/AdminHome" style={{marginLeft:"-10px"}}><p className='title'>Nestophia</p></Link>
          <Link to='/AdminHome' style={{padding:"0px"}} className='home-link'>
            Home
          </Link>
        </div>
        <h1 className="amh">House Details</h1>
        </div>
    );
}

export  default AHouseDetails;