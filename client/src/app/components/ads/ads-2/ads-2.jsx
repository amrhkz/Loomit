"use client";
import React from "react";
import "./ads-2.css";

const Ads2 = () => {
  return (
    <div className="ads-2">
      <div className="close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="var(--white)"
          width="16"
          height="16"
        >
          <path
            d="M15.76 3.44a.773.773 0 0 0-1.12 0L9.6 8.48 4.56 3.44a.792.792 0 0 0-1.12 1.12L8.48 9.6l-5.04 5.04a.773.773 0 0 0 0 1.12A.726.726 0 0 0 4 16a.726.726 0 0 0 .56-.24l5.04-5.04 5.04 5.04a.773.773 0 0 0 1.12 0 .773.773 0 0 0 0-1.12L10.72 9.6l5.04-5.04a.773.773 0 0 0 0-1.12z"
            transform="translate(2 2)"
          ></path>
        </svg>
      </div>
      <div className="ads-pic">
        <img src="../img/ads-3.jpg" alt="" />
      </div>
    </div>
  );
};

export default Ads2;
