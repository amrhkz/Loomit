"use client";
import React, { useState } from "react";
import CommentItem from "./comment";

const CommentsList = ({ comments }) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const handleShowMore = () => {
    setVisibleCount(comments.length);
  };

  return (
    <div className="comment-list">
      {comments.slice(0, visibleCount).map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}

      {comments.length > visibleCount && (
        <button className="show-more-btn" onClick={handleShowMore}>
          <i className="bx  bx-arrow-down-stroke bx-sm"></i> مشاهده نظرات بیشتر
        </button>
      )}
    </div>
  );
};

export default CommentsList;
