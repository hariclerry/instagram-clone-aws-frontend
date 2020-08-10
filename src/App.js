import React from "react";

import Header from "./components/header/header";
import Post from "./components/posts/posts";
import postImage from "./assets/martin-bee.jpg";
import postImage2 from "./assets/dylan-sauerwein-unsplash.jpg";
import userAvatar from "./assets/harriet.jpeg";
import userAvatar2 from "./assets/martin-bee.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="App-main">
        <Post
          nickname="Harriet"
          avatar={userAvatar}
          caption="Amazing post!"
          image={postImage}
        />
        <Post
          nickname="RockStar"
          avatar={userAvatar2}
          caption="Holding a mic"
          image={postImage2}
        />

        {/* more posts */}
      </section>
    </div>
  );
}

export default App;
