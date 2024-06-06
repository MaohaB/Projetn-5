import './Footer.scss'
import logo from "../images/LOGOblanc.png";
const Footer = () => {
    return (
        <div className="footer">
            <img className="logo" src={logo} alt="logo de kasa" />
            <div ><p>© 2020 Kasa. All 
            <br className="mobile"></br> rights reserved</p> </div>    
            </div>
    );
} ;

export default Footer; 