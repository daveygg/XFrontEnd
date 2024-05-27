import React, { useState, useEffect } from "react";
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from './Firebase';
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import FlipMove from "react-flip-move";
import Button from "./Button";
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: 'get',
          url: 'http://localhost:5175/api/posts',
          headders: {
            'Content-Type': 'application/json'
          }
        };
        const response = await axios(config);
        const fetchedPosts = response.data;
        console.log('fetchedPosts:', fetchedPosts);
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    fetchData();
  
    // Cleanup function (optional)
    return () => {};
  }, []);
  

  return (
    <div className='feed'>

      <div className="feed__header">
        <h2>Home</h2>
      </div>


        <TweetBox />
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.userName}
            verified="true"
            text={post.content}
            avatar={post.avatarUrl}
            image={post.imageUrl}
          />
        ))}
        

        
          
        
        
    </div>
  );
}

export default Feed;