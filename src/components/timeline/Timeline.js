import React, { useEffect, useState } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function Timeline() {
  const [posts, setPosts] = useState([]);

  //  レンダリング時に一回だけ処理を行うための実装
  useEffect(() => {
    // FireStoreの取得部分
    const postData = collection(db, "posts");
    const q = query(postData, orderBy("timestamp", "desc"));
    getDocs(q).then((querySnapshot) => {
      // 取得データを最新順に並べるための実装
      setPosts(querySnapshot.docs.map((doc) => doc.data()));
    });
    // 下記のコンソールは実際は strictModeを利用しているので２回出力してしまうが、レンダリングの度に呼び出される現象は防げている
    console.log("本当に１度きりしかよばれない・・・？");
  }, []);

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
          key={post.text}
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
