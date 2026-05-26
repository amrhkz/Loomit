"use client";
import React, { useEffect, useRef, useState } from "react";
import "./second-nav.css";

const navItems = [
  { id: "specs", label: "مشخصات" },
  { id: "pricing", label: "قیمت و فروشندگان" },
  { id: "compare", label: "مقایسه با رقبا" },
  { id: "summary", label: "جمع بندی" },
  { id: "comments", label: "دیدگاه و سوال", count: 274 },
];

function SecondNav() {
  const [activeId, setActiveId] = useState("product");
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const [showProductDetail, setShowProductDetail] = useState(false);
  const itemRefs = useRef({});
  const navRef = useRef(null);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const triggerSection = document.getElementById("specs");
      if (triggerSection) {
        const rect = triggerSection.getBoundingClientRect();
        if (rect.top <= 64) {
          setShowProductDetail(true);
        } else {
          setShowProductDetail(false);
        }
      }

      let closest = null;
      let minDistance = Number.POSITIVE_INFINITY;

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          if (distance < minDistance && rect.top <= window.innerHeight) {
            minDistance = distance;
            closest = item.id;
          }
        }
      });

      if (closest && closest !== activeId) {
        setActiveId(closest);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeId]);

  useEffect(() => {
    const currentEl = itemRefs.current[activeId];
    if (currentEl && navRef.current) {
      const left = currentEl.offsetLeft;
      const width = currentEl.offsetWidth;

      setIndicatorStyle({
        left: left + "px",
        width: width + "px",
      });
    }
  }, [activeId]);

  return (
    <div className="second-nav">
      <div className="second-nav-content" ref={navRef}>
        {showProductDetail && (
          <div className="product-detail hidden xl:flex">
            <img src="/img/product-1.webp" alt="" />
            <div className="price">
              <div className="low-p">
                از <span className="text-(--success1)">26،819،000</span> تومان
              </div>
              <div className="high-p">
                تا <span className="text-(--error)">33،000،000</span> تومان
              </div>
            </div>
          </div>
        )}

        <div className="nav-items-wrapper">
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`second-nav-item ${
                activeId === item.id ? "active" : ""
              }`}
              onClick={() => handleScrollTo(item.id)}
              ref={(el) => (itemRefs.current[item.id] = el)}
            >
              {item.label}
              {item.count && <span>{item.count}</span>}
            </div>
          ))}
          <div className="indicator" style={indicatorStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default SecondNav;
