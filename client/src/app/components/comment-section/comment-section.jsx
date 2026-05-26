"use client";
import React, { useEffect, useRef, useState } from "react";
import "./comment-section.css";
import Title from "../title/title";
import CommentsList from "../comment/comment-list";

const commentsData = [
  {
    id: "1",
    author: "MRaziz",
    userImg: "user-icon-1.webp",
    content: "یک گوشی میانرده عالی",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 24,
    type: "review",
    replies: [
      {
        id: "2",
        author: "Sherek_sebil",
        userImg: "user-icon-2.webp",
        content: "اره جیب ما هم خالی🗿🤝",
        lastSeen: "7 ماه پیش",
        likes: 4,
      },
    ],
  },
  {
    id: "4",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
  {
    id: "5",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
  {
    id: "6",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
  {
    id: "7",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "question",
  },
  {
    id: "8",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
  {
    id: "9",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "question",
  },
  {
    id: "10",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
  {
    id: "11",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
  {
    id: "12",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
  {
    id: "13",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
  {
    id: "14",
    author: "In_ALLAH_we_trust1",
    userImg: "user-icon-3.webp",
    content:
      "سلام قصد خرید این گوشی را وارم واقعا مشخصات کلی اش خوبه ولی الان که قیمت بالا هست و پک چین هست.حداقل دو ماه طول میکشه قیمت اش مناسب‌ بشه و همچنین بیاد تو بازار ایران",
    lastSeen: "بیشتر از 1 سال پیش",
    rating: 5,
    likes: 9,
    type: "review",
  },
];

function CommentSection() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState("محبوب‌ترین");
  const [selectedTab, setSelectedTab] = useState("همه");
  const dropdownRef = useRef(null);

  const handleSortChange = (option) => {
    setSelectedSort(option);
    setShowDropdown(false);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  const sortOptions = ["محبوب‌ترین", "جدیدترین", "قدیمی‌ترین"];
  const tabMap = {
    همه: null,
    "بررسی و نظر": "review",
    سوالات: "question",
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const filteredComments = commentsData.filter((comment) => {
    const tabType = tabMap[selectedTab];
    return tabType ? comment.type === tabType : true;
  });

  const sortedComments = [...filteredComments].sort((a, b) => {
    if (selectedSort === "محبوب‌ترین") return b.likes - a.likes;
    if (selectedSort === "جدیدترین") return Number(b.id) - Number(a.id);
    if (selectedSort === "قدیمی‌ترین") return Number(a.id) - Number(b.id);
    return 0;
  });

  return (
    <div className="user-comments" id="comments">
      <Title>دیدگاه و سوال کاربران</Title>
      <div className="left-content">
        <div className="user-logged">
          <div className="content">
            <div className="row">
              
              <p>275 دیدگاه ثبت شده، نظر تو چیه؟</p>
            </div>
            <p>برای درج نظر وارد شو یا ثبت‌نام کن</p>
          </div>
          <button>ورود / ثبت نام</button>
        </div>
        <div className="comments">
          <div className="sort">
            <div
              className="filter"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <i className="bx bxs-menu-filter"></i>
              {selectedSort}
            </div>

            {showDropdown && (
              <ul className="dropdown" ref={dropdownRef}>
                {sortOptions.map((option) => (
                  <li
                    key={option}
                    onClick={() => handleSortChange(option)}
                    className={option === selectedSort ? "active" : ""}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}

            <ul className="type-tabs">
              {Object.keys(tabMap).map((tab) => (
                <li
                  key={tab}
                  className={selectedTab === tab ? "active" : ""}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
            <div></div>
          </div>

          <CommentsList comments={sortedComments} />
        </div>
      </div>
    </div>
  );
}

export default CommentSection;
