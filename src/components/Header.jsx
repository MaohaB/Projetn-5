import Nav from "./Nav";
import { Link } from "react-router-dom";
import './Header.scss'
import logo from "../images/LOGOgrnd.png";
const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img className="logo" src={logo} alt="logo de kasa" /></Link>
            <Nav className="header-nav"/>       
        </div>
    );
} ;

export default Header;
