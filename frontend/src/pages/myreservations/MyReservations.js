import { Link } from "react-router-dom";
import "./MyReservations.css"
import Navbar from '../../Components/rightsidebar/SideBar';

const MyReservations = () => {
    return(
        <div>
            <Navbar/>
            <h1 className="amh">My MyReservations</h1>
        </div>
    )
}

export default MyReservations;