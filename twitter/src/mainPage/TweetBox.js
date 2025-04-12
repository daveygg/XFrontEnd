import React, { useEffect, useState, useRef } from "react";
import "./TweetBox.css";
import { Avatar, Button, Hidden, responsiveFontSizes } from "@mui/material";
import axios from "axios";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
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
  const textAreaRef = useRef(null);


  const handleTextChange = (newValue) => {
    setTweetMessage(newValue);
    if (textAreaRef.current) {
      textAreaRef.current.style.height = '0px';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
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
        setTweetMessage("");
        setSelectedFile(null);
        if (textAreaRef.current) { 
          textAreaRef.current.style.height = '34px';
        }
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
          <div className="expanding-textbox">
            <textarea value={value}
            ref={textAreaRef}
            placeholder='What is happening?!'
            onChange={(e) => handleTextChange(e.target.value)} />
          </div>
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
