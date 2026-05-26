"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./compare.css";
import Container from "../container/container";
import Content from "../container/content/content";

const Compare = () => {
  const compares = [
    {
      id: 1,
      rating1: 3.8,
      rating2: 4.4,
      title1: "ردمی نوت 13 پرو شیائومی",
      title1: "ردمی نوت 13 شیائومی نسخه چین",
      image1: "seller-1.webp",
      image1: "seller-1.webp",
      price1: "24.799.000",
      price2: "24.799.000",
    },
    {
      id: 2,
      rating1: 3.8,
      rating2: 4.4,
      title1: "ردمی نوت 13 پرو شیائومی",
      title1: "ردمی نوت 13 شیائومی نسخه چین",
      image1: "seller-1.webp",
      image1: "seller-1.webp",
      price1: "24.799.000",
      price2: "24.799.000",
    },
    {
      id: 3,
      rating1: 3.8,
      rating2: 4.4,
      title1: "ردمی نوت 13 پرو شیائومی",
      title1: "ردمی نوت 13 شیائومی نسخه چین",
      image1: "seller-1.webp",
      image1: "seller-1.webp",
      price1: "24.799.000",
      price2: "24.799.000",
    },
    {
      id: 4,
      rating1: 3.8,
      rating2: 4.4,
      title1: "ردمی نوت 13 پرو شیائومی",
      title1: "ردمی نوت 13 شیائومی نسخه چین",
      image1: "seller-1.webp",
      image1: "seller-1.webp",
      price1: "24.799.000",
      price2: "24.799.000",
    },
    {
      id: 5,
      rating1: 3.8,
      rating2: 4.4,
      title1: "ردمی نوت 13 پرو شیائومی",
      title1: "ردمی نوت 13 شیائومی نسخه چین",
      image1: "seller-1.webp",
      image1: "seller-1.webp",
      price1: "24.799.000",
      price2: "24.799.000",
    },
  ];
  return (
    <Container>
      <Content>
        <div className="compare" id="compare">
          <div className="title">
            <div className="top">
              <div className="fav-products">
                <div className="shape"></div>
                <h5>محبوب‌ترین گوشی‌ها 📱</h5>
              </div>
              <div className="all-products">
                مشاهده همه محصولات
                <i className="bx  bx-arrow-left-stroke bx-sm"></i>{" "}
              </div>
            </div>
          </div>
          <div className="carousel">
            <Swiper
              slidesPerView="auto"
              spaceBetween={32}
              // navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {compares.map((compare) => (
                <SwiperSlide>
                  <div className="product-item">
                    <div className="top">
                      <div className="top-right">
                        <div className="rating">
                          <i className="bx  bxs-star"></i>
                          <div className="num">4.5</div>
                        </div>
                        <img src="../img/product-1.webp" alt="" />
                      </div>
                      <div className="top-right">
                        <div className="rating">
                          <i className="bx  bxs-star"></i>
                          <div className="num">4.5</div>
                        </div>
                        <img src="../img/product-1.webp" alt="" />
                      </div>
                    </div>
                    <div className="price-section">
                      <div className="detail">
                        <div className="title">ردمی نوت 13 پرو شیائومی</div>
                        <div className="price">
                          از <span>23.500.000</span> تومان
                        </div>
                      </div>
                      <div className="detail">
                        <div className="title">ردمی نوت 13 پرو شیائومی</div>
                        <div className="price">
                          از <span>23.500.000</span> تومان
                        </div>
                      </div>
                    </div>
                    <button>
                      مقایسه
                      < i className='bx  bx-arrow-left-stroke bx-xs'  ></i> 
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Compare;
