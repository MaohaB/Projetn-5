import "./collapse.scss";
import React from "react";
const Collapse = (props) => {
  return (
    <div className="Collapse-container-about">
      <div className="Collapse Collapse-about">
        <div className="collapsetitle">
          <span>{props.title}</span>
          <span className="chevron"><i className="fa-solid fa-chevron-down rotate"></i></span>

        </div>
        <div className="collapsecontent">
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
