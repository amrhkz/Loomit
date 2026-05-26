import { useEffect, useRef, useState } from "react";
import "./theme-switcher.css"; // استایل‌های active و dropdown

const ThemeDropdown = () => {
  const dropdownRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("system");

  // اعمال تم روی body و ذخیره در localStorage
  const applyTheme = (mode) => {
    if (mode === "dark") {
      document.body.classList.add("dark");
    } else if (mode === "light") {
      document.body.classList.remove("dark");
    } else if (mode === "system") {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.body.classList.toggle("dark", isDark);
    }
  };

  const changeTheme = (mode) => {
    setTheme(mode);
    localStorage.setItem("theme", mode);
    applyTheme(mode);
    setIsOpen(false); // بعد از انتخاب تم، Dropdown بسته می‌شود
  };

  // بارگذاری تم ذخیره‌شده
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  // برای بستن Dropdown وقتی بیرون کلیک می‌کنیم
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getIcon = () => {
    if (theme === "light") return <i className="bx bx-sun bx-sm"></i>;
    if (theme === "dark") return <i className="bx bx-moon bx-sm"></i>;
    return <i className="bx bx-adjust bx-sm"></i>;
  };

  return (
    <div className="nav-item dropdown dark-toggle" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{getIcon()}</div>
      {isOpen && (
        <div className="theme-dropdown open">
          <button
            className={theme === "light" ? "active" : ""}
            onClick={() => changeTheme("light")}
          >
            <i className="bx bxs-sun"></i> حالت روز
          </button>
          <button
            className={theme === "dark" ? "active" : ""}
            onClick={() => changeTheme("dark")}
          >
            <i className="bx bxs-moon"></i> حالت شب
          </button>
          <button
            className={theme === "system" ? "active" : ""}
            onClick={() => changeTheme("system")}
          >
            <i className="bx bxs-moon-phase-1"></i> حالت خودکار
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemeDropdown;
