import React, { useState, useEffect, Fragment } from "react";
import { Button, Spinner } from "react-bootstrap";

import UploadModal from "../modal/createFeedmodal";
import FeedLists from "../feed-lists/feedList";
import EditUploadModal from "../modal/editModal";
import {
  getFeeds,
  deleteFeed,
  patchFeed,
  getUploadUrl,
  uploadFile,
  createFeed,
} from "../../api/feedsApi";
import "./posts.css";

const Post = (props) => {
  const [feeds, setFeeds] = useState([]);
  const [tempFeed, setTempFeed] = useState({ imageCaption: "" });
  const [imageCaption, setImageCaption] = useState("");
  const [file, setFile] = useState("");
  const [loadingFeeds, setLoadingFeeds] = useState(false);
  const [loading, setisLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    onFectch();
  }, []);

  const handleClose = () => {
    setShow(false);
    setIsEdit(false);
    setFile("");
    setImageCaption("");
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleEditShow = (feed) => {
    setTempFeed({
      feedId: feed.feedId,
      imageCaption: feed.imageCaption,
      likes: feed.likes,
    });
    setIsEdit(true);
  };
  const onFectch = async () => {
    try {
      setLoadingFeeds(true);
      const data = await getFeeds(props.auth.getIdToken());
      setFeeds(data);
      setLoadingFeeds(false);
    } catch (e) {
      alert(`Failed to fetch feeds: ${e.message}`);
    }
  };
  const handleFeedDelete = async (feedId) => {
    try {
      await deleteFeed(props.auth.getIdToken(), feedId);
      const filteredFeeds = feeds.filter((feed) => feed.feedId !== feedId);
      setFeeds(filteredFeeds);
    } catch {
      alert("Feed deletion failed");
    }
  };

  const handleChangeInput = (event) => {
    setImageCaption(event.target.value);
  };

  const handleChangeInputEdit = (event) => {
    const { name, value } = event.target;
    setTempFeed({ ...tempFeed, [name]: value });
  };

  const handleFileChange = (event) => {
    event.preventDefault();

    const files = event.target.files;
    if (!files) return;

    setFile(files[0]);
  };

  const handleCreateSubmit = async (event) => {
    event.preventDefault();
    try {
      const { name } = file;
      if (!file && !imageCaption) {
        alert("File should be selected and caption added");
        return;
      }
      setisLoading(true);
      const uploadUrl = await getUploadUrl(props.auth.getIdToken(), name);
      await uploadFile(uploadUrl, file);
      await createFeed(props.auth.getIdToken(), {
        imageCaption: imageCaption,
        imageUrl: name,
      });
      setisLoading(false);
      handleClose();
      onFectch();
    } catch (error) {
      alert("Could not upload a file: " + error.message);
    }
  };

  const handleFeedUpdateSubmit = async (event) => {
    event.preventDefault();
    try {
      const { feedId, likes, imageCaption } = tempFeed;
      setisLoading(true);
      await patchFeed(props.auth.getIdToken(), feedId, {
        imageCaption: imageCaption,
        likes: likes,
      });
      setisLoading(false);
      handleClose();
      onFectch();
    } catch {
      alert("Feed update failed");
    }
  };

  const handleFeedLikes = async (feed) => {
    try {
      const feedId = feed.feedId;
      const liked = feed.likes === false || feed.likes === null ? true : false;

      await patchFeed(props.auth.getIdToken(), feedId, {
        imageCaption: feed.imageCaption,
        likes: liked,
      });
      onFectch();
    } catch {
      alert("Feed update failed");
    }
  };

  return (
    <Fragment>
      <section>
        <div className="upload-modal">
          <Button variant="primary" onClick={handleShow}>
            Update Status
          </Button>
          <UploadModal
            onChangeInput={handleChangeInput}
            onFileChange={handleFileChange}
            onHandleCreateSubmit={handleCreateSubmit}
            onHandleClose={handleClose}
            imageCaption={imageCaption}
            file={file}
            show={show}
            loading={loading}
          />
        </div>
        {((feeds && feeds.length > 0) || !loadingFeeds ) ? (
          <FeedLists
            feeds={feeds}
            onFeedDelete={handleFeedDelete}
            onFeedLike={handleFeedLikes}
            handleEditShow={handleEditShow}
          />
        ) : (
          <div className="feeds-spinner">
            <Spinner animation="border" variant="success" />
            <h1> No Feeds </h1>
          </div>
        )}

        <EditUploadModal
          onChangeInput={handleChangeInputEdit}
          onHandleClose={handleClose}
          isEdit={isEdit}
          onFeedUpdateSubmit={handleFeedUpdateSubmit}
          tempFeed={tempFeed}
          loading={loading}
        />
      </section>
    </Fragment>
  );
};
export default Post;
