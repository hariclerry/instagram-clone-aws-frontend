import React, { Component } from "react";

import postImage from "../../assets/martin-bee.jpg";
import postImage2 from "../../assets/dylan-sauerwein-unsplash.jpg";
import userAvatar from "../../assets/harriet.jpeg";
import userAvatar2 from "../../assets/martin-bee.jpg";
import UploadModal from '../modal/modal'
import "./posts.css";

class Post extends Component {
  render() {
    // const nickname = this.props.nickname;
    // const avatar = this.props.avatar;
    // const image = this.props.image;
    // const caption = this.props.caption;

    return (
      <section>
        <div className="upload-modal">
          <UploadModal />
        </div>
        <article className="Post" ref="Post">
          <header>
            <div className="Post-user">
              <div className="Post-user-avatar">
                <img src={userAvatar} alt="hari" />
              </div>
              <div className="Post-user-nickname">
                <span>Harriet</span>
              </div>
            </div>
          </header>
          <div className="Post-image">
            <div className="Post-image-bg">
              <img alt="Amazing post!" src={postImage} />
            </div>
          </div>
          <div>
            <i className="fa fas fa-heart-o unlike-icon"></i>
          </div>
          <div className="Post-caption">
            <p>
              <strong>Hari</strong>Amazing post!
            </p>
            <i className="fa fa-edit fa-lg"></i>
          </div>
        </article>

        <article className="Post" ref="Post">
          <header>
            <div className="Post-user">
              <div className="Post-user-avatar">
                <img src={userAvatar2} alt="Rocky" />
              </div>
              <div className="Post-user-nickname">
                <span>Rocky</span>
              </div>
            </div>
          </header>
          <div className="Post-image">
            <div className="Post-image-bg">
              <img alt="Holding a mic" src={postImage2} />
            </div>
          </div>
          <div>
            <i className="fa fas fa-heart like-icon"></i>
          </div>
          <div className="Post-caption">
            <p>
              {" "}
              <strong>RockStar</strong>
              Holding a mic{" "}
            </p>
            <i className="fa fa-edit fa-lg"></i>
          </div>
        </article>
      </section>
    );
  }
}
export default Post;
