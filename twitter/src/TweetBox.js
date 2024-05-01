import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src="https://picsum.photos/200" />
                <input placeholder="What's happening?" />
            </div>
            <input placeholder="Optional: Enter image URL" className='tweetBox__imageInput' />
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  );
}

export default TweetBox;