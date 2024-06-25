
import { useState } from "react";
import "./carroussel.scss"
const Carrousel = ({imgUrl, pictures}) => {
    const [current, setCurrent] = useState(0);
    const enoughPictures = () => {
        return pictures && pictures.length > 0;
    };
    console.log("nombre d'images= " + pictures.length)
    return (
        <div className="Carrousel">
            <div className="slider-arrows">
            {pictures.length > 1 ? <div className="arrow arrow-previous" //onClick={previousImg}
            >
            <i className="fa-solid fa-chevron-left"></i>
            </div>:<span></span>}

            {pictures.length > 1 ? <div className="arrow arrow-next" //onClick={nextImg}
            >
            <i className="fa-solid fa-chevron-right"></i>
            </div>:<span></span>}
            </div>
            
            <div className="nbImg"><span>
                test / {pictures.length}</span></div>

            <img src={imgUrl} alt=""/>
        </div>
    );
} ;

export default Carrousel; 