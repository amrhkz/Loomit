import React from "react";
import "./title.css";

function Title({ children }) {
  return (
    <div className="title-x">
      <div className="shape"></div>
      <div className="title-item">{children}</div>
    </div>
  );
}

export default Title;
