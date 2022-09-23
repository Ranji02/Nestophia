import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./home.css"
import Navbar from '../../Components/rightsidebar/SideBar';


const Home = () => {
    const navigate = useNavigate()
return(
    <div>
    <Navbar/>
    
    <div className="topnav">
        <div style={{borderRadius: "10px 0px 0px 10px", borderRight:"2px solid white"}}>
            <Link className="a2" to="/Home/FindMyHouse">
                Find my house
            </Link> 
        </div>
        <div style={{borderRadius: "0px 10px 10px 0px"}}>
            <Link className="a2" to="/Home/AddMyHouse">
                Add my house
            </Link>
        </div>
    </div>
    </div>
)
}

export default Home;