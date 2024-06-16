import React, { useEffect } from "react"
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import "../components/Fichelogement.scss"


import Carrousel from "../components/Carrousel"
import Host from "../components/Host-rating"
import Situation from "../components/Situation"
import Collapse from "../components/Collapse"


const Logement = () => {

    const{id} = useParams();
    const logement = logements.find((logement)=>logement.id === id);
    if (!logement) {
        return <Navigate to="/404"/>;
    }


    const host= logement.host
    const name = logement.host.name
    const [firstname, lastname] = name.split(" ");

    return (
        <div className="Logement-page">
            <Carrousel/>
            <div className="infoflex">
                <Situation title={logement.title} 
                location={logement.location} 
                tags={logement.tags}
                 />
                <Host  title={logement.title} host={host} firstname={firstname} lastname={lastname} picture={host.picture} rating={logement.rating} />
            
            </div>
            <div className="collapse-flex">
            <Collapse title="Description" content={logement.description} />
            <Collapse title="Equipement" content={logement.equipments.map((equipment, index) => (
                <li className="equipment-list" key={index}>{equipment}</li>
            ))}/>
            </div>
            
             id : {id}
             nom : {firstname}

                
        </div>
    );
} ;


export default Logement;  