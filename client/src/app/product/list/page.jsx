"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./product-list.css";
import FilterItem from "@/app/components/filter-item/filter-item";
import Breadcrumb from "@/app/components/bread-crumb/bread-crumb";
import Ads2 from "@/app/components/ads/ads-2/ads-2";
import Navbar from "@/app/components/navbar/navbar";
import Footer from "@/app/components/footer/footer";
import CatCarousel from "@/app/components/cat-carousel/cat-carousel";
import Container from "@/app/components/container/container";
import Content from "@/app/components/container/content/content";

function ProductList() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [openMenuId, setOpenMenuId] = useState(null);
  const toggleMenu = (id) => {
    setOpenMenuId((prevId) => (prevId === id ? null : id));
  };
  const categories = [
    {
      id: 1,
      active: true,
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
  const products = [
    {
      id: 1,
      favorite: true,
      rating: "4.4",
      title: "ردمی نوت 13 پرو شیائومی",
      image: "./img/dilix.webp",
      price: "24.799.000",
    },
    {
      id: 2,
      favorite: false,
      rating: "4.2",
      title: "گلکسی A54 سامسونگ",
      image: "./img/galaxy-a54.webp",
      price: "21.500.000",
    },
    {
      id: 3,
      favorite: false,
      rating: "4.7",
      title: "آیفون 13 اپل",
      image: "./img/iphone-13.webp",
      price: "48.900.000",
    },
    {
      id: 4,
      favorite: true,
      rating: "4.5",
      title: "پوکو X6 پرو",
      image: "./img/poco-x6.webp",
      price: "19.990.000",
    },
    {
      id: 5,
      favorite: false,
      rating: "4.3",
      title: "گلکسی S23 اولترا",
      image: "./img/galaxy-s23-ultra.webp",
      price: "72.000.000",
    },
    {
      id: 6,
      favorite: true,
      rating: "4.6",
      title: "هواوی P60 پرو",
      image: "./img/huawei-p60.webp",
      price: "35.800.000",
    },
    {
      id: 7,
      favorite: false,
      rating: "4.1",
      title: "شیائومی 13T",
      image: "./img/xiaomi-13t.webp",
      price: "27.900.000",
    },
    {
      id: 8,
      favorite: true,
      rating: "4.8",
      title: "آیفون 14 پرومکس",
      image: "./img/iphone-14-pm.webp",
      price: "89.000.000",
    },
    {
      id: 9,
      favorite: false,
      rating: "4.0",
      title: "گلکسی A14 سامسونگ",
      image: "./img/galaxy-a14.webp",
      price: "12.800.000",
    },
    {
      id: 10,
      favorite: true,
      rating: "4.5",
      title: "نوکیا G21",
      image: "./img/nokia-g21.webp",
      price: "7.500.000",
    },
    {
      id: 11,
      favorite: false,
      rating: "4.2",
      title: "آنر X9a",
      image: "./img/honor-x9a.webp",
      price: "15.700.000",
    },
    {
      id: 12,
      favorite: true,
      rating: "4.6",
      title: "وان‌پلاس 11",
      image: "./img/oneplus-11.webp",
      price: "38.500.000",
    },
    {
      id: 13,
      favorite: false,
      rating: "4.3",
      title: "گلکسی M33",
      image: "./img/galaxy-m33.webp",
      price: "11.400.000",
    },
    {
      id: 14,
      favorite: true,
      rating: "4.4",
      title: "ردمی نوت 12",
      image: "./img/redmi-note-12.webp",
      price: "13.900.000",
    },
    {
      id: 15,
      favorite: false,
      rating: "4.7",
      title: "آیفون SE 2022",
      image: "./img/iphone-se.webp",
      price: "22.300.000",
    },
    {
      id: 16,
      favorite: true,
      rating: "4.1",
      title: "شیائومی 11 لایت",
      image: "./img/mi-11-lite.webp",
      price: "17.800.000",
    },
    {
      id: 17,
      favorite: false,
      rating: "4.0",
      title: "گلکسی Z Flip 5",
      image: "./img/galaxy-z-flip5.webp",
      price: "59.000.000",
    },
    {
      id: 18,
      favorite: true,
      rating: "4.6",
      title: "ویوو V27",
      image: "./img/vivo-v27.webp",
      price: "18.200.000",
    },
    {
      id: 19,
      favorite: false,
      rating: "4.2",
      title: "موتورولا Edge 40",
      image: "./img/motorola-edge40.webp",
      price: "25.600.000",
    },
    {
      id: 20,
      favorite: true,
      rating: "4.9",
      title: "آیفون 15 پرو",
      image: "./img/iphone-15-pro.webp",
      price: "98.000.000",
    },
  ];

  return (
    <>
      <Ads2 />
      <Navbar />
      <CatCarousel />
      <div className="product-list">
        <Breadcrumb />
        <div className="list-section">
          <div className="details">
            <div className="title">
              <div className="shape"></div>
              <div>قیمت گوشی</div>
            </div>
            <div className="search-field">
              <h5>محصولات را فیلتر کنید</h5>
              <div className="search-input">
                <div className="icon">
                  <i className="bxr  bx-search"></i>
                </div>
                <input type="search" placeholder="جستجو در نتایج" />
              </div>
            </div>
            <div className="filters">
              <FilterItem title={"قیمت (تومان)"} />
              <FilterItem
                title={"راهنمای خرید"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem title={"سازنده"} content={"اینجا محل محتواست"} />
              <FilterItem
                title={"نوع سیستم عامل"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem
                title={"ابعاد نمایشگر"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem title={"نوع نمایشگر"} content={"اینجا محل محتواست"} />
              <FilterItem
                title={"حداکثر نرخ نوسان"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem title={"رم"} content={"اینجا محل محتواست"} />
              <FilterItem title={"حافظه داخلی"} content={"اینجا محل محتواست"} />
              <FilterItem
                title={"درگاه کارت حافظه"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem
                title={"پیکربندی دوربین پشت"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem
                title={"کلاس ظرفیت باتری"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem
                title={"پشتیبانی از شارژ بی سیم"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem
                title={"جک 3.5 میلی متری"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem
                title={"نوع حسگر اثر انگشت"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem
                title={"پشتیبانی از 5G"}
                content={"اینجا محل محتواست"}
              />
              <FilterItem
                title={"امتیاز کاربران"}
                content={"اینجا محل محتواست"}
              />
            </div>
          </div>
          <div className="list">
            <div className="zoomit-fav">
              <div className="fav-img">
                <img src="../img/zoomit-fav.svg" alt="" />
              </div>
              <div className="fav-content">
                <div className="fav-item">
                  <div className="f-title">لومیت پسند</div>
                  <div className="s-title">
                    راهنمای خرید گوشی به پیشنهاد لومیت
                  </div>
                </div>
                <button>
                  مشاهده لیست
                  <i className="bxr  bx-arrow-left bx-sm"></i>
                </button>
              </div>
            </div>
            <div className="list-content">
              <div className="sort">
                <div className="sort-btn">
                  <i className="bxr  bx-filter"></i>
                  محبوب ترین ها
                </div>
                <div className="sort-count">{products.length} گوشی</div>
              </div>
              <div className="list-menu">
                {products.map((product) => (
                  <div className="list-item" key={product.id}>
                    <div className="list-item-content">
                      <div className="item-img">
                        {product.favorite ? (
                          <div className="zoomit-fav-icon">
                            <i className="bx  bx-trophy-star bx-xs"></i>
                            لومیت پسند
                          </div>
                        ) : (
                          ""
                        )}
                        <img src="../img/product-1.webp" alt="" />
                      </div>
                      <div className="item-details">
                        <div className="title">
                          <div className="rating">
                            <i className="bxr  bxs-star"></i>
                            <span>{product.rating}</span>
                          </div>
                          <div className="name">{product.title}</div>
                          <div className="compare">
                            <input
                              className="custom-checkbox"
                              type="checkbox"
                              name="compare"
                              id="myCheckbox"
                            />
                            <label
                              className="checkbox-label"
                              htmlFor="myCheckbox"
                            >
                              <span className="checkbox-box"></span>
                              <span>مقایسه</span>
                            </label>
                          </div>
                        </div>
                        <div className="details">
                          <div className="detail-item">
                            <i className="bxr  bx-chip bx-sm"></i>
                            <span>6.67 اینچ</span>
                            <span>1220*2712 پیکسل</span>
                          </div>
                          <div className="detail-item">
                            <i className="bxr  bx-chip bx-sm"></i>
                            <span>6.67 اینچ</span>
                            <span>1220*2712 پیکسل</span>
                          </div>
                          <div className="detail-item">
                            <i className="bxr  bx-chip bx-sm"></i>
                            <span>6.67 اینچ</span>
                            <span>1220*2712 پیکسل</span>
                          </div>
                          <div className="detail-item">
                            <i className="bxr  bx-chip bx-sm"></i>
                            <span>6.67 اینچ</span>
                            <span>1220*2712 پیکسل</span>
                          </div>
                        </div>
                        <div className="price">
                          از <span>{product.price}</span> تومان
                        </div>
                        <button onClick={() => toggleMenu(product.id)}>
                          <i className="bxr  bx-chevron-down bx-sm"></i>
                        </button>
                      </div>
                    </div>
                    {openMenuId === product.id && (
                      <div className="hidden-menu">
                        <div className="hidden-images"></div>
                        <div className="hidden-ad-menu">
                          <div className="hidden-ad-item">
                            <div className="ad-item-image">
                              <img src="../img/hidden-ad-1.webp" alt="" />
                            </div>
                            <div className="ad-item-desc">
                              <h5>دیجی کالا</h5>
                              <p>
                                گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو
                                سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت رنگ
                                بنفش گارانتی 18 ماهه پیشتازان فناوری سیب طلایی
                                (سی تلکام)
                              </p>
                            </div>
                            <div className="ad-item-price">
                              <span>24.499.000 تومان</span>
                              <button>خرید</button>
                            </div>
                          </div>
                          <div className="hidden-ad-item">
                            <div className="ad-item-image">
                              <img src="../img/hidden-ad-2.webp" alt="" />
                            </div>
                            <div className="ad-item-desc">
                              <h5>دیجی کالا</h5>
                              <p>
                                گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو
                                سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت رنگ
                                بنفش گارانتی 18 ماهه پیشتازان فناوری سیب طلایی
                                (سی تلکام)
                              </p>
                            </div>
                            <div className="ad-item-price">
                              <span>24.499.000 تومان</span>
                              <button>خرید</button>
                            </div>
                          </div>
                          <div className="hidden-ad-item">
                            <div className="ad-item-image">
                              <img src="../img/hidden-ad-3.webp" alt="" />
                            </div>
                            <div className="ad-item-desc">
                              <h5>دیجی کالا</h5>
                              <p>
                                گوشی موبایل شیائومی مدل Redmi Note 13 Pro 5G دو
                                سیم کارت ظرفیت 512 گیگابایت و رم 12 گیگابایت رنگ
                                بنفش گارانتی 18 ماهه پیشتازان فناوری سیب طلایی
                                (سی تلکام)
                              </p>
                            </div>
                            <div className="ad-item-price">
                              <span>24.499.000 تومان</span>
                              <button>خرید</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
