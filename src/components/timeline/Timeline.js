import React, { useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);

  // FireStoreの取得部分
  const postData = collection(db, "posts");
  getDocs(postData).then((querySnapshot) => {
    console.log();
    setPosts(querySnapshot.docs.map((doc) => doc.data()));
  });

  return (
    <div className="timeline">
      {/* heeader */}
      <div className="timeline_header">
        <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.useName}
          verified={post.verified}
          text={post.text}
          avator={post.avator}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Timeline;
