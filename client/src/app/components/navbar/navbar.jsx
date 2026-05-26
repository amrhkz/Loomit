"use client";
import React, { useEffect, useState, useRef } from "react";
import "./navbar.css";
import ThemeDropdown from "./theme-switcher/theme-switcher";
import Link from "next/link";
import SearchField from "./search-field/search-field";

const Navbar = () => {
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleThemeDropdown = () => {
    setIsThemeOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsThemeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="navbar">
      <Link href={"/product"} className="logo">
        <div className="shape"></div>
        <img src="/img/loomit-01.png" alt="" />
      </Link>
      <div className="nav-menu">
        <div className="nav-item gklMsb flex">
          <i className="bx  bx-cup-hot"></i>
          <div className="title">لومیت من</div>
        </div>
        <div className="nav-item dropdown flex">
          <i className="bx  bx-menu-wide"></i>
          <div className="title">
            دسته بندی محصولات
            <ul className="drop-menu">
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-mobile"></i>
                  گوشی و تبلت
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-laptop-alt"></i>
                  لپ تاپ و کامپیوتر
                  <ul className="side-menu">
                    <li className="sidedrop-item">4</li>
                    <li className="sidedrop-item">5</li>
                    <li className="sidedrop-item">6</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-tv"></i>
                  لوازم خانگی
                  <ul className="side-menu">
                    <li className="sidedrop-item">7</li>
                    <li className="sidedrop-item">8</li>
                    <li className="sidedrop-item">9</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-wrist-watch-round"></i>
                  ساعت هوشمند و دست‌بند سلامتی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-gaming"></i>
                  کنسول و تجهیزات بازی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-keyboard"></i>
                  قطعات کامپیوتر و لوازم جانبی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-headphone-alt"></i>
                  هدفون، اسپیکر و تجهیزات صوتی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-camera-alt"></i>
                  دوربین و تجهیزات عکاسی
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-server"></i>
                  مودم و تجهیزات شبکه
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-printer"></i>
                  ماشین های اداری
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
              <li className="dropdown-item">
                <div className="sidedrop">
                  <i className="bx  bx-dots-horizontal-rounded"></i>
                  سایر
                  <ul className="side-menu">
                    <li className="sidedrop-item">سامسونگ</li>
                    <li className="sidedrop-item">شیائومی</li>
                    <li className="sidedrop-item">اپل</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="nav-item hidden xl:block md:block lg:block">
          <div className="title">مقایسه کن</div>
        </div>
        <div className="nav-item hidden lg:flex xl:flex">
          <div className="title">راهنمای خرید</div>
        </div>
        <div className="nav-item hidden lg:flex xl:flex">
          <div className="title">بررسی</div>
        </div>
        <div className="nav-item hidden xl:flex">
          <div className="title">فروشگاه ها</div>
        </div>
        <div className="nav-item dropdown hidden xl:flex">
          <i className="bx  bx-plus"></i>
          <div className="title">
            لومیت
            <ul className="drop-menu">
              <li className="dropdown-item">مجله لومیت</li>
              <li className="dropdown-item">تبلیغات</li>
              <li className="dropdown-item">فرصت های شغلی</li>
              <li className="dropdown-item">درباره ما</li>
              <li className="dropdown-item">تماس با ما</li>
            </ul>
          </div>
        </div>
        <SearchField />
      </div>
      <div className="profile">
        <ThemeDropdown />
        <Link href={"/login"}>
          <i className="bx bx-user-circle bx-sm"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
