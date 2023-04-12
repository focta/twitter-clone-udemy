import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar />
          <input placeholder="今どうしている？" type="text" />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="画像のURLを入力してください"
          type="text"
        />
        <Button className="tweet_tweetButton" type="submit">
          ツイートする
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
