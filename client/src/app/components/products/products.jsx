"use client";
import React, { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./products.css";
import Container from "../container/container";
import Content from "../container/content/content";
import Title from "../title/title";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "آیفون 16 اپل",
    price: "79.810.000",
    rating: 3.7,
    image: "/img/product-1.webp",
    category: "گوشی",
  },
  {
    id: 2,
    title: "گلکسی اس 25 اولترا سامسونگ",
    price: "136.000.000",
    rating: 4.5,
    image: "/img/product-2.webp",
    category: "گوشی",
  },
  {
    id: 3,
    title: "پوکو X7 پرو شیائومی",
    price: "32.850.000",
    rating: 4.7,
    image: "/img/product-3.webp",
    category: "گوشی",
  },
  {
    id: 4,
    title: "آیفون 16 پرو اپل",
    price: "110.250.000",
    rating: 4.4,
    image: "/img/product-4.webp",
    category: "گوشی",
  },
  {
    id: 5,
    title: "گلکسی A56 سامسونگ",
    price: "36.999.000",
    rating: 3.9,
    image: "/img/product-5.webp",
    category: "گوشی",
  },
  {
    id: 6,
    title: "آیفون 13 اپل",
    price: "61.500.000",
    rating: 4.1,
    image: "/img/product-6.webp",
    category: "گوشی",
  },
  {
    id: 7,
    title: "گلکسی اس 24 اولترا سامسونگ",
    price: "113.000.000",
    rating: 4.5,
    image: "/img/product-7.webp",
    category: "گوشی",
  },
  {
    id: 8,
    title: "آیفون 13 پرو مکس اپل",
    price: "64.510.000",
    rating: 3.6,
    image: "/img/product-8.webp",
    category: "گوشی",
  },
  {
    id: 9,
    title: "آیفون 11 اپل",
    price: "32.475.000",
    rating: 3.8,
    image: "/img/product-9.webp",
    category: "گوشی",
  },
  {
    id: 10,
    title: "آیفون 11 پرو مکس اپل",
    price: "47.719.000",
    rating: 3.8,
    image: "/img/product-10.webp",
    category: "گوشی",
  },
  {
    id: 11,
    title: "آیفون 14 پرو مکس اپل",
    price: "116.066.000",
    rating: 3.6,
    image: "/img/product-11.webp",
    category: "گوشی",
  },
  {
    id: 12,
    title: "آیفون 12 اپل",
    price: "41.681.000",
    rating: 4.0,
    image: "/img/product-12.webp",
    category: "گوشی",
  },
  // ----------------------------------------
  {
    id: 13,
    title: "ایکس ویژن XCU655 مدل 65 اینچ",
    price: "46.724.000",
    rating: 3.0,
    image: "/img/home-1.webp",
    category: "لوازم خانگی",
  },
  {
    id: 14,
    title: "هایسنس E7K مدل 55 اینچ",
    price: "32.400.000",

    image: "/img/home-2.webp",
    category: "لوازم خانگی",
  },
  {
    id: 15,
    title: "ال جی MH8265CIS",
    price: "13.900.000",

    image: "/img/home-3.webp",
    category: "لوازم خانگی",
  },
  {
    id: 16,
    title: "تی سی ال C645 مدل 55 اینچ",
    price: "44.000.000",
    rating: 3.7,
    image: "/img/home-4.webp",
    category: "لوازم خانگی",
  },
  {
    id: 17,
    title: "سام الکترونیک CU7700 مدل 50 اینچ",
    price: "22.500.000",

    image: "/img/home-5.webp",
    category: "لوازم خانگی",
  },
  {
    id: 18,
    title: "سامسونگ CU8000 مدل 50 اینچ",
    price: "41.500.000",

    image: "/img/home-6.webp",
    category: "لوازم خانگی",
  },
  {
    id: 19,
    title: "ال جی MH8265DIS",
    price: "13.900.000",
    rating: 5.0,
    image: "/img/home-7.webp",
    category: "لوازم خانگی",
  },
  {
    id: 20,
    title: "سونی S30 مدل 55 اینچ",
    price: "89.800.000",
    rating: 3.0,
    image: "/img/home-8.webp",
    category: "لوازم خانگی",
  },
  {
    id: 21,
    title: "ال جی MA3884VC",
    price: "42.000.000",

    image: "/img/home-9.webp",
    category: "لوازم خانگی",
  },
  {
    id: 22,
    title: "دوو DS-3330",
    price: "112.400.000",
    rating: 3.2,
    image: "/img/home-10.webp",
    category: "لوازم خانگی",
  },
  {
    id: 23,
    title: "تی سی ال P635 مدل 55 اینچ",
    price: "56.547.000",
    rating: 4.2,
    image: "/img/home-11.webp",
    category: "لوازم خانگی",
  },
  {
    id: 24,
    title: "تی سی ال C655 مدل 65 اینچ",
    price: "56.500.000",

    image: "/img/home-12.webp",
    category: "لوازم خانگی",
  },
  // ----------------------
  {
    id: 25,
    title: "انویدیا جی فورس RTX 5090",
    price: "352.500.000",
    rating: 3.5,
    image: "/img/computer-1.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 26,
    title: "انویدیا جی فورس RTX 5070",
    price: "74.020.000",
    rating: 4.9,
    image: "/img/computer-2.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 27,
    title: "انویدیا جی فورس RTX 4070 SUPER",
    price: "69.320.000",
    rating: 4.9,
    image: "/img/computer-3.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 28,
    title: "انویدیا جی فورس RTX 5060",
    price: "41.000.000",
    rating: 4.6,
    image: "/img/computer-4.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 29,
    title: "انویدیا جی فورس RTX 4060",
    price: "39.500.000",
    rating: 4.2,
    image: "/img/computer-5.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 30,
    title: "انویدیا جی فورس RTX 5080",
    price: "149.220.000",
    rating: 3.4,
    image: "/img/computer-6.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 31,
    title: "انویدیا جی فورس RTX 4070",
    price: "71.700.000",
    rating: 4.2,
    image: "/img/computer-7.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 32,
    title: "اینتل Core i9-14900K",
    price: "48.200.000",
    rating: 4.2,
    image: "/img/computer-8.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 33,
    title: "انویدیا جی فورس RTX 5070 Ti",
    price: "105.000.000",
    rating: 4.0,
    image: "/img/computer-9.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 34,
    title: "انویدیا جی فورس RTX 4080 SUPER",
    price: "144.000.000",
    rating: 4.0,
    image: "/img/computer-10.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 35,
    title: "انویدیا جی فورس RTX 5060 Ti نسخه 16 گیگابایت",
    price: "56.980.000",
    rating: 2.5,
    image: "/img/computer-11.webp",
    category: "قطعات کامپیوتر",
  },
  {
    id: 36,
    title: "انویدیا جی فورس RTX 4060 Ti نسخه 8 گیگابایت",
    price: "46.200.000",
    rating: 3.4,
    image: "/img/computer-12.webp",
    category: "قطعات کامپیوتر",
  },
  // ----------------------------------------
  {
    id: 37,
    title: "مک بوک ایر 13 اینچی 2024 اپل - M3 8GB 256GB",
    price: "89.400.000",
    rating: 4.1,
    image: "/img/laptop-1.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 38,
    title: "Zenbook 14 OLED Q415MA ایسوس - Core Ultra 5 125H Arc 8GB 512GB",
    price: "82.000.000",
    rating: 5,
    image: "/img/laptop-2.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 39,
    title: "IdeaPad Slim 3 15IRH8 لنوو - Core i7-13620H UHD 16GB 512GB",
    price: "59.800.000",
    rating: 4.3,
    image: "/img/laptop-3.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 40,
    title: "IdeaPad Slim 3 لنوو - Core i5-13420H UHD Xe 8GB 512GB",
    price: "46.350.000",
    rating: 4.1,
    image: "/img/laptop-4.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 41,
    title: "LOQ 15IRX9 لنوو - Core i7-13650HX RTX 4050 16GB 1TB",
    price: "99.500.000",
    rating: 4.8,
    image: "/img/laptop-5.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 42,
    title:
      "ROG Zephyrus G16 GU603VV ایسوس - Core i7-13620H RTX 4060 16GB 512GB",
    price: "272.896.000",
    rating: 3.6,
    image: "/img/laptop-6.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 43,
    title: "ROG Strix G16 G614JV ایسوس - Core i7-13650HX RTX 4060 16GB 512GB",
    price: "174.969.000",
    rating: 4.4,
    image: "/img/laptop-7.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 44,
    title: "Victus 15-FB2082WM اچ پی - Ryzen 5 8645HS RTX 4050 8GB 512GB",
    price: "99.077.700",
    rating: 5.0,
    image: "/img/laptop-8.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 45,
    title: "مک بوک پرو 14 اینچی 2024 اپل - M4 10-core GPU 16GB 512GB",
    price: "165.900.000",
    rating: 4.5,
    image: "/img/laptop-9.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 46,
    title: "VivoBook 15 X1502ZA ایسوس - Core i7-12700H Iris Xe 8GB 512GB",
    price: "59.800.000",
    rating: 2.0,
    image: "/img/laptop-10.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 47,
    title: "IdeaPad Slim 3 لنوو - Ryzen 7 7730U RX Vega 8 8GB 512GB",
    price: "65.578.000",
    rating: 4.1,
    image: "/img/laptop-11.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  {
    id: 48,
    title: "سرفیس پرو 11 مایکروسافت - X Plus Adreno 16GB 512GB",
    price: "119.790.000",
    rating: 4.0,
    image: "/img/laptop-12.webp",
    category: "لپ‌تاپ‌ها و کامپیوترها",
  },
  // ---------------------------------------------
  {
    id: 49,
    title: "پلی استیشن 5 پرو سونی",
    price: "85.000.000",
    rating: 4.0,
    image: "/img/game-1.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 50,
    title: "پلی استیشن 5 اسلیم سونی",
    price: "52.000.000",
    rating: 4.6,
    image: "/img/game-2.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 51,
    title: "پلی استیشن پورتال سونی",
    price: "24.100.000",
    rating: 3.6,
    image: "/img/game-3.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 52,
    title: "پلی استیشن 5 اسلیم دیجیتال سونی",
    price: "47.000.000",
    rating: 4.8,
    image: "/img/game-4.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 53,
    title: "نینتندو سوییچ 2",
    price: "50.900.000",
    rating: 4.0,
    image: "/img/game-5.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 54,
    title: "لنوو لیجن گو",
    price: "108.000.000",
    rating: 4.9,
    image: "/img/game-6.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 55,
    title: "ایکس باکس سری اس مایکروسافت 1 ترابایت",
    price: "53.500.000",
    rating: 4.6,
    image: "/img/game-7.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 56,
    title: "ROG Ally X ایسوس",
    price: "131.000.000",
    rating: 4.0,
    image: "/img/game-8.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 57,
    title: "استیم دک اولد ولو",
    price: "77.500.000",
    rating: 4.0,
    image: "/img/game-9.webp",
    category: "تجهیزات بازی",
  },
  {
    id: 58,
    title: "گرین لیون GP Pro 7",
    price: "10.235.000",
    rating: 5.0,
    image: "/img/game-10.webp",
    category: "تجهیزات بازی",
  },
  // --------------------------------
  {
    id: 59,
    title: "سامسونگ گلکسی بادز 3 پرو",
    price: "10.900.000",
    rating: 4.7,
    image: "/img/sound-1.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 60,
    title: "سامسونگ گلکسی بادز FE",
    price: "3.545.000",
    rating: 4.6,
    image: "/img/sound-2.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 61,
    title: "انکر SoundCore R50i",
    price: "990.000",
    rating: 4.0,
    image: "/img/sound-3.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 62,
    title: "اپل ایرپاد 4",
    price: "11.695.000",
    rating: 3.0,
    image: "/img/sound-4.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 63,
    title: "سامسونگ گلکسی بادز 3",
    price: "6.699.000",
    rating: 4.6,
    image: "/img/sound-5.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 64,
    title: "اپل ایرپاد 4 نویز کنسلینگ",
    price: "16.775.000",
    rating: 3.3,
    image: "/img/sound-6.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 65,
    title: "کیو سی وای T13 ANC 2",
    price: "1.383.300",
    rating: 4.8,
    image: "/img/sound-7.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 66,
    title: "شیائومی ردمی بادز 5",
    price: "2.598.000",
    rating: 4.3,
    image: "/img/sound-8.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 67,
    title: "شیائومی ردمی بادز 5 پرو",
    price: "4.400.000",
    rating: 4.5,
    image: "/img/sound-9.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 68,
    title: "انکر SoundCore R50i NC",
    price: "1.757.600",
    rating: 4.9,
    image: "/img/sound-10.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 69,
    title: "انکر SoundCore Liberty 4 NC",
    price: "4.410.000",
    rating: 5.0,
    image: "/img/sound-11.webp",
    category: "تجهیزات صوتی",
  },
  {
    id: 70,
    title: "سی ام اف Buds Pro 2",
    price: "4.260.000",
    rating: 5.0,
    image: "/img/sound-12.webp",
    category: "تجهیزات صوتی",
  },
  // -----------------------------------------
  {
    id: 71,
    title: "جنرال لوکس F35 جی ال ایکس",
    price: "6.990.000",

    image: "/img/best-1.webp",
    category: "محصولات",
  },
  {
    id: 72,
    title: "هانوفر 3310 نسخه 2024",
    price: "1.340.000",

    image: "/img/best-2.webp",
    category: "محصولات",
  },
  {
    id: 73,
    title: "هانوفر 105 نسخه 2024",
    price: "1.046.000",

    image: "/img/best-3.webp",
    category: "محصولات",
  },
  {
    id: 74,
    title: "تی سی اچ ONE",
    price: "7.239.000",

    image: "/img/best-4.webp",
    category: "محصولات",
  },
  {
    id: 75,
    title: "گلکسی A17 سامسونگ 4G",
    price: "17.999.000",
    rating: 3.6,
    image: "/img/best-5.webp",
    category: "محصولات",
  },
  {
    id: 76,
    title: "هانوفر 15 پرو",
    price: "1.049.000",

    image: "/img/best-6.webp",
    category: "محصولات",
  },
  {
    id: 77,
    title: "آنر پلی 10",
    price: "7.190.000",

    image: "/img/best-7.webp",
    category: "محصولات",
  },
  {
    id: 78,
    title: "پوکو C85 شیائومی 4G",
    price: "15.199.000",
    rating: 2.8,
    image: "/img/best-8.webp",
    category: "محصولات",
  },
  {
    id: 79,
    title: "هانوفر 150 نسخه 2023",
    price: "1.159.000",

    image: "/img/best-9.webp",
    category: "محصولات",
  },
  {
    id: 80,
    title: "هانوفر 6700",
    price: "1.459.000",

    image: "/img/best-10.webp",
    category: "محصولات",
  },
  {
    id: 81,
    title: "هانوفر 6303",
    price: "1.255.000",

    image: "/img/best-11.webp",
    category: "محصولات",
  },
  {
    id: 82,
    title: "هانوفر 2720 Flip",
    price: "1.980.000",

    image: "/img/best-12.webp",
    category: "محصولات",
  },
];

