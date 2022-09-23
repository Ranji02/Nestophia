import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, setState } from "react";
import "./AddMyHouse.css"
import Navbar from '../../Components/rightsidebar/SideBar';

const AddMyHouse = () => {

    const [housename, setHouseName] = useState("")
    const [houseimages, setHouseImages] = useState("")
    const [housedocument, setHouseDocument] = useState("")
    const [addressline1, setAddressLine1] = useState("")
    const [addressline2, setAddressLine2] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [pincode, setPinCode] = useState("")
    const [pgender, setPgender] = useState("")
    const [BHK, setBHK] = useState("")
    const [rentamount, setRentAmount] = useState("")
    const [amenities, setAmenities] = useState("")
    const [tcapacity, setTotalCapacity] = useState("")
    const [cavailability, setCurrentAavailability] = useState("")

    const handleResetClick = () => {
        console.log('You clicked reset.');
        window.location.reload()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('You clicked submit.');
        console.log(housename +"\n"+ houseimages +"\n"+ housedocument +"\n"+ addressline1 +"\n"+ addressline2 +"\n"+ city +"\n"+ state +"\n"+ pincode +"\n"+ pgender +"\n"+ BHK +"\n"+ rentamount +"\n"+ amenities +"\n"+ tcapacity +"\n"+ cavailability)

    };

    const handleSelect = (e) => {
        console.log(e)
        const value = [...e.target.selectedOptions].map((option) => option.value);
        setAmenities(value);
    }

    const handleHouseDoc = (e) => {
        console.log(e)
        const value = [...e.target.selectedOptions].map((option) => option.value);
        setHouseDocument(value);
    }

    const handleHouseImage = (e) => {
        console.log(e)
        const value = [...e.target.selectedOptions].map((option) => option.value);
        setHouseImages(value);
    }


    
    const amOption = [{value:"AC", label:"AC"},{value:"Water",label:"Water"},{value:"WiFi",label:"WiFi"},{value:"Power Backup",label:"Power Backup"},{value:"Parking Space",label:"Parking Space"}]
    const genderOption = [{value:"",label:"Gender"},{ value: "male", label: "male"} , {value: "female", label: "female"}, {value: "transgender", label: "transgender"}]
    const bhkOption = [{value:"",label:"BHK"},{ value: "1BHK", label: "1BHK"} , {value: "2BHK", label: "2BHK"}, {value: "3BHK", label: "3BHK"},{value: "4BHK", label: "4BHK"}]
    

    return(
        <div>
            <Navbar/>
            <h1 className="amh">Add My House</h1>

            <div className="app">

                <form className="Add-House-Form" onSubmit={handleSubmit}>

                <table>
                    <tr>
                        <td><label>House Name:</label></td>
                        <td><input type="text" id="hname" style={{width:"279px"}} onChange={(e) => setHouseName(e.target.value)} required></input></td>
                        <td><label>House Images:</label></td>
                        <td><input type="file" id="himage" onChange={handleHouseImage} style={{width:"275px",padding:"7px",height:"25px",paddingTop:"8px"}} multiple required></input><br/></td>                 
                    </tr>
                    <tr>
                        <td><label>House Document:</label></td>
                        <td><input type="file" id="hdoc" onChange={handleHouseDoc} style={{width:"275px",padding:"7px",height:"25px",paddingTop:"8px"}} multiple required></input></td>
                        <td><label>Address Line1:</label></td>
                        <td><input type="text" id="a_l1" style={{width:"279px"}} onChange={(e) => setAddressLine1(e.target.value)} required></input><br/></td>
                    </tr>
                    <tr>
                        <td><label>Address Line2:</label></td>
                        <td><input type="text" id="a_l2" style={{width:"279px"}} onChange={(e) => setAddressLine2(e.target.value)} required></input></td>
                        <td><label>City:</label></td>
                        <td><input type="text" id="city" style={{width:"279px"}} onChange={(e) => setCity(e.target.value)} required></input><br/></td>
                    </tr>
                    <tr>
                        <td><label>State:</label></td>
                        <td><input type="text" id="state" style={{width:"279px"}} onChange={(e) => setState(e.target.value)} required></input></td>
                        <td><label>Pin Code:</label></td>
                        <td><input type="number" style={{width:"279px"}} pattern="[0-9]{6}" id="pincode" onChange={(e) => setPinCode(e.target.value)} required></input><br/></td>
                    </tr>
                    <tr>
                        <td><label>Permissible Gender:</label></td>
                        <td><select className="sel" style={{width:"289px",margin:"10px"}} id="pgender" onChange={(e) => setPgender(e.target.value)} required>{genderOption.map((option) =>  (<option value={option.value} >{option.label}</option>))}</select></td>
                        <td><label>BHK:</label></td>
                        <td><select className="sel" style={{width:"289px"}} id="bhk" onChange={(e) => setBHK(e.target.value)} required >{bhkOption.map((option) =>  (<option value={option.value}>{option.label}</option>))}</select><br/></td>
                    </tr>
                    <tr>
                        <td><label>Rent Amount:</label></td>
                        <td><input type="number" id="rentamount" style={{width:"279px"}} min="1" onChange={(e) => setRentAmount(e.target.value)} required></input></td>
                        <td><label>Amenities:</label></td>
                        <td><select className="sel" style={{width:"289px"}} id="amenities" onChange={handleSelect} multiple required>
                        <option value="" disabled style={{marginTop:"11px",marginBottom:"8px"}}>Amenities</option>
                        {amOption.map((option) =>  (<option style={{backgroundColor:""}} value={option.value}>{option.label}</option>))}</select><br/></td>
                    </tr>
                    <tr>
                        <td><label>Total Capacity:</label></td>
                        <td><input type="number" id="tc" min="1" style={{width:"279px"}} onChange={(e) => setTotalCapacity(e.target.value)} required></input></td>
                        <td><label>Current Availability:</label></td>
                        <td><input type="number" id="ca" min="1" style={{width:"279px"}} onChange={(e) => setCurrentAavailability(e.target.value)} required></input><br/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><button type="submit" style={{width:"150px",marginRight:"-11%",paddingRight:"20px",paddingLeft:"20px",fontSize:"20px",height:"45px"}} >Add</button></td>
                        <td><button style={{width:"150px",marginLeft:"25%",paddingRight:"25px",paddingLeft:"25px",fontSize:"20px",height:"45px"}} onClick={handleResetClick}>Reset</button></td>
                        <td></td>
                    </tr>
                </table>

                </form>
                </div>
            </div>
  );
}

export default AddMyHouse;