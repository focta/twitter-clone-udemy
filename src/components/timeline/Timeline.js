import React from "react";
import './Timeline.css';
import TweetBox from "./TweetBox";
import Post from "./Post";

function Timeline() {
  return (
    <div className="timeline">
      {/* heeader */}
      <div className="timeline_header">
            <h2>ホーム</h2>
      </div>
      {/* TweetBox */}
      <TweetBox />

      <Post
        displayName="プログラミングチュートリアル"
        userName="sykt_tkhrm"
        verified={true}
        text="初めてのツイート"
        avator="http://shincode.info/wp-content/uploads/2021/12/icon.png"
        image="https://source.unsplash.com/random"
      />
    </div>
  );
}

export default Timeline;