const brandFilters = {
  گوشی: ["همه برندها", "سامسونگ", "شیائومی و پوکو", "اپل", "نوکیا", "آنر"],
  "لپ‌تاپ‌ها و کامپیوترها": [
    "همه برندهای لپتاپ",
    "لنوو",
    "مک‌بوک",
    "ایسوس",
    "مینی پی‌سی",
    "All in One",
  ],
  "قطعات کامپیوتر": [
    "همه قطعات",
    "کارت گرافیک",
    "پردازنده",
    "مانیتور",
    "حافظه ذخیره سازی",
    "کیس و تجهیزات خنک‌کننده",
    "مادربرد",
  ],
  "لوازم خانگی": [
    "محبوب ترین لوازم خانگی",
    "تلویزیون",
    "یخچال فریزر",
    "لباسشویی",
    "ظرفشویی",
    "گاز و پخت و پز",
    "لوازم شخصی برقی",
    "نظافت خانه",
    "گرمایش و سرمایش",
  ],
  "تجهیزات صوتی": ["هدفون", "اسپیکر", "میکروفون", "ساندباز"],
  "تجهیزات بازی": ["کنسول بازی", "دسته بازی", "کارت گرافیک"],
  محصولات: [
    "جدیدترین گوشی ها",
    "جدیدترین لوازم خانگی",
    "جدیدترین قطعات کامپیوتری",
    "جدیدترین لوازم جانبی گوشی و تبلت",
    "جدیدترین محصولات",
  ],
};

