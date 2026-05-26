import React from "react";
import "./rate-filter.css";

const rateOptions = [
  { rate: 4, label: "4 یا بیشتر", count: 22 },
  { rate: 3, label: "3 یا بیشتر", count: 32 },
  { rate: 2, label: "2 یا بیشتر", count: 6 },
  { rate: 1, label: "1 یا بیشتر", count: 0 },
];

function RateFilter({ selectedRate, onSelectRate }) {
  return (
    <div className="rate-filter">
      <div className="rate-filter-list">
        {rateOptions.map((option) => {
          const isDisabled = option.count === 0;
          const isActive = selectedRate === option.rate;

          return (
            <label
              key={option.rate}
              className={`rate-filter-item flex justify-between items-center ${
                isActive ? "active" : ""
              } ${isDisabled ? "disabled" : ""}`}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="rate"
                  value={option.rate}
                  checked={isActive}
                  disabled={isDisabled}
                  onChange={() => onSelectRate?.(option.rate)}
                  className="radio-input"
                />
                <span className="custom-radio" />
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bx bxs-star bx-xs ${
                        i < option.rate ? "active" : ""
                      }`}
                    ></i>
                  ))}
                </div>
                <div>{option.label}</div>
              </div>
              <div className="count">{option.count}</div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default RateFilter;
