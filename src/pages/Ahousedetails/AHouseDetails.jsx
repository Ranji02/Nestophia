import React from "react";
import { FormProvider } from "react-hook-form";
import {Link} from "react-router-dom"
import {useEffect,useState} from "react"
function AHouseDetails() {
  const [result, changeResult] = useState([]);
  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    fetch('http://localhost:3030/getAllHouses')
    .then(e => e.json())
    .then(e => {
      changeResult(e)
      console.log(e)
      // setPic(e[0].pic1)
    });
  }
  const display = result.map((house)=>
    <div className='houses'  key={house.house_id} >
        <img className='house-img'  src={process.env.PUBLIC_URL + "/" + house.pic1}/>
        <div className='house-details'>
                <p className='house-name'>{house.houseName}</p>
                <p className='house-permissible-gender'><b>Permissible gender :</b>{house.permissibleGender}</p>
                <p className='house-availability'><b>Availability :</b>{house.availableSpace} / {house.totalSpace}</p> <br/>
                <p className='house-city'><b>City :</b>{house.city}</p>
                <p className='house-bhk'><b>BHK :</b>{house.bhk}</p>
                <p className='house-rent'><b>Rent amount :</b>{house.rentAmount}</p><br/>
                <p className='houseowner-name' style={{marginTop:"9px"}} ><b>House owner Id :</b>{house.houseOwnerId}</p>
                <p className='house-amenities'><b>Amenities :</b>{house.amenities}</p><br/>

                <p className='house-document' style={{marginTop:"6px"}}><b>House document : </b><a href= {process.env.PUBLIC_URL + "/" + house.houseReceipt}>{house.houseReceipt}</a></p>

                <p className='houseowner-aadhar' ><b>Aadhar card :<a href = {process.env.PUBLIC_URL + "/" + house.aadharCard}>link</a></b></p>
                <p style={{marginLeft : "870px",marginTop : "-40px", fontSize:"25px"}}><b>Status :</b>{house.status}</p>
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
        <h1 className="amh">House Details</h1>

        {display}

        </div>
    );
}

export  default AHouseDetails;