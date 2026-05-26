import React from "react";
import "./login.css";

function page() {
  return (
    <div className="login">
      <div className="login-content">
        <div className="box-header">
          <img src="./img/login-header.png" alt="" />
        </div>
        <div className="box">
          <form action="">
            <div className="box-title">ورود یا ثبت نام</div>
            <div className="form-content">
              <div className="google-btn-row">
                <button className="white-btn" href="#">
                  <img
                    className="logo-sm"
                    src="./img/google.svg"
                    alt="google logo"
                  />
                  ورود با گوگل
                </button>
                <div className="signup-divider">یا</div>
              </div>
              <div className="input-row">
                <div className="fieldset">
                  <label className="title" htmlFor="Username">
                    ایمیل یا شماره موبایلتان را وارد کنید
                  </label>
                  <input dir="ltr" id="username" type="text" />
                </div>
                <button
                  type="submit"
                  id="signup-signin"
                  className="dark-btn"
                >
                  ادامه
                </button>
                <a className="red-anchor" href="/ForgetPass">
                  گذرواژه را فراموش کردید؟
                </a>
              </div>
            </div>
          </form>
          <a href="">
            بازگشت<i className="bx  bx-arrow-left-stroke"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
