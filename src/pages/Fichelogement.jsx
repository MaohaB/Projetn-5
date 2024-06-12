import React from "react"
import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import "../components/Fichelogement.scss"


import Carrousel from "../components/Carrousel"
import Host from "../components/Host-rating"
import Situation from "../components/Situation"
import Collapse from "../components/Collapse"


const findID = (id) =>{
    return logements.find((logement)=>logement.id === id);
}

const Logement = () => {
    const{id} = useParams();
    const logement = findID(id)
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