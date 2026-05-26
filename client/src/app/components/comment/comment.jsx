"use client";
import React, { useEffect, useRef, useState } from "react";
import "./comment.css";
import Modal, { ModalMenu, ModalToggle } from "../modal/modal";
import LoginModal from "../modal/login-modal/login-modal";

const CommentItem = ({ comment, depth = 0 }) => {
  const [showReplies, setShowReplies] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      className="comment-item"
      style={{ marginRight: depth * 20, width: depth === 0 ? "84%" : "100%" }}
    >
      <div className="comment-top">
        <div className="user-info">
          <div className="user-img">
            <img src={`../img/${comment.userImg}`} />
          </div>
          <div className="user-name">{comment.author}</div>
          <div className="user-seen">{comment.lastSeen}</div>
          <div className="user-rate">
            {comment.rating}
            <i className="bx  bxs-star"></i>
          </div>
        </div>
        <div className="menu-toggle">
          <i
            className="bx  bxs-dots-horizontal-rounded bx-sm"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
          {showMenu && (
            <div className="menu" ref={menuRef}>
              <div className="menu-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="var(--grey-1)"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.35 4.05h-7.8a3.3 3.3 0 0 0-3.3 3.3v4.2a3.3 3.3 0 0 0 3.3 3.3h.3v-1.8h-.3a1.5 1.5 0 0 1-1.5-1.5v-4.2a1.5 1.5 0 0 1 1.5-1.5h7.8a1.5 1.5 0 0 1 1.5 1.5v4.2a1.5 1.5 0 0 1-1.5 1.5h-3.3v1.8h3.3a3.3 3.3 0 0 0 3.3-3.3v-4.2a3.3 3.3 0 0 0-3.3-3.3" />
                  <path d="M18.15 8.85h-.3v1.8h.3a1.5 1.5 0 0 1 1.5 1.5v4.2a1.5 1.5 0 0 1-1.5 1.5h-7.8a1.5 1.5 0 0 1-1.5-1.5v-4.2a1.5 1.5 0 0 1 1.5-1.5h3.3v-1.8h-3.3a3.3 3.3 0 0 0-3.3 3.3v4.2a3.3 3.3 0 0 0 3.3 3.3h7.8a3.3 3.3 0 0 0 3.3-3.3v-4.2a3.3 3.3 0 0 0-3.3-3.3" />
                </svg>
                کپی لینک
              </div>
              <div className="menu-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="var(--grey-1)"
                  viewBox="0 0 24 24"
                >
                  <rect rx="4" />
                  <path d="m21.092 18.4-8.8-15.2a.832.832 0 0 0-1.384 0l-8.8 15.2a.8.8 0 0 0 .692 1.2h17.6a.8.8 0 0 0 .692-1.2m-8.527-10-.378 5.28h-1.173l-.357-5.28zm-.965 8.8a1.174 1.174 0 1 1 1.174-1.174A1.174 1.174 0 0 1 11.6 17.2" />
                </svg>
                گزارش تخلف
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="comment-desc">
        <p>{comment.content}</p>
        <div className="comment-action">
          <Modal>
            <ModalToggle>
              <div className="action-btn">
                <i className="bx  bx-heart"></i>
                {comment.likes}
              </div>
            </ModalToggle>
            <ModalMenu>
              <LoginModal />
            </ModalMenu>
          </Modal>
          <Modal>
            <ModalToggle>
              <button className="action-btn">
                <i className="bx  bxs-reply-big"></i>
              </button>
            </ModalToggle>
            <ModalMenu>
              <LoginModal />
            </ModalMenu>
          </Modal>

          {comment.replies?.length > 0 && (
            <button
              className="action-btn"
              onClick={() => setShowReplies(!showReplies)}
            >
              <i
                className={`bx bx-sm ${
                  showReplies ? "bxs-chevron-up" : "bxs-chevron-down"
                }`}
              ></i>
              {showReplies
                ? "پنهان کردن"
                : `نمایش ${comment.replies.length} پاسخ`}
            </button>
          )}
        </div>
      </div>

      {showReplies && comment.replies?.length > 0 && (
        <div className="reply-list">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
