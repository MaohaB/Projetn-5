
import { useState } from "react";
import "./carroussel.scss"
const Carrousel = ({pictures}) => {
    const [currentPicture, setCurrentPicture] = useState(0);
    //const enoughPictures = () => { return pictures && pictures.length > 0;};
    console.log("nombre d'images= " + pictures.length)
    const getClassName = (i) => {
        if (i === currentPicture) return "show-picture";
        return "";
    };

    const nextImg =() => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    }
    const previousImg =() => {
        const newCurrentPicture = currentPicture - 1;
        if (newCurrentPicture < 0) {
        setCurrentPicture(pictures.length - 1);
        return;
        }
        setCurrentPicture((currentPicture - 1) % pictures.length);
    }
    return (
        <div className="Carrousel">
            <div className="slider-arrows">
            {pictures.length > 1 ? <div className="arrow arrow-previous" onClick={previousImg}
            >
            <i className="fa-solid fa-chevron-left"></i>
            </div>:<span></span>}

            {pictures.length > 1 ? <div className="arrow arrow-next" onClick={nextImg}
            >
            <i className="fa-solid fa-chevron-right"></i>
            </div>:<span></span>}
            </div>
            
            <div className="nbImg"><span>
                {currentPicture + 1} / {pictures.length}</span></div>
            {pictures.map((pic, i) => ( 
            <img key={pic} src={pic} alt="" className={getClassName(i)} />
            ))}
        </div>
    );
} ;

export default Carrousel; 