"use client";
import LoginModal from "@/app/components/modal/login-modal/login-modal";
import Modal, { ModalMenu, ModalToggle } from "@/app/components/modal/modal";
import { useState } from "react";

const StarRating = () => {
  const [hovered, setHovered] = useState(0);

  return (
    <div className="stars flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <Modal key={star}>
          <ModalToggle>
            <i
              className="bx bxs-star bx-sm"
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(0)}
              style={{
                color: star <= hovered ? "var(--primary-1)" : "#ccc",
                cursor: "pointer",
              }}
            ></i>
          </ModalToggle>
          <ModalMenu>
            <LoginModal />
          </ModalMenu>
        </Modal>
      ))}
    </div>
  );
};

export default StarRating;
