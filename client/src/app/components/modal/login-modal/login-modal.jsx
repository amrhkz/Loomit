import React from "react";
import "./login-modal.css"

function LoginModal() {
  return (
    <div className="login-modal">
      <div className="top">
        <div className="title">
          <div className="shape"></div>
          وارد شوید / ثبت‌نام کنید
        </div>
        <div className="close-btn">
          <i className="bx  bxs-x"></i>
        </div>
      </div>
      <div className="bottom">
        <h6>برای ادامه باید وارد حساب کاربری خودت بشی.</h6>
        <p>
          اگر قبلا ثبت‌نام کردی که چه عالی! فقط باید وارد بشی و اگر نه کافیه در
          کوتاه‌ترین زمان ثبت‌نام کنی و از امکانات زیر بهره ببری:
        </p>
        <div className="items">
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 16 16"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.667"
              >
                <path
                  stroke="#7D7D87"
                  strokeWidth=".6668000000000001"
                  d="M3 4.332A1.334 1.334 0 0 1 1.668 3c0-.734.598-1.332 1.332-1.332S4.332 2.266 4.332 3 3.734 4.332 3 4.332m1 10H2l-.332-3.664-1-.336v-3C.668 6.598 1.266 6 2 6h2c.484 0 .91.258 1.14.645M13 4.332c.734 0 1.332-.598 1.332-1.332S13.734 1.668 13 1.668 11.668 2.266 11.668 3 12.266 4.332 13 4.332m-1 10h2l.332-3.664 1-.336v-3C15.332 6.598 14.734 6 14 6h-2a1.33 1.33 0 0 0-1.14.645"
                />
                <path
                  stroke="#E4002B"
                  strokeWidth=".6668000000000001"
                  d="M8 4.668a1.999 1.999 0 1 1 0-4 1.999 1.999 0 1 1 0 4m1.668 10.664H6.332l-.332-4L4.668 11V7.668c0-.738.594-1.336 1.332-1.336h4c.738 0 1.332.598 1.332 1.336V11L10 11.332Zm0 0"
                />
              </g>
            </svg>
            در جامعه کاربران حرفه‌ای زومیت فعالیت کنی
          </div>
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 16 16"
            >
              <g fill="none" strokeWidth="1.667">
                <path
                  stroke="#7D7D87"
                  strokeLinejoin="round"
                  strokeWidth=".6668000000000001"
                  d="M15.332.668H.668v11.664h4.664L8 15l2.668-2.668h4.664Zm0 0"
                />
                <path
                  stroke="#E4002B"
                  strokeWidth=".6668000000000001"
                  d="M11 10H5v-.746c0-.594.387-1.113.957-1.281A7.3 7.3 0 0 1 8 7.668a7.4 7.4 0 0 1 2.043.309c.566.168.957.687.957 1.28ZM6.332 4.668a1.667 1.667 0 1 1 3.336 0c0 .918-.746 2-1.668 2s-1.668-1.082-1.668-2Zm0 0"
                />
              </g>
            </svg>
            از زومیت شخصی‌سازی شده خودت استفاده کنی
          </div>
          <div className="item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              fill="#9696a0"
              viewBox="0 0 16 16"
            >
              <g fill="none" strokeWidth="1.667">
                <path
                  stroke="#7D7D87"
                  strokeLinecap="round"
                  strokeWidth=".6668000000000001"
                  d="m5.168 10.332 1.25 2.766c.242.539 0 1.175-.543 1.414a1.07 1.07 0 0 1-1.414-.54L2.05 8.567"
                />
                <path
                  stroke="#7D7D87"
                  strokeLinejoin="round"
                  strokeWidth=".6668000000000001"
                  d="M10.668 12 5.332 8.668H2.668a1.999 1.999 0 1 1 0-4h2.664l5.336-3.336Zm0 0"
                />
                <path
                  stroke="#E4002B"
                  strokeLinecap="round"
                  strokeWidth=".6668000000000001"
                  d="M14 6.668h1.332m-2.137-3L14.352 3m-1.157 6.668 1.157.664"
                />
                <path
                  stroke="#7D7D87"
                  strokeWidth=".6668000000000001"
                  d="M3.332 4.668v4"
                />
              </g>
            </svg>
            از آخرین قیمت محصولات موردعلاقه‌تون باخبر شوی
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="login">ورود / ثبت‌نام</button>
        <button className="cancell">انصراف</button>
      </div>
    </div>
  );
}

export default LoginModal;
