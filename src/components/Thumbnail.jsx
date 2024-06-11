import React from "react"
import { Link } from 'react-router-dom'
import datas from "../data/logements.json";

{/*const Thumbnail = () => {
    return (
        <div className="Thumbnail">
            <img src="image" alt="iimage du logement" />
            <h3> Nom du logement</h3>
        </div>
    );
} ;

export default Thumbnail;  */}

const Thumbnail = ({id, title, cover}) => {
    return (
        <Link to={"/logement/${id}"} className="Thumb" key={id}>
            <img src={cover} alt={title} />
            <h3>{title}</h3>
        </Link>
    

    );
} ;

export default Thumbnail;