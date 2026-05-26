import React from "react";
import "./circular-progress.css";

function CircularProgress({ progress }) {
  const radius = 20; // شعاع دایره
  const circumference = 2 * Math.PI * radius; // محیط دایره
  const offset = circumference - (progress / 5) * circumference; // محاسبه درصد پیشرفت

  return (
    <div className="progress-container">
      <svg width="44" height="44" className="circular-progress">
        <circle
          className="circle-bg"
          cx="22"
          cy="22"
          r={radius}
          strokeWidth="2.5"
        />
        <circle
          className="circle"
          cx="22"
          cy="22"
          r={radius}
          strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"  // اضافه کردن حالت گرد به انتهای خط
        />
      </svg>
      <div className="progress-text">{progress}</div>
    </div>
  );
}

export default CircularProgress;
