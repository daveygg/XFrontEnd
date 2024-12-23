import React, { useState, useRef, useEffect } from 'react';
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

  const inputRef = useRef(null);
  const searchIconRef = useRef(null);
  const inputWrapperRef = useRef(null);

  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const inputElement = inputRef.current;
    
    const handleFocus = () => {
      setFocused(true);
    };

    const handleBlur = () => {
      setFocused(false);
    };

    inputElement.addEventListener('focus', handleFocus);
    inputElement.addEventListener('blur', handleBlur);

    return () => {
      inputElement.removeEventListener('focus', handleFocus);
      inputElement.removeEventListener('blur', handleBlur);
    };
  }, []);

  useEffect(() => {
    
    if (focused) {
      searchIconRef.current.style.color = 'rgba(29, 155, 240, 1)';
      inputWrapperRef.current.style.border = '1px solid rgba(29, 155, 240, 1)';
      inputWrapperRef.current.style.backgroundColor = 'black';
      inputRef.current.style.backgroundColor = 'black';
    } else {
      searchIconRef.current.style.color = 'gray';
      inputWrapperRef.current.style.border = 'none';
      inputWrapperRef.current.style.backgroundColor = 'rgb(47, 51, 54)';
      inputRef.current.style.backgroundColor = 'rgb(47, 51, 54)';
    }
  }, [focused]);

  return (
    <div className="widgets">
      <div className="widgets__input" ref={inputWrapperRef}>
        <SearchIcon className="widgets__searchIcon" ref={searchIconRef} />
        <input placeholder="Search" type="text" ref={inputRef} />
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