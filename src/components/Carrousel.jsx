import Logement from "../pages/Fichelogement";
import "./carroussel.scss"
const Carrousel = ({imgUrl}) => {
    return (
        <div className="Carrousel">
            <img src={imgUrl} alt=""/>
        </div>
    );
} ;

export default Carrousel; 