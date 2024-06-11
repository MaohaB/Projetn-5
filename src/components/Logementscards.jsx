import { Link } from 'react-router-dom'
import Thumb from "../components/Thumbnail";
import datas from "../data/logements.json";



const Logementscards = () => {
    return (
        <div className="Logementscards">
            {datas.map(datas =>{
                return (
            
            <Thumb key={datas.id}
            id={datas.id}
            title={datas.title}
            cover={datas.cover} />
        )})}
        </div>
    );
} ;

export default Logementscards; 