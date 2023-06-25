import React from "react";
import {Link} from "react-router-dom"
import {useEffect,useState} from "react"
import './AUserDetails.css'
function AUserDetails() {
  const [result, changeResult] = useState([]);
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    fetch('http://localhost:3030/getAllUsers')
    .then(e => e.json())
    .then(e => {
      changeResult(e)
      console.log(e)
      // setPic(e[0].pic1)
    });
  }
  const display = result.map((user)=>
    <div className='users'  key={user.id} >
        <div className='user-details'>
          
          <tr>
              <td style={{width : "240px"}}><p className='user-name'>{user.name}</p></td>
              <td style={{width : "240px"}}><p className='user-email'>{user.email}</p></td>
               <td> <p className='user-mobile'>{user.mobile}</p></td>
               <td><p className='user-aadhar'><a href = {process.env.PUBLIC_URL + "/" + user.aadharCard}>link</a></p></td>
          </tr>
        </div>   
    </div>
    );

    return(
        <div>
        <div className='navbar'>
          <Link to="/AdminHome" style={{marginLeft:"-10px"}}><p className='title'>Nestophia</p></Link>
          <Link to='/' style={{padding:"0px"}} className='home-link'>
            Logout
          </Link>
        </div>
        <h1 className="amh">User Details</h1>
        <table style={{marginLeft:"210px",marginTop:"20px",backgroundColor: "white", opacity:0.8, border : "1px solid", borderColor : "black"}}>
          <center>
         <tr>
              <td style={{width : "240px",fontSize:"20px", border : "1px solid", padding : "5px", alignItems : "center"}}>  <p className='user-name'><b>User Name</b></p></td>
              <td style={{width : "240px",fontSize:"20px", border : "1px solid", padding : "5px", alignItems : "center"}}><p className='user-email'><b>Email Id</b></p></td>
              <td style={{width : "200px",fontSize:"20px", border : "1px solid", padding : "5px", alignItems : "center"}}> <p className='user-mobile'><b>Mobile Number</b></p></td>
              <td style={{width : "200px",fontSize:"20px",border : "1px solid", padding : "5px", alignItems : "center"}}><p className='user-aadhar'><b>Aadhar card</b></p></td>
          </tr>
        {display}
        </center>
        </table>
        </div>
    );
}

export  default AUserDetails;