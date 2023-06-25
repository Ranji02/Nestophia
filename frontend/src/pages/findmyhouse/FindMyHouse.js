import React from "react";
// import Select, { NonceProvider } from "react-select";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, setState, useEffect } from "react";
import { FaParking } from "react-icons/fa";
import FormInput from "./FormInput"
import Navbar from '../../Components/rightsidebar/SideBar';
import "./FindMyHouse.css"

const userDetils = JSON.parse(localStorage.getItem( 'userDetails'));
// console.log(userDetils)

const FindMyHouse = () => {
    const [result1, changeResult1] = useState([]);
    useEffect(() => {
      refreshData();
    }, []);
  
    const refreshData = () => {
      fetch('http://localhost:3030/getAllUsers')
      .then(e => e.json())
      .then(e => {
        changeResult1(e)
        // console.log(e)
      });
    }
    const navigate = useNavigate();
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")
    const [bhk, setBHK] = useState("")
    const [budget, setBudget] = useState("")
    const [amenities, setAmenities] = useState([])
    const [noofpersons, setNoofpersons] = useState("")
    const [result, changeResult] = useState([]);

    const handleResetClick = () => {
        // console.log('You clicked reset.');
        window.location.reload()
    }
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        // console.log(location+"\n" + gender+"\n" + bhk +"\n"+ budget+"\n" + amenities.sort().toString() +"\n" + noofpersons);
        const house = {
            permissibleGender : gender,
            bhk : bhk,
            amenities : amenities.sort().toString(),
            rentAmount : budget,
            availableSpace : noofpersons,
            city : location
        }
        // console.log(house)

        const headers = {
            method: "POST",
            body: JSON.stringify(house),
            headers: {
              'Content-Type': 'application/json'
            }
        };
  
        await fetch('http://localhost:3030/getAllAvailableHouses', headers)
        .then(e => e.json())
        .then(e => {
            changeResult(e)
            // console.log(e)
        });

    };

    const handleSendRequest = async(hid, pgid,noofpeople) =>{
        // e.preventDefault();
        // console.log(a,b,c)
        // console.log(hid, pgid, noofpeople)
        const reservation = {
            houseId : hid,
            pgId : pgid,
            noOfPeople : noofpeople,
            status : 'pending'
        }
        // console.log(reservation)

        const headers = {
            method: "POST",
            body: JSON.stringify(reservation),
            headers: {
              'Content-Type': 'application/json'
            }
        };
  
        await fetch('http://localhost:3030/requestReservation', headers)
        .then(e => e.json())
        .then(e => {
            alert("Successfully request sent!!!")
            navigate("/Home")
        });
    };
  
    const handleSelect = (e) => {
        // console.log(e)
        const value = [...e.target.selectedOptions].map((option) => option.value);
        setAmenities(value);
    }
 
    const genderOption = [{value:"",label:"Gender"},{ value: "male", label: "male"} , {value: "female", label: "female"}, {value: "transgender", label: "transgender"}]
    const bhkOption = [{value:"",label:"BHK"},{ value: "1BHK", label: "1BHK"} , {value: "2BHK", label: "2BHK"}, {value: "3BHK", label: "3BHK"},{value: "4BHK", label: "4BHK"}]
    const amOption = [{value:"AC", label:"AC"},{value:"Water",label:"Water"},{value:"WiFi",label:"WiFi"},{value:"Power Backup",label:"Power Backup"},{value:"Parking Space",label:"Parking Space"}]
    
    const display = []
     result.map((house)=>{
        result1.map((userDetail) => {
            if(house.houseOwnerId === userDetail.id){
                // console.log(house.houseOwnerId === userDetail.id);

                display.push(<div className='houses1'  key={house.houseId} >
                    <img  className='house-img1'  src={process.env.PUBLIC_URL + "/" + house.pic1}/>
                    <div className='house-details'>
                            <p className='house-name1'>{house.houseName}</p>
                            <p className='house-permissible-gender1'><b>Permissible gender :</b>{house.permissibleGender}</p>
                            <p className='house-availability1'><b>Availability :</b>{house.availableSpace} / {house.totalSpace}</p> 
                            <p className='house-bhk1'><b>BHK :</b>{house.bhk}</p>
                            <p className='house-rent1'><b>Rent amount :</b>{house.rentAmount}</p><br/>
                            <p className='house-city1'><b>City :</b>{house.addressLine1 + ", " + house.addressLine2 + ", " + house.city}</p>
                            {/* <p className='houseowner-name' style={{marginTop:"9px"}} ><b>House owner Id :</b>{house.houseOwnerId}</p> */}
                            <p className='house-amenities1'><b>Amenities :</b>{house.amenities}</p><br/>

                            <p className='house-owner-name1'><b>House owner name :</b>{userDetail.name}</p>
                            <p className='house-owner-mobile1'><b>House owner mobile :</b>{userDetail.mobile}</p>
                            <p className='house-owner-email1'><b>House owner e-mail :</b>{userDetail.email}</p>
                            <p><button className='contact-owner1' type="button" onClick={()=>handleSendRequest(house.houseId, userDetils.user_id, noofpersons)} >Request Owner</button></p>


                            {/* <p className='house-document' style={{marginTop:"6px"}}><b>House document : </b><a href= {process.env.PUBLIC_URL + "/" + house.houseReceipt}>{house.houseReceipt}</a></p> */}

                            {/* <p className='houseowner-aadhar' ><b>Aadhar card :<a href = {process.env.PUBLIC_URL + "/" + house.aadharCard}>link</a></b></p> */}
                            {/* <p style={{marginLeft : "870px",marginTop : "-40px", fontSize:"25px"}}><b>Status :</b>{house.status}</p> */}
                    </div>   
                </div>)
            }
        })
    });

    return(
        <div>
            <div style={{zIndex:2}}><Navbar/></div>
            
            <h1 className="amh">Find My House</h1>
            <div className="filters">
                <form className="filter-form" style={{zIndex:1}} onSubmit={handleSubmit}>

                    <input type="text" id="location" name="location" placeholder="Location" onChange={(e) => setLocation(e.target.value) } required></input>
                    
                    {/* <input type="text" id="gender" name="gender" placeholder="Gender" onChange={(e) => setGender(e.target.value)} required></input> */}
                    <select className="sel" id="gender" name="gender" onChange={(e) => setGender(e.target.value)} required>{genderOption.map((option) =>  (<option value={option.value} >{option.label}</option>))}</select>
                    
                    <select className="sel"  id="bhk" name="bhk" onChange={(e) => setBHK(e.target.value)} required >{bhkOption.map((option) =>  (<option value={option.value}>{option.label}</option>))}</select>
                    
                    {/* <input type="text" id="bhk" name="bhk" placeholder="BHK" onChange={(e) => setBHK(e.target.value)} required></input> */}
                    
                    <input type="number" id="budget" name="budget" min="1" placeholder="Budget" onChange={(e) => setBudget(e.target.value)} required></input>
                    
                    {/* <input type="text" id="amenities" name="amenities" placeholder="Amenities" onChange={(e) => setAmenities(e.target.value)} required></input> */}
                    <select className="sel select1" id="amenities" style={{paddingRight: "153px"}} name="amenities" placeholder="Amenities" onChange={handleSelect} multiple required>
                    <option value="" disabled style={{marginTop:"11px",marginBottom:"8px"}}>Amenities</option>
                        {amOption.map((option) =>  (<option style={{backgroundColor:""}} value={option.value}>{option.label}</option>))}</select>

                    <input type="number" id="noofpersons" name="noofpersons" min="1" placeholder="Number of Persons" onChange={(e) => setNoofpersons(e.target.value)} required></input>

                    <button type="submit" style={{width:"120px",marginLeft:"2%",paddingRight:"20px",paddingLeft:"20px"}} >Submit</button>
                    <button style={{width:"120px",marginLeft:"20px",paddingRight:"25px",paddingLeft:"25px",marginRight:"15px"}} onClick={handleResetClick}>Reset</button>
                </form>
            </div>

            {display}
        </div>

        
    )
}

export default FindMyHouse;