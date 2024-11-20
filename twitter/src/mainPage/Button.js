import React from 'react';
import axios from 'axios';

function Button() {
    const handleClick = () => {
      let data = JSON.stringify({
        "content": "string"
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
      <div>
        <button onClick={handleClick}>Send Request</button>
      </div>
    );
  }

export default Button;