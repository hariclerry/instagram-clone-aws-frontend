import React, { Fragment } from "react";

import userAvatar from "../../assets/avatar.jpg";
import "./feedLists.css";

const FeedLists = (props) => {
  const { feeds, onFeedDelete, handleEditShow, onFeedLike } = props;

  return (
    <Fragment>
      {feeds.map((feed) => {
        let classes = "fa fas fa-heart";
        if (feed.likes === false || feed.likes === null) classes += "-o";
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
            <div className="unlike-icon">
              <i
                className={classes}
                style={{ cursor: "Pointer" }}
                onClick={() => onFeedLike(feed)}
              ></i>
            </div>
            <div className="Post-caption">
              <p>
                <strong>@JohnnyD</strong>
                {feed.imageCaption}
              </p>
              <i
                className="fa fa-edit fa-lg"
                style={{ cursor: "Pointer" }}
                onClick={() => handleEditShow(feed)}
              ></i>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};

export default FeedLists;
