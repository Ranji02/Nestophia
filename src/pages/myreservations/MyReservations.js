// import { Link } from "react-router-dom";
import "./MyReservations.css"
// import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from '../../Components/rightsidebar/SideBar';
import React from "react";
import { Navigate } from "react-router";


const userDetils = JSON.parse(localStorage.getItem( 'userDetails'));
// console.log(userDetils)

function MyReservations() {
    const [result, changeResult] = useState([]);
    useEffect(() => {
      refreshData();
    }, []);
  
    const refreshData = async(e) => {
        const pgid = {pgId : userDetils.user_id}
        
        console.log(pgid)
        const headers = {
            method: "POST",
            body: JSON.stringify(pgid),
            headers: {
              'Content-Type': 'application/json'
            }
        };
  
        await fetch('http://localhost:3030/getMyReservations', headers)
        .then(e => e.json())
        .then(e => {
            console.log(e)
            changeResult(e)
        });
    };

    
    const handleCancelRequest = async(hid, pgid, no_of_people, status) =>{

        const cancelReservation = {
            houseId : hid,
            pgId : pgid,
            noOfPeople : no_of_people,
            status : status
        }
        console.log(cancelReservation)
        // console.log(reservation)

        const headers = {
            method: "POST",
            body: JSON.stringify(cancelReservation),
            headers: {
              'Content-Type': 'application/json'
            }
        };
  
        await fetch('http://localhost:3030/cancelReservation', headers)
        .then(e => e.json())
        .then(e => {
            console.log(e)
            alert("Request Cancelled")
            window.location.reload(); 
        });
    };
  
    const handleCancelReservation = async(hid, pgid, no_of_people, status) =>{

        const cancelReservation = {
            houseId : hid,
            pgId : pgid,
            noOfPeople : no_of_people,
            status : status
        }
        console.log(cancelReservation)
        // console.log(reservation)

        const headers = {
            method: "POST",
            body: JSON.stringify(cancelReservation),
            headers: {
              'Content-Type': 'application/json'
            }
        };
  
        await fetch('http://localhost:3030/cancelReservation', headers)
        .then(e => e.json())
        .then(e => {
            console.log(e)
            alert("Reservation Cancelled")
            window.location.reload(); 
        });
    };
  

const display = result.map((house)=>
                <div className='houses'  key={house.house_id} >
                    <img  className='house-img'  src={process.env.PUBLIC_URL + "/" + house.pic1}/>
                    <div className='house-details'>
                    
                            <p className='house-name'>{house.house_name}</p>
                            <p className='house-permissible-gender2'><b>Permissible gender :</b>{house.permissible_gender}</p>
                            <p className='house-bhk2'><b>BHK :</b>{house.bhk}</p>
                            <p className='house-rent1'><b>Rent amount :</b>{house.rent_amount}</p><br/>
                            <p className='house-city'><b>City :</b>{house.address_line_1 + ", " + house.address_line_2 + ", " + house.city}</p>
                            {/* <p className='houseowner-name' style={{marginTop:"9px"}} ><b>House owner Id :</b>{house.houseOwnerId}</p> */}
                            <p className='house-amenities2'><b>Amenities :</b>{house.amenities}</p><br/>

                            <p className='house-owner-name2'><b>House owner name :</b>{house.name}</p>
                            <p className='house-owner-mobile2'><b>House owner mobile :</b>{house.mobile}</p>
                            <p className='house-owner-email2'><b>House owner e-mail :</b>{house.email}</p><br/>

                            <p className='house-availability2'><b>Availability :</b>{house.available_space} / {house.total_space}</p> 
                            <p className='requested-space'><b>Requested Space :</b>{house.no_of_people}</p>
                            <p className='house-request-status'><b>Status :</b>{house.status}</p><br/>
                            
                            {house.status=='pending'  
                            ? <p><button className='cancel-request' type="button" onClick={()=>handleCancelRequest(house.house_id, userDetils.user_id, house.no_of_people, house.status)}>Cancel Request</button></p>
                            : <p><button className='cancel-request' type="button" onClick={()=>handleCancelReservation(house.house_id, userDetils.user_id, house.no_of_people, house.status)}>Cancel Reservation</button></p>
                            }


                            {/* <p className='house-document' style={{marginTop:"6px"}}><b>House document : </b><a href= {process.env.PUBLIC_URL + "/" + house.houseReceipt}>{house.houseReceipt}</a></p> */}

                            {/* <p className='houseowner-aadhar' ><b>Aadhar card :<a href = {process.env.PUBLIC_URL + "/" + house.aadharCard}>link</a></b></p> */}
                            {/* <p style={{marginLeft : "870px",marginTop : "-40px", fontSize:"25px"}}><b>Status :</b>{house.status}</p> */}
                    </div>   
                </div>
    );

return(
    <div>
        <Navbar/>
        <h1 className="amh">My Reservations</h1>
        {display}

    </div>
);
}

export  default MyReservations;