import "./collapse.scss";
import React from "react";
const Collapse = (props) => {
  return (
    <div className="Collapse-container">
      <div className="Collapse Collapse-logement">
        <div className="collapsetitle">
          <span>{props.title}</span>
          <span className="chevron"><i className="fa-solid fa-chevron-down rotate"></i></span>

        </div>
        <div className="collapsecontent liste">
          <ul>{props.content}</ul>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
