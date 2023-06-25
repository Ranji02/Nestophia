import { Link } from "react-router-dom";
import Navbar from '../../Components/rightsidebar/SideBar';
import "./MyHouses.css"
import { useState,useEffect } from "react";

const MyHouses = () => {
    const [result, changeResult] = useState([]);
    const [result1, changeResult1] = useState([]);
    useEffect(() => {
      refreshData();
    }, []);

    const userDetils = JSON.parse(localStorage.getItem( 'userDetails'));
    console.log(userDetils)
    
    const refreshData = () => {
        const houseId = {houseOwnerId : userDetils.user_id}
        console.log(houseId)
        const headers = {
            method: "POST",
            body: JSON.stringify(houseId),
            headers: {
              'Content-Type': 'application/json'
            }
        };
        fetch('http://localhost:3030/getMyHouse', headers)
        .then(e => e.json())
        .then(e => {
          changeResult(e)
          console.log(e)
          // setPic(e[0].pic1)
        });
      }

    const getHouseTenantDetails = async(event)  => {
      const updateReq = {
        houseId : event.currentTarget.id,  
        status : 'accepted'
      }
      console.log(updateReq)
      const headers = {
        method: "POST",
        body: JSON.stringify(updateReq),
        headers: {
          'Content-Type': 'application/json'
        }
    };
    await fetch('http://localhost:3030/getTenantDetails', headers)
    .then(e => e.json())
    .then(e => {
        // refreshData();
        console.log(result1)
        changeResult1(e)
        // event.stopImmediatePropagation();
    });
    
    }

    const deleteHouse = async(event)  => {
      const updateReq = {
        houseId : event.currentTarget.id
      }
      console.log(updateReq)
      const headers = {
        method: "POST",
        body: JSON.stringify(updateReq),
        headers: {
          'Content-Type': 'application/json'
        }
    };
    await fetch('http://localhost:3030/deleteHouse', headers)
    .then(e => e.json())
    .then(e => {
        refreshData();
        console.log(e)
        // event.stopImmediatePropagation();
    });
    }

    const display = result.map((house)=>
                <div className='my-houses'  key={house.houseId} >
                    <img  className='my-house-img'  src={process.env.PUBLIC_URL + "/" + house.pic1}/>
                    <div className='house-details'>
                            <p className='my-house-name'>{house.houseName}</p>
                            <p className='my-house-permissible-gender'><b>Permissible gender :</b>{house.permissibleGender}</p>
                            <p className='my-house-bhk'><b>BHK :</b>{house.bhk}</p>
                            <p className='my-house-rent'><b>Rent amount :</b>{house.rentAmount}</p><br/>
                            <p className='my-house-city'><b>City :</b>{house.addressLine1 + ", " + house.addressLine2 + ", " + house.city}</p>
                            {/* <p className='houseowner-name' style={{marginTop:"9px"}} ><b>House owner Id :</b>{house.houseOwnerId}</p> */}
                            <p className='house-amenities2'><b>Amenities :</b>{house.amenities}</p><br/>
                            <p className='my-house-availability'><b>Availability :</b>{house.availableSpace} / {house.totalSpace}</p> 
                            <p className='my-house-document' ><b>House document :</b><a href= {process.env.PUBLIC_URL + "/" + house.houseReceipt}>Document Link</a></p>
                            <p className='my-house-request-status'><b>Status :</b>{house.status}</p>
                            
                            {house.availableSpace == house.totalSpace 
                            ? <button className='show-pg-details' id={house.houseId} onClick={deleteHouse}>Delete House</button>
                            :<button className='show-pg-details' id={house.houseId} onClick={getHouseTenantDetails}>Show PG Details</button>}

                            {result1.filter((Tenant) => Tenant.house_id === house.houseId).map((Tenant) => (
                            <div key={Tenant.house_id}>
                            <p className='pg-name'><b>PG name :</b>{Tenant.name}</p>
                            <p className='pg-mobile'><b>PG mobile :</b>{Tenant.mobile}</p>
                            <p className='pg-email'><b>PG e-mail :</b>{Tenant.email}</p>
                            <p className='pg-requested-space'><b>Occupied Space :</b>{Tenant.no_of_people}</p>
                            </div>
                            ))}
                  </div>   
                </div>
    );


    return(
        <div>
            <Navbar/>
            <h1 className="amh">My Houses</h1>
            {display}
        </div>
    )
}

export default MyHouses;