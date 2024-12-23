import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material//VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material//ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material//Repeat";
import FavoriteBorderIcon from "@mui/icons-material//FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <article className="articlepost">
        <div className="post" ref={ref}>
          <div>
            <div className="post__avatar">
              <Avatar src={avatar} />
            </div>
          </div>
          <div className="post__body">
            <div className="post__header">
              <div className="post__headerText">
                <div className="post__headerTextLeft">
                  <h3>
                    <span className="displayName">{displayName}</span>
                    <span className="post__headerSpecial">
                      {verified && <VerifiedUserIcon className="post__badge" />}
                      @{username} &#183; 2h
                    </span>
                  </h3>
                </div>
                <div className="buttonContainer">
                  <MoreHorizIcon className="moreButton" />
                </div>
              </div>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
            <img src={`https://localhost:7108/api/files/${image}`} alt="" />
            <div className="post__footer">
              <div className="commentButtonContainer">
                <ChatBubbleOutlineIcon
                  className="commentButtonIcon"
                  fontSize="small"
                />
              </div>
              <div className="retweetButtonContainer">
                <RepeatIcon
                  className="retweetButtonIcon"
                  fontSize="small" />
              </div>
              <div className="likeButtonContainer">
                <FavoriteBorderIcon
                  className="likeButtonIcon"
                  fontSize="small"
                />
              </div>
              <div className="viewsButtonContainer">
                <BarChartIcon
                  className="viewsButtonIcon"
                  fontSize="small" />
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }
);
export default Post;
