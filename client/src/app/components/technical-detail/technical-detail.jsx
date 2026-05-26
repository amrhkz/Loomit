"use client";
import React, { useState } from "react";
import "./technical-detail.css";

function TechnicalDetail() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="technical-detail" id="specs">
      <div className="title">
        <div className="shape"></div>
        <span>مشخصات فنی</span>
      </div>
      <div className="technical-detail-content">
        <div className="detail-items">
          <div className="detail-item">
            <img src="../img/detail-icon-1.svg" alt="" />
            <div className="info">
              <span>6.67 اینچ</span>
              <span>1220 * 2712 پیکسل</span>
            </div>
          </div>
          <div className="detail-item">
            <img src="../img/detail-icon-2.svg" alt="" />
            <div className="info">
              <span>6.67 اینچ</span>
              <span>1220 * 2712 پیکسل</span>
            </div>
          </div>
          <div className="detail-item">
            <img src="../img/detail-icon-3.svg" alt="" />
            <div className="info">
              <span>6.67 اینچ</span>
              <span>1220 * 2712 پیکسل</span>
            </div>
          </div>
          <div className="detail-item">
            <img src="../img/detail-icon-4.svg" alt="" />
            <div className="info">
              <span>6.67 اینچ</span>
              <span>1220 * 2712 پیکسل</span>
            </div>
          </div>
          <button onClick={() => toggleMenu()}>
            <i className={`bx  bx-chevron-${isOpen ? "up" : "down"} bx-xs`}></i>{" "}
            {isOpen ? "بستن" : "مشخصات کامل"}
          </button>
        </div>
        {isOpen && (
          <div className="technical-detail-hidden">
            <h4>ردمی نوت 13 پرو شیائومی</h4>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden-item">
              <div className="title">اطلاعات پایه</div>
              <div className="desc">
                <div className="desc-item">
                  <div className="first">حدود قیمت در زمان عرضه</div>
                  <div className="second">حدود 180 یورو</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ معرفی</div>
                  <div className="second">21 سپتامبر 2023</div>
                </div>
                <div className="desc-item">
                  <div className="first">وضعیت عرضه</div>
                  <div className="second">عرضه شده</div>
                </div>
                <div className="desc-item">
                  <div className="first">تاریخ عرضه</div>
                  <div className="second">
                    21 سپتامبر 2023 (بازار چین) 10 ژانویه 2024 (بازار جهانی)
                  </div>
                </div>
                <div className="desc-item">
                  <div className="first">نوع سیستم‌عامل</div>
                  <div className="second">اندروید</div>
                </div>
                <div className="desc-item">
                  <div className="first">سیستم‌عامل در زمان عرضه</div>
                  <div className="second">اندروید 13</div>
                </div>
                <div className="desc-item">
                  <div className="first">توضیحات سیستم‌عامل</div>
                  <div className="second">
                    عرضه با رابط کاربری MIUI 14 قابل ارتقاء به رابط کاربری
                    HyperOS 3 به‌روزرسانی اصلی اندروید
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TechnicalDetail;
