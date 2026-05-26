import React, { createContext, useContext, useState } from 'react';

// کانتکست برای مدیریت باز و بسته بودن منو
const DropDownContext = createContext();

const DropDown = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropDownContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        className="dropdown" // کلاس اصلی dropdown که در css داری
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
    </DropDownContext.Provider>
  );
};

const DropToggle = ({ children }) => (
  <div>
    {children}
  </div>
);

const DropMenu = ({ children }) => {
  const { isOpen } = useContext(DropDownContext);
  return isOpen ? (
    <ul className="drop-menu"> {/* کلاس منو که در CSS با hover نمایش داده می‌شود */}
      {children}
    </ul>
  ) : null;
};

const DropItem = ({ label, icon, children }) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      className="drop-menu-item" // کلاس هر آیتم اصلی در منو
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="sidedrop"> {/* کلاس برای محتوای آیتم که شامل آیکون و متن است */}
        <i className={`bx ${icon}`}></i>
        {label}
      </div>
      {children && hover && (
        <div>
          {children}
        </div>
      )}
    </li>
  );
};

const DropSubMenu = ({ children }) => (
  <ul className="sidedrop"> {/* کلاس منوی فرعی که با hover نمایش داده می‌شود */}
    {children}
  </ul>
);

const DropSubItem = ({ children }) => (
  <li className="side-menu"> {/* کلاس هر آیتم در منوی فرعی */}
    {children}
  </li>
);

export {
  DropDown,
  DropToggle,
  DropMenu,
  DropItem,
  DropSubMenu,
  DropSubItem
};
