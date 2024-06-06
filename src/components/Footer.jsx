import './Footer.scss'
import logo from "../images/LOGOblanc.png";
const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="logo de kasa" />
            <div className="desktop"><p>© 2020 Kasa. All rights reserved</p> </div>
            <div className="mobile"><p>© 2020 Kasa. All
            <br></br> rights reserved</p> </div>    
            </div>
    );
} ;

export default Footer; 