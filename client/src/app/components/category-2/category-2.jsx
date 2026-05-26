"use client";
import React from "react";
import "./category-2.css";
import Container from "../container/container";
import Content from "../container/content/content";

const Category2 = () => {
  return (
    <Container>
      <Content>
        <div className="category-2">
          <div className="category-item">
            <img src="/img/cat-2-1.webp" alt="" />
          </div>
          <div className="category-item">
            <img src="/img/cat-2-2.webp" alt="" />
          </div>
          <div className="category-item">
            <img src="/img/cat-2-3.webp" alt="" />
          </div>
          <div className="category-item">
            <img src="/img/cat-2-4.webp" alt="" />
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Category2;