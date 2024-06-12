import "./collapse.scss";
import React, { useState } from "react";

const Collapse = (props) => {
    const [isContentvisible, setIsContentvisible] = useState(true);

    const showContent = () => {
      setIsContentvisible(!isContentvisible);
    }
  return (
    <div className="Collapse-container-about">
      <div className="Collapse Collapse-about">
        <div className="collapsetitle" onClick={showContent}>
          <span>{props.title}</span>
          <span className={isContentvisible ? "chevron-down" : "chevron-up"}><i className="fa-solid fa-chevron-down"></i></span>

        </div>
        <span className={isContentvisible ? "hidden" : "visible"}>
        <div className="collapsecontent">
         <ul>{props.content}</ul>
        </div> </span>
      </div>
    </div>
  );
};

export default Collapse;