const Products = ({ type }) => {
  const [selectedBrand, setSelectedBrand] = useState("همه برندها");
  const brands = brandFilters[type] || ["همه برندها"];

  const getRatingColor = (rating) => {
    if (rating >= 4) return "success1";
    if (rating >= 3) return "warning1";
    if (rating > 0) return "error";
    return null;
  };
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory = product.category === type;
      if (selectedBrand === "همه برندها") return matchCategory;
      return matchCategory && product.title.includes(selectedBrand);
    });
  }, [type, selectedBrand]);

  return (
    <Container>
      <Content>
        <div className="products">
          <div className="title">
            <div className="top">
              <Title>محبوب‌ترین {type}</Title>
              <Link href={"/product/list"} className="all-products">
                مشاهده همه محصولات
                <i className="bx bx-arrow-left-stroke bx-xs"></i>
              </Link>
            </div>

            {/* فیلتر برندها */}
            <div className="select">
              {brands.map((brand) => (
                <div
                  key={brand}
                  className={`select-item ${
                    selectedBrand === brand ? "active" : ""
                  }`}
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>

          {/* لیست محصولات */}
          <div className="carousel">
            {filteredProducts.length > 0 ? (
              <Swiper
                spaceBetween={32}
                modules={[Navigation]}
                className="mySwiper"
              >
                {filteredProducts.map((product) => {
                  const color = getRatingColor(product.rating);

                  return (
                    <SwiperSlide key={product.id}>
                      <Link href={"/product/detail"} className="product-item">
                        <div className="top">
                          {product.rating && color && (
                            <div
                              className="rating"
                              style={{
                                color: `var(--${color})`,
                                borderColor: `var(--${color})`,
                              }}
                            >
                              <i className="bx bxs-star"></i>
                              <div className="num">{product.rating}</div>
                            </div>
                          )}
                          <img src={product.image} alt={product.title} />
                        </div>

                        <div className="price-section">
                          <div className="title">{product.title}</div>
                          <div className="price">
                            از <span>{product.price}</span> تومان
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            ) : (
              <div className="no-products">محصولی یافت نشد.</div>
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Products;
