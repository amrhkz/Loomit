"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "./range-filter.css";

const cssValues = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  gap: "2px",
  paddingTop: "10px",
};

const RangeFilter = ({
  min,
  max,
  trackColor = "var(--grey-5)",
  onChange,
  rangeColor = "var(--primary-2)",
  valueStyle = cssValues,
  width = "250px",
  currencyText = "$",
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((max - value) / (max - min)) * 100),
    [min, max]
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxVal);
    const leftPercent = Math.min(minPercent, maxPercent);
    const widthPercent = Math.abs(maxPercent - minPercent);
    if (range.current) {
      range.current.style.left = `${leftPercent}%`;
      range.current.style.width = `${widthPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  useEffect(() => {
    if (minVal !== minValRef.current || maxVal !== maxValRef.current) {
      onChange({ min: minVal, max: maxVal });
      minValRef.current = minVal;
      maxValRef.current = maxVal;
    }
  }, [minVal, maxVal, onChange]);

  return (
    <div className="w-full flex items-center justify-center flex-col gap-4 space-y-14">
      

      <div className="multi-slide-input-container" style={{ width }}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1);
            setMinVal(value);
          }}
          className="thumb thumb-right"
          style={{
            width,
            zIndex: minVal > max - 100 || minVal === maxVal ? 3 : undefined,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1);
            setMaxVal(value);
          }}
          className="thumb thumb-left"
          style={{
            width,
            zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
          }}
        />

        <div className="slider">
          <div
            style={{ backgroundColor: trackColor }}
            className="track-slider"
          />
          <div
            ref={range}
            style={{ backgroundColor: rangeColor }}
            className="range-slider"
          />
        </div>
      </div>
      <div className="w-[250px] px-4 flex items-center justify-between gap-x-5">
        <p className="text-l text-red-400 font-semibold">{minVal}</p>
        <p className="text-l text-red-400 font-semibold">{maxVal}</p>
      </div>
    </div>
  );
};

export default RangeFilter;
