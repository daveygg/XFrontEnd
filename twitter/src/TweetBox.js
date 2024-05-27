import React, { useEffect, useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button, responsiveFontSizes } from '@mui/material';
import db from './Firebase';
import { setDoc, doc, collection } from "firebase/firestore";
import axios from 'axios';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ExpandingTextBox from './ExpandingTextBox';
import GifIcon from '@mui/icons-material/Gif';
import BallotIcon from '@mui/icons-material/Ballot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function TweetBox() {
const [value, setTweetMessage] = useState('');
const sendTweet2 = () => {
    console.log("tweetmessage:", value);
    let data = JSON.stringify({
      "content": value
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5175/api/posts',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (event) => {
    setTweetMessage(event.target.value);
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxAvatar">
          <Avatar src="https://picsum.photos/200/300?random=1" />
        </div>
        <div className="tweetBoxInputStuff">
          <div className="tweetBox__input">
          <div className="expanding-textbox">
          <div className="expanding-textbox">
      <textarea value={value} onChange={handleChange} placeholder='What is happening?!'/>
    </div>
    </div>
          </div>
          <div className="tweetBoxButtons">
            <div className="tweetBoxButtonsIcons">
              <div className="tweetBoxIconContainer">
                <InsertPhotoIcon className="tweetBoxIcon" />
              </div>
              <div className="tweetBoxIconContainer">
                <GifIcon className="tweetBoxIcon" />
              </div>
              <div className="tweetBoxIconContainer">
                <BallotIcon className="tweetBoxIcon" />
              </div>
              <div className="tweetBoxIconContainer">
                <CalendarMonthIcon className="tweetBoxIcon" />
              </div>
              <div className="tweetBoxIconContainer">
                <LocationOnIcon className="tweetBoxIcon" />
              </div>
            </div>
            <Button
              type="submit"
              onClick={sendTweet2}
              className="tweetBox__tweetButton"
            >
              Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TweetBox;