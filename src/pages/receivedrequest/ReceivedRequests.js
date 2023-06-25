import { Link } from "react-router-dom";
import {useState, useEffect} from "react"
import Navbar from '../../Components/rightsidebar/SideBar';
import "./ReceivedRequests.css"

const ReceivedRequests = () => {
    const userDetils = JSON.parse(localStorage.getItem( 'userDetails'));
    // console.log(userDetils)
    const [result, changeResult] = useState([]);
    const [hoDetails, changeHODetaails] = useState([]);
    useEffect(() => {
      refreshData();
    }, []);

    const refreshData = async(e) => {
      const hoid = {houseOwnerId : userDetils.user_id}
        
        console.log(hoid)
        const headers = {
            method: "POST",
            body: JSON.stringify(hoid),
            headers: {
              'Content-Type': 'application/json'
            }
        };
  
        await fetch('http://localhost:3030/getAllMyRRHouses', headers)
        .then(e => e.json())
        .then(e => {
            console.log(e)
            changeResult(e)
        });
    };

    const handleAccept = async(house_id, pg_id, no_of_people) => {
        const updateReq = {
          houseId : house_id, 
          pgId : pg_id, 
          status : 'accepted',
          noOfPeople : no_of_people
        }
        console.log(updateReq)
        const headers = {
          method: "POST",
          body: JSON.stringify(updateReq),
          headers: {
            'Content-Type': 'application/json'
          }
      };

      await fetch('http://localhost:3030/updateRequestHouse', headers)
      .then(e => e.json())
      .then(e => {
          alert("User's request has been accepted!")
          refreshData();
          // navigate("/AdminHome/AddHouse")
          // setImage(e.pic1)
      });
    }

    const handleReject = async(house_id, pg_id, no_of_people)  => {
      const updateReq = {
        houseId : house_id, 
        pgId : pg_id, 
        status : 'rejected',
        noOfPeople : no_of_people
      }
      console.log(updateReq)
      const headers = {
        method: "POST",
        body: JSON.stringify(updateReq),
        headers: {
          'Content-Type': 'application/json'
        }
    };

    await fetch('http://localhost:3030/updateRequestHouse', headers)
    .then(e => e.json())
    .then(e => {
        alert("User's request has been rejected!")
        refreshData();
        // navigate("/AdminHome/AddHouse")
        // setImage(e.pic1)
    });
    }

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

                            <p className='house-owner-name2'><b>PG name :</b>{house.name}</p>
                            <p className='house-owner-mobile2'><b>PG mobile :</b>{house.mobile}</p>
                            <p className='house-owner-email2'><b>PG e-mail :</b>{house.email}</p><br/>

                            <p className='house-availability2'><b>Availability :</b>{house.available_space} / {house.total_space}</p> 
                            <p className='requested-space'><b>Requested Space :</b>{house.no_of_people}</p>
                            {/* <p className='house-request-status'><b>Status :</b>{house.status}</p><br/> */}
                            
                            {/* <p><button className='cancel-request' type="button" onClick={()=>handleCancelRequest(house.house_id, userDetils.user_id)} >Cancel Request</button></p> */}
                            <button className='accept-request1' onClick={() => handleAccept(house.house_id, house.pg_id, house.no_of_people)}>Accept</button>
                            <button className='reject-request1'onClick={() => handleReject(house.house_id, house.pg_id, house.no_of_people)}>Reject</button>
                

                            {/* <p className='house-document' style={{marginTop:"6px"}}><b>House document : </b><a href= {process.env.PUBLIC_URL + "/" + house.houseReceipt}>{house.houseReceipt}</a></p> */}

                            {/* <p className='houseowner-aadhar' ><b>Aadhar card :<a href = {process.env.PUBLIC_URL + "/" + house.aadharCard}>link</a></b></p> */}
                            {/* <p style={{marginLeft : "870px",marginTop : "-40px", fontSize:"25px"}}><b>Status :</b>{house.status}</p> */}
                    </div>   
                </div>
    );


    return(
        <div>
            <Navbar/>
            <h1 className="amh">Received Requests</h1>
            {display}
        </div>
    )

}
export default ReceivedRequests;