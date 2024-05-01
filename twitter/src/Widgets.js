import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1785642839579263246"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="InternetH0F"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://https://twitter.com"}
          options={{ text: "Wow! just saw the coolest website ever! This guy is really good!" }}
        />
      </div>
    </div>
  );
}

export default Widgets;