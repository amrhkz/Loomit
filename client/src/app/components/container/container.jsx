"use client";
import React from "react";
import "./container.css";

function Container({ children }) {
  return (
    <div className="page-content">
      <div className="container">{children}</div>
    </div>
  );
}

export default Container;