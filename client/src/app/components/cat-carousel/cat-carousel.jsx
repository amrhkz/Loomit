import React, { useRef } from "react";
import "./cat-carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Link from "next/link";

function CatCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const categories = [
    {
      id: 1,
      active: false,
      icon: "../img/cat-1.svg",
      title: "گوشی",
    },
    {
      id: 2,
      active: false,
      icon: "../img/cat-2.svg",
      title: "لپتاپ",
    },
    {
      id: 3,
      active: false,
      icon: "../img/cat-3.svg",
      title: "تبلت",
    },
    {
      id: 4,
      active: false,
      icon: "../img/cat-4.svg",
      title: "ساعت هوشمند",
    },
    {
      id: 5,
      active: false,
      icon: "../img/cat-5.svg",
      title: "کنسول بازی",
    },
    {
      id: 6,
      active: false,
      icon: "../img/cat-6.svg",
      title: "خودرو",
    },
    {
      id: 7,
      active: false,
      icon: "../img/cat-7.svg",
      title: "هدفون",
    },
    {
      id: 8,
      active: false,
      icon: "../img/cat-8.svg",
      title: "کارت گرافیک",
    },
    {
      id: 9,
      active: false,
      icon: "../img/cat-9.svg",
      title: "تلویزیون",
    },
    {
      id: 10,
      active: false,
      icon: "../img/cat-10.svg",
      title: "دوربین عکاسی",
    },
    {
      id: 11,
      active: false,
      icon: "../img/cat-11.svg",
      title: "مانیتور",
    },
    {
      id: 12,
      active: false,
      icon: "../img/cat-12.svg",
      title: "پردازنده",
    },
    {
      id: 13,
      active: false,
      icon: "../img/cat-13.svg",
      title: "ماینر",
    },
    {
      id: 14,
      active: false,
      icon: "../img/cat-14.svg",
      title: "پاور بانک",
    },
    {
      id: 15,
      active: false,
      icon: "../img/cat-15.svg",
      title: "اس اس دی",
    },
    {
      id: 16,
      active: false,
      icon: "../img/cat-16.svg",
      title: "مادربرد",
    },
    {
      id: 17,
      active: false,
      icon: "../img/cat-17.svg",
      title: "اسپیکر",
    },
    {
      id: 18,
      active: false,
      icon: "../img/cat-18.svg",
      title: "هارد دیسک",
    },
    {
      id: 19,
      active: false,
      icon: "../img/cat-19.svg",
      title: "مودم و تجهیزات شبکه",
    },
    {
      id: 20,
      active: false,
      icon: "../img/cat-20.svg",
      title: "ماوس",
    },
    {
      id: 21,
      active: false,
      icon: "../img/cat-21.svg",
      title: "هدست واقعیت مجازی",
    },
    {
      id: 22,
      active: false,
      icon: "../img/cat-22.svg",
      title: "یخچال فریزیر",
    },
    {
      id: 23,
      active: false,
      icon: "../img/cat-23.svg",
      title: "کیبورد",
    },
    {
      id: 24,
      active: false,
      icon: "../img/cat-24.svg",
      title: "فلش مموری",
    },
  ];
  return (
    <div className="cat-carousel">
      <div className="cat-carousel-content">
        <button ref={prevRef} className="prev-btn">
          <i className="bx  bx-chevron-right bx-md"></i>
        </button>
        <button ref={nextRef} className="next-btn">
          <i className="bx  bx-chevron-left bx-md"></i>
        </button>
        <Swiper
            slidesPerView="auto"
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Link
                href={"/product/list"}
                className={`category-item ${category.active ? "active" : ""}`}
              >
                <img src={`/img/${category.icon}`} alt="" />
                <div className="title">{category.title}</div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CatCarousel;
