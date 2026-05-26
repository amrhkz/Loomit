import React, { useState } from "react";
import "./check-box-filter.css";

const brands = [
  { name: "سامسونگ", count: 490 },
  { name: "شیائومی", count: 396 },
  { name: "اپل", count: 51 },
  { name: "پوکو", count: 58 },
  { name: "هوآوی", count: 311 },
  { name: "آنر", count: 218 },
  { name: "نوکیا", count: 64 },
  { name: "ال‌جی", count: 28 },
  { name: "وان‌پلاس", count: 37 },
  { name: "ریلمی", count: 41 },
  { name: "ویوو", count: 22 },
  { name: "زد‌تی‌ئی", count: 15 },
];

function CheckBoxFilter() {
  const [showAll, setShowAll] = useState(false);
  const [shouldRenderAll, setShouldRenderAll] = useState(false);

  const toggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => setShouldRenderAll(false), 400);
    } else {
      setShouldRenderAll(true);
      setShowAll(true);
    }
  };

  const visibleBrands = shouldRenderAll ? brands : brands.slice(0, 6);

  return (
    <div className="check-box-list-wrapper">
      <div className={`check-box-list ${showAll ? "expanded" : "collapsed"}`}>
        {visibleBrands.map((brand, index) => {
          const checkboxId = `brand-${index}`;
          return (
            <div className="check-box-item" key={checkboxId}>
              <div className="check-box">
                <input type="checkbox" id={checkboxId} />
                <label htmlFor={checkboxId}>
                  <span className="custom-checkbox"></span>
                  {brand.name}
                </label>
              </div>
              <div className="count">{brand.count}</div>
            </div>
          );
        })}
      </div>
      <div className="show-more-btn" onClick={toggleShowAll}>
        {showAll ? "بستن" : `${brands.length - 6} برند دیگر`}
        <i
          className={`bx bx-chevron-down chevron-icon ${
            showAll ? "rotated" : ""
          }`}
        ></i>
      </div>
    </div>
  );
}

export default CheckBoxFilter;
