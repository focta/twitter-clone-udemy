import { Search } from "@mui/icons-material";
import React from "react";
import {
  TwitterShareButton,
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <Search className="widgets_searchIcon" />
        <input placeholder="キーワード検索" type="text"></input>
      </div>
      <div className="widgets_container">
        <h2>いまどうしている？</h2>
        {/* ライブラリ */}
        <TwitterTweetEmbed tweetId={"1643123835305365504"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="sykt_tkhrm"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/saurabhnemade"}
          options={{ text: "#reactjs is awesome", via: "sykt_tkhrm" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
