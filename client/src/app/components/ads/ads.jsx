"use client";
import React from "react";
import "./ads.css";
import Container from "../container/container";
import Content from "../container/content/content";

const Ads = () => {
  return (
    <Container>
      <Content>
        <div className="seperator">
          <div className="title">X تبلیغات</div>
          <div className="line"></div>
        </div>
        <div className="ads">
          <div className="ads-item">
            <img src="../img/ads-1.gif" alt="" />
          </div>
          <div className="ads-item">
            <img src="../img/ads-2.jpg" alt="" />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Ads;