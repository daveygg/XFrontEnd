import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';
import Happening from "./Happening";
import TopHappening from "./TopHappening";
import ShowMore from "./ShowMore";
import WhoToFollow from "./WhoToFollow"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TopHappening category="Culture &middot; Trending" amountOfInteractions="67.8K posts" topic="Chinese New Year" image="https://picsum.photos/79/79"/>
        <Happening category="Sport &middot; Trending" amountOfInteractions="10.4K posts" topic="Mourinho" />
        <Happening category="Movies &middot; Trending" amountOfInteractions="110K posts" topic="Avengers 100" />
        <ShowMore />       
      </div>

      <div className="widgets__widgetContainer">
        <h2>Who to follow</h2>
        <WhoToFollow userName="DavidGilchrist" displayName="David Gilchrist" avatar="https://picsum.photos/100/100"/>
        <WhoToFollow userName="GregJames" displayName="Greg James" avatar="https://picsum.photos/80/80"/>
        <WhoToFollow userName="JillJones" displayName="Jill Jones" avatar="https://picsum.photos/110/110"/>
        <ShowMore />
      </div>
    </div>
  );
}

export default Widgets;