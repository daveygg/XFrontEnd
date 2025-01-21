import React, { useState, useEffect, useCallback } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post.js";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [activeTab, setActiveTab] = useState("for_you");

  const fetchData = useCallback(async () => {
    try {
      const config = {
        method: "get",
        url: "http://localhost:5175/api/posts",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios(config);
      const fetchedPosts = response.data;
      const sortedPosts = fetchedPosts.sort(
        (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
      );
      setPosts(sortedPosts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }, []); // Empty dependency array to prevent unnecessary re-fetches

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Only re-fetch data when fetchData changes

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <div className="tabs">
          <div
            className={`tab ${activeTab === "for_you" ? "active" : ""}`}
            onClick={() => handleTabClick("for_you")}
          >
            <div className="for_you_text">For You</div>
            {activeTab === "for_you" && <div className="for_you_blue_bar"></div>}
          </div>
          <div
            className={`tab ${activeTab === "following" ? "active" : ""}`}
            onClick={() => handleTabClick("following")}
          >
            <div className="following_text">Following</div>
            {activeTab === "following" && <div className="following_blue_bar"></div>}
          </div>
        </div>
      </div>
      <TweetBox reloadParent={fetchData} />
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