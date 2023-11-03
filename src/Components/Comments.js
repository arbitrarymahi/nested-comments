import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./Post.css";
import { findIndex } from "lodash";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import MyTextField from "./MyTextField";
import { useDispatch, useSelector } from "react-redux";
import { updateComments } from "../redux/comments/slice";
import imgSrc from "../Assets/Images/reply.png";

import useStyles from "../Assets/styles/style";

function Comment({ user, text, replies, isRoot, userPost, level, id }) {
  const [showReply, isShowReply] = useState(false);
  const [openReply, isOpenReply] = useState(false);
  const classes = useStyles();
  const selector = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    console.log("level is " + level);
    let value = e.target.value;
    const newReply = {
      id: Math.floor(Math.random() * 90000) + 10000,
      user: user,
      text: value,
      replies: [],
    };

    if (level === 1) {
      const index = findIndex(selector.comments, { id: id[0] });

      const copy = JSON.parse(JSON.stringify(selector));

      const _replies = [...copy.comments[index].replies];

      _replies?.push(newReply);

      copy.comments[index].replies = _replies;

      console.log({ copy, _replies });

      dispatch(updateComments(copy));
    }
    if (level === 2) {
      const index = findIndex(selector.comments, { id: id[0] });
      const index2 = findIndex(selector.comments[index].replies, { id: id[1] });

      const copy = JSON.parse(JSON.stringify(selector));

      const _replies = [...copy.comments[index].replies[index2].replies];

      _replies?.push(newReply);

      copy.comments[index].replies[index2].replies = _replies;

      dispatch(updateComments(copy));
    }
    if (level === 3) {
      const index = findIndex(selector.comments, { id: id[0] });
      const index2 = findIndex(selector.comments[index].replies, { id: id[1] });
      const index3 = findIndex(
        selector.comments[index].replies[index2].replies,
        { id: id[2] }
      );

      const copy = JSON.parse(JSON.stringify(selector));

      const _replies = [
        ...copy.comments[index].replies[index2].replies[index3].replies,
      ];

      _replies?.push(newReply);

      copy.comments[index].replies[index2].replies[index3].replies = _replies;

      dispatch(updateComments(copy));
    }
  };
  function clickOpenReplyHandler() {
    isOpenReply(!openReply);
  }
  function clickHandler() {
    isShowReply(!showReply);
  }

  return (
    <>
      <div className={isRoot ? [classes.root] : [classes.left]}>
        <CardContent>
          <div className={[classes.container]}>
            <Avatar
              className={classes.commentAvatar}
              src={user.profilePicture}
              alt={user.name}
            />
            <div className={[classes.parent]}>
              <div className={[classes.commentTextContainer]}>
                <Typography
                  variant="h6"
                  component="div"
                  className={[classes.heading]}
                >
                  {user.name}
                </Typography>
                <Typography variant="body2" className={[classes.bodyText]}>
                  {text}
                </Typography>
              </div>

              {level < 4 && (
                <button
                  className={classes.replyButton}
                  onClick={clickOpenReplyHandler}
                >
                  Reply
                </button>
              )}
              {openReply && <MyTextField onChangeValue={onInputChange} />}

              {level < 4 && <br />}
              {level < 4 && (
                <button className={classes.blackButton} onClick={clickHandler}>
                  <img className={classes.upsideDown} src={imgSrc} alt="replyIcon" />
                  {replies && replies.length} Replies
                </button>
              )}
            </div>
          </div>
        </CardContent>
        {showReply &&
          replies &&
          replies.map((replies, index) => (
            <Comment
              id={[...id, replies.id]}
              key={index}
              user={replies.user}
              text={replies.text}
              userPost={userPost}
              isRoot={false}
              replies={replies.replies}
              level={level + 1}
            />
          ))}
      </div>
    </>
  );
}

export default Comment;