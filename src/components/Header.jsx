import Nav from "./Nav";
import './Header.scss'
import logo from "../images/LOGOgrnd.png";
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="logo de kasa" />
            <Nav className="header-nav"/>       
        </div>
    );
} ;

export default Header;
