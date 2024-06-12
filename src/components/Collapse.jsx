import "./collapse.scss";
import React, { useState } from "react";


const Collapse = (props) => {
  const [isContentvisible, setIsContentvisible] = useState(false);

  const showContent = () => {
    setIsContentvisible(!isContentvisible);
  }

  return (
    <div className="Collapse-container">

      <div className="Collapse Collapse-logement">
        <div className="collapsetitle" onClick={showContent}>
          <span>{props.title}</span>
          <span className={isContentvisible ? "chevron-up" : "chevron-down"}><i className="fa-solid fa-chevron-down"></i></span>
        
        </div>
        
        <span className={isContentvisible ?  "visible": "hidden" }>
        <div className="collapsecontent liste">
         <ul>{props.content}</ul>
        </div></span>

    </div>
    </div>
  );
};

export default Collapse;
