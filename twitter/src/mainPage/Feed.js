import React, { useState, useEffect } from "react";
import './Feed.css';
import TweetBox from "./TweetBox";
import Post from "./Post.js";
import axios from 'axios';

function Feed() {
  const [posts, setPosts] = useState([]);

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
      const sortedPosts = fetchedPosts.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
      setPosts(sortedPosts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };
  
  useEffect(() => {
    fetchData();
    return () => {};
  }, []);
  

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox reloadParent={fetchData}/>
      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.displayName}
          username={post.userName}
          verified="true"
          text={post.content}
          avatar={post.avatarUrl}
          image={post.mediaPath}
        />
      ))}
    </div>
  );
}

export default Feed;