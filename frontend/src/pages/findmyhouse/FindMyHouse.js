import React from "react";
// import Select, { NonceProvider } from "react-select";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, setState } from "react";
import { FaParking } from "react-icons/fa";
import FormInput from "./FormInput"
import Navbar from '../../Components/rightsidebar/SideBar';
import "./FindMyHouse.css"

const FindMyHouse = () => {

    const navigate = useNavigate();
    const [location, setLocation] = useState("")
    const [gender, setGender] = useState("")
    const [bhk, setBHK] = useState("")
    const [budget, setBudget] = useState("")
    const [amenities, setAmenities] = useState([])
    const [noofpersons, setNoofpersons] = useState("")

    //   location: "",
    //   gender: "",
    //   bhk: "",
    //   budget: "",
    //   amenities: "",
    //   noofpersons: "",

  
    // const inputs = [
    //   {
    //     id: 1,
    //     name: "location",
    //     type: "text",
    //     placeholder: "Location",
    //     label: "Location",
    //     required: true,
    //   },
      
    //   {
    //     id: 2,
    //     name: "gender",
    //     type: "text",
    //     placeholder: "Gender",
    //     label: "Gender",
    //     required: true,
    //   },
    //   {
    //     id: 3,
    //     name: "bhk",
    //     type: "text",
    //     placeholder: "BHK",
    //     label: "BHK",
    //     required: true,
    //   },
    //   {
    //     id: 4,
    //     name: "budget",
    //     type: "number",
    //     placeholder: "Budget",
    //     label: "Budget",
    //     required: true,
    //   },
    //   {
    //     id: 5,
    //     name: "amenities",
    //     type: "text",
    //     placeholder: "Amenities",
    //     label: "Amenities",
    //     required: true,
    //   },
    //   {
    //     id: 6,
    //     name: "noofpersons",
    //     type: "text",
    //     placeholder: "Number of Persons",
    //     label: "Number of Persons",
    //     required: true,
    //   },
      
    // ];

    const handleResetClick = () => {
        console.log('You clicked reset.');
        window.location.reload()
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(location+"\n" + gender+"\n" + bhk +"\n"+ budget+"\n" + amenities+"\n" + noofpersons);

    //   if (values.email === "abc@gmail.com" && values.password === "abcd@123"){
    //     console.log('You clicked submit.');
    //     navigate('/home')
    //   }
    };
  
    // const onChange = (e) => {
    //   setValue({[e.target.name]: e.target.value });
    // };

    const handleSelect = (e) => {
        console.log(e)
        const value = [...e.target.selectedOptions].map((option) => option.value);
        setAmenities(value);
    }
 
    const genderOption = [{value:"",label:"Gender"},{ value: "male", label: "male"} , {value: "female", label: "female"}, {value: "transgender", label: "transgender"}]
    const bhkOption = [{value:"",label:"BHK"},{ value: "1BHK", label: "1BHK"} , {value: "2BHK", label: "2BHK"}, {value: "3BHK", label: "3BHK"},{value: "4BHK", label: "4BHK"}]
    const amOption = [{value:"AC", label:"AC"},{value:"Water",label:"Water"},{value:"WiFi",label:"WiFi"},{value:"Power Backup",label:"Power Backup"},{value:"Parking Space",label:"Parking Space"}]
    
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
                    <select className="sel" id="amenities" style={{paddingRight: "153px"}} name="amenities" placeholder="Amenities" onChange={handleSelect} multiple required>
                    <option value="" disabled style={{marginTop:"11px",marginBottom:"8px"}}>Amenities</option>
                        {amOption.map((option) =>  (<option style={{backgroundColor:""}} value={option.value}>{option.label}</option>))}</select>

                    <input type="number" id="noofpersons" name="noofpersons" min="1" placeholder="Number of Persons" onChange={(e) => setNoofpersons(e.target.value)} required></input>
                   
                   
                    {/* {inputs.map((e) => (
                    <input
                        key={e.id}
                        {...e}
                        value={values[e.name]}
                        onChange={onChange}
                    />
                    ))} */}


                    <button type="submit" style={{width:"120px",marginLeft:"2%",paddingRight:"20px",paddingLeft:"20px"}} >Submit</button>
                    <button style={{width:"120px",marginLeft:"20px",paddingRight:"25px",paddingLeft:"25px",marginRight:"15px"}} onClick={handleResetClick}>Reset</button>
                </form>
            </div>
        </div>

        
    )
}

export default FindMyHouse;