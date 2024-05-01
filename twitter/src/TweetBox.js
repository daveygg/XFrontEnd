import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import db from './Firebase';
import { setDoc, doc, collection } from "firebase/firestore";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    
    const newPostRef = doc(collection(db, "posts"));

    const newPostData = {
      displayName: "David Gilchrist",
      username: "DavidGilchrist",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: tweetImage,
    };    
    
    setDoc(newPostRef, newPostData);

  };
  
  return (
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://picsum.photos/200/300?random=1" />
            <input 
            placeholder="What's happening?" 
            type='text'
            onChange={e => setTweetMessage(e.target.value)}
            value={tweetMessage}
            />
          </div>
          <input
            placeholder="Optional: Enter image URL"
            className="tweetBox__imageInput"
            onChange={e => setTweetImage(e.target.value)}
            value={tweetImage}
          />
          <Button type='submit' onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
        </form>
      </div>
  );
}

export default TweetBox;