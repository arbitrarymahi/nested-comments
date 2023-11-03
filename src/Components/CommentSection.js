import React from "react";
import "./Post.css";
import { useSelector } from "react-redux";
import Comment from "./Comments";

export default function CommentsSection({ userPost, setuserPost }) {
  const comments = useSelector((state) => state.post.comments);

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment
          id={[comment.id]}
          key={index}
          user={comment.user}
          text={comment.text}
          replies={comment.replies}
          isRoot={true}
          userPost={userPost}
          setuserPost={setuserPost}
          level={1}
        />
      ))}
    </div>
  );
}