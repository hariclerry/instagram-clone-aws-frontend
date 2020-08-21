import React, { Fragment } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import userAvatar from "../../assets/avatar.jpg";
import "./feedLists.css";

const FeedLists = (props) => {
  const { feeds, onFeedDelete, handleEditShow, onFeedLike } = props;

  return (
    <Fragment>
      {feeds.map((feed) => {
        let classes = "fa fas fa-heart";
        if (feed.likes === false || feed.likes === null) classes += "-o";
        let likeClass = !feed.likes ? "unlike-icon" : "like-icon";
          let likesCount = feed.likes ? `${1} Like` : null;
        return (
          <article key={feed.feedId} className="Post">
            <header className="Post-header">
              <div className="Post-user">
                <div className="Post-user-avatar">
                  <img src={userAvatar} alt="hari" />
                </div>
                <div className="Post-user-nickname">
                  <span>John Doe</span>
                </div>
              </div>
              <button onClick={() => onFeedDelete(feed.feedId)}>
                Delete Post
              </button>
            </header>
            <div className="Post-image">
              <div className="Post-image-bg">
                <img alt="Amazing post!" src={feed.imageUrl} />
              </div>
            </div>
            <div className={likeClass}>
              <OverlayTrigger
                placement="right"
                overlay={
                  <Tooltip id="likes-toolTips">
                    {!feed.likes ? "Like post" : "Unlike post"}
                  </Tooltip>
                }
              >
                <i
                  className={classes}
                  style={{ cursor: "Pointer" }}
                  onClick={() => onFeedLike(feed)}
                ></i>
              </OverlayTrigger>
              <span style={{color: "black", paddingLeft: "5px"}}>{likesCount}</span>
            </div>
            <div className="Post-caption">
              <p>
                <strong>@JohnnyD</strong>
                {feed.imageCaption}
              </p>
              <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="edit-toolTips">Edit post</Tooltip>}
              >
                <i
                  className="fa fa-edit fa-lg"
                  style={{ cursor: "Pointer" }}
                  onClick={() => handleEditShow(feed)}
                ></i>
              </OverlayTrigger>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};

export default FeedLists;
