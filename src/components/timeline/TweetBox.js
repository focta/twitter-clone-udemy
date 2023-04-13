import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する。
    // これはformでボタン押下時に画面更新されないように実装する。
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
      userName: "sykt_tkhrm",
      verified: true,
      text: tweetMessage,
      avator: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: "https://source.unsplash.com/random",
      timestamp: serverTimestamp(),
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input
            placeholder="今どうしている？"
            type="text"
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
        />
        <Button className="tweet_tweetButton" type="submit" onClick={sendTweet}>
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
