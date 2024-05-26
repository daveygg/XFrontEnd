import React, {useState} from 'react';
import "./TweetBox.css";
import { Avatar, Button, responsiveFontSizes } from '@mui/material';
import db from './Firebase';
import { setDoc, doc, collection } from "firebase/firestore";
import axios from 'axios';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  /*const sendTweet = (e) => {
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

  };*/
  /*const sendTweet = async() => {
    const token = 'eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJleHAiOjE3NDcxNjAxOTd9.9KqyGQwvlrhRyYQNacu2vDfkmpWGhdu4YmILC3ZowZU';
    const url = 'https://localhost:7128/posts';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({content: 'this is my post!'})
    });

    if(!response.ok) {
        throw new Error(`Error fetching data: ${response.status}`)
    }
    const data = await response.json();
    console.log(data);
  };*/
  const sendTweet2 = () => {
    let data = JSON.stringify({
      "content": tweetMessage
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://localhost:7128/posts',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJleHAiOjE3NDcxNjAxOTd9.9KqyGQwvlrhRyYQNacu2vDfkmpWGhdu4YmILC3ZowZU'
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
          <Button type='submit' onClick={sendTweet2} className="tweetBox__tweetButton">Tweet</Button>
        </form>
      </div>
  );
}

export default TweetBox;