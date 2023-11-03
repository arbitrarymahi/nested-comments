import React from "react";
import Card from "@material-ui/core/Card";
import "./Post.css";
import PostHeader from "./PostHeader";
import useStyles from "../Assets/styles/style";
import CommentsSection from "./CommentSection";

export default function Post({ post, userPost, setuserPost }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <PostHeader user={post.user} day={post.day} />
      <CommentsSection
        userPost={userPost}
        comments={post.comments}
        setuserPost={setuserPost}
      />
    </Card>
  );
}
