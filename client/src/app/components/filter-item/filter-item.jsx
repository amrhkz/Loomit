"use client";
import React, { useState } from "react";
import "./filter-item.css";
import CheckBoxFilter from "./check-box-filter/check-box-filter";
import RangeFilter from "./range-filter/range-filter";
import RateFilter from "./rate-filter/rate-filter";

function FilterItem(props) {
  const [selectedRate, setSelectedRate] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };
  const [rangeValues, setRangeValues] = useState({ min: 0, max: 100 });
  const handleRangeChange = (values) => {
    setRangeValues(values);
  };
  return (
    <div className="filter-item">
      <div className="filter-toggle" onClick={toggleFilter}>
        {isFilterOpen ? (
          <i className="bxr  bx-minus"></i>
        ) : (
          <i className="bxr  bx-plus"></i>
        )}
        {props.title}
      </div>
      {isFilterOpen && (
        <div className="filter-content">
          {/* <CheckBoxFilter /> */}
          <RangeFilter min={200} max={1000} onChange={handleRangeChange} />
          <RateFilter
            selectedRate={selectedRate}
            onSelectRate={setSelectedRate}
          />
        </div>
      )}
    </div>
  );
}

export default FilterItem;
