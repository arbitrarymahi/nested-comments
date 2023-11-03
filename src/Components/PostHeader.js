import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import "./Post.css";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import useStyles from "../Assets/styles/style";

export default function PostHeader({ user, day }) {
    const classes = useStyles();
    return (
      <>
        <CardHeader
          avatar={
            <Avatar
              src={user.profilePicture}
              alt={user.name}
              className={classes.mainAvatar}
            />
          }
          title={<span className="titleName">{user.name} </span>}
          subheader={<span className="subtitle">{day} </span>}
          className="topLayout"
          titleTypographyProps={{ fontWeight: "600" }}
        />
        <CardContent className="borderTop">
          <Typography className="postTitle">Celebrating New Year</Typography>
          <Typography className="body1">
            One more year loaded with sweet recollections and cheerful times has
            passed. All my friends made my year exceptionally uncommon, and I wish
            this continues forever. With you around, each minute is a unique event
            for me. I wish you to Happy new year to all of you.
          </Typography>
        </CardContent>
        <CardContent className="borderBottom borderTop">
          <Typography className="comment">Comment</Typography>
        </CardContent>
      </>
    );
  }