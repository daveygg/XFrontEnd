import React, { useEffect, useState, useRef } from "react";
import "./TweetBox.css";
import { Avatar, Button, Hidden, responsiveFontSizes } from "@mui/material";
import db from "./Firebase";
import { setDoc, doc, collection } from "firebase/firestore";
import axios from "axios";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ExpandingTextBox from "./ExpandingTextBox";
import GifIcon from "@mui/icons-material/Gif";
import BallotIcon from "@mui/icons-material/Ballot";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function TweetBox({ reloadParent }) {
  
  useEffect(() =>{
    const avatarImg = document.getElementById("avatar");
    const randomUrl = generateRandomURL();
    avatarImg.src = randomUrl;
  }, []);
  
  const [selectedFile, setSelectedFile] = useState();
  const [value, setTweetMessage] = useState("");
  const hiddenFileInput = useRef(null);
  const expandingTextBoxRef = useRef(null);

  const handleClearText = () => {
    expandingTextBoxRef.current.resetText();
  };

  const handleTextChange = (newValue) => {
    setTweetMessage(newValue);
  };

  const sendTweet = (event) => {
    event.preventDefault();    
    const formData = new FormData();

    formData.append('content', value);

    if (selectedFile != null){
      formData.append('media', selectedFile);
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://localhost:7108/api/posts",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data.message);
        setTweetMessage(null);
        handleClearText();
        reloadParent();

      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeImage = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleClick = (event) => {
    hiddenFileInput.current.click();
    
  };

  const generateRandomURL = (event) => {
    const randomID = Math.floor(Math.random() * 200) + 1;  
    const baseURL = "https://picsum.photos/{id}/200";
    const url = baseURL.replace("{id}", randomID);
  
    return url;
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBoxAvatar">
          <Avatar id="avatar" src="https://picsum.photos/200/300?random=1" />
        </div>
        <div className="tweetBoxInputStuff">
          <div className="tweetBox__input">
              {/* <div className="expanding-textbox">
                <textarea
                  value={value}
                  onChange={handleChange}
                  placeholder="What is happening?!"
                />
              </div> */}
              {/* const [value, setTweetMessage] = useState(""); */}
              <ExpandingTextBox onTextChange={handleTextChange} ref={expandingTextBoxRef} />
          </div>
          <div className="tweetBoxButtons">
            <div className="tweetBoxButtonsIcons">
              <div className="tweetBoxIconContainer">
                  <InsertPhotoIcon className="tweetBoxIcon" onClick={handleClick} />
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
              onClick={sendTweet}
              className="tweetBox__tweetButton"
            >
              Post
            </Button>
          </div>
        </div>
      </form>
      <input
                type="file"
                id="upload-image"
                ref={hiddenFileInput}
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleChangeImage}
              />
    </div>
  );
}

export default TweetBox;
