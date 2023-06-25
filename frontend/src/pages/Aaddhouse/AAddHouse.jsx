import React from "react";
import {Link} from "react-router-dom"
import {useState, useEffect} from "react"

import './AAddHouse.css'

const AAddHouse = () => {

    const [result, changeResult] = useState([]);
    const [hoDetails, changeHODetaails] = useState([]);
    useEffect(() => {
      refreshData();
    }, []);

    const refreshData = () => {
      fetch('http://localhost:3030/getAllPendingRequests')
      .then(e => e.json())
      .then(e => {
        changeResult(e)
        console.log(e)
        // setPic(e[0].pic1)
      });
    }

    const handleAccept = async(e) => {
        console.log(e)
        const houseId = {"houseId" : e, "status" : "accepted"}
        const headers = {
          method: "POST",
          body: JSON.stringify(houseId),
          headers: {
            'Content-Type': 'application/json'
          }
      };

      await fetch('http://localhost:3030/updateHouse', headers)
      .then(e => e.json())
      .then(e => {
          alert("User's request has been accepted!")
          refreshData();
          // navigate("/AdminHome/AddHouse")
          // setImage(e.pic1)
      });
    }

    const handleReject = async(e)  => {
      console.log(e)
      const houseId = {"houseId" : e, "status" : "rejected"}
      const headers = {
        method: "POST",
        body: JSON.stringify(houseId),
        headers: {
          'Content-Type': 'application/json'
        }
    };

    await fetch('http://localhost:3030/updateHouse', headers)
    .then(e => e.json())
    .then(e => {
        alert("User's request has been rejected!")
        refreshData();
        // navigate("/AdminHome/AddHouse")
        // setImage(e.pic1)
    });
    }

    // console.log(result)

    const display = result.map((house)=>
    <div className='houses'  key={house.house_id} >
        <img className='house-img'  src={process.env.PUBLIC_URL + "/" + house.pic1}/>
        <div className='house-details'>
                <p className='house-name'>{house.house_name}</p>
                <p className='house-permissible-gender'><b>Permissible gender :</b>{house.permissible_gender}</p>
                <p className='house-availability' style={{marginLeft : "950px"}}><b>Availability :</b>{house.available_space} / {house.total_space}</p> <br/>
                <p className='house-city'><b>City :</b>{house.city}</p>
                <p className='house-bhk'><b>BHK :</b>{house.bhk}</p>
                <p className='house-rent' style={{marginLeft : "950px"}}><b>Rent amount :</b>{house.rent_amount}</p><br/>
                <p className='houseowner-name'><b>House owner name :</b>{house.name}</p>
                <p className='house-amenities'><b>Amenities :</b>{house.amenities}</p><br/>
                <p className='houseowner-contact-num' style={{marginLeft : "950px"}}><b>Contact number :</b>{house.mobile}</p>
                <p className='house-document'><b>House document : </b><a href= {process.env.PUBLIC_URL + "/" + house.house_receipt}>{house.house_receipt}</a></p>

                <p className='houseowner-aadhar' ><b>Aadhar card :<a href = {process.env.PUBLIC_URL + "/" + house.aadhar_card}>link</a></b></p>

                <button className='accept-request' onClick={() => handleAccept(house.house_id)} style={{position : "absolute", marginTop : "-5px", marginLeft : "770px"}}>Accept</button>
                <button className='reject-request'onClick={() => handleReject(house.house_id)} style={{position : "absolute", marginTop : "-5px", marginLeft : "970px"}}>Reject</button>
                
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
        <h1 className="amh">Add House</h1>
        
        {display}

        </div>
    );
}


export  default AAddHouse;