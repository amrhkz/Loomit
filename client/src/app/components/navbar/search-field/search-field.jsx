"use client";
import React, { useEffect, useRef, useState } from "react";
import "./search-field.css";

function SearchField() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav-item search-area" ref={menuRef}>
      <div className="search-toggle" onClick={() => setIsOpen(!isOpen)}>
        <i className="bx bx-search"></i>
        <div className="title">جستجو</div>
      </div>

      <div className={`search-menu-wrapper ${isOpen ? "open" : "closed"}`}>
        <div className="search-menu">
          <div className="search-menu-content">
            <form action="">
              <div className="search-field">
                <i className="bx bx-search bx-xs"></i>
                <input type="text" placeholder="جستجو..." />
              </div>
              <div className="hot-search">
                <div className="title">
                  <i className="bx bxs-hot bx-xs"></i>
                  داغ ترین ها
                </div>
                <ul>
                  <li>قیمت امروز گوشی</li>
                  <li>قیمت آیفون</li>
                  <li>قیمت لپتاپ</li>
                  <li>قیمت گوشی سامسونگ</li>
                  <li>قیمت تلویزیون</li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchField;
