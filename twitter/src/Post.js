import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
  return (
    <div className='post'>
        <div className="post__avatar">
            <Avatar src="https://picsum.photos/200" />
        </div>        
        <div className='post__body'>
            <div className="post__header">
              <div className="post__headerText">
                <h3>
                  David Gilchrist 
                  <span>VerifiedUserIcon className="post__badge"</span>
                </h3>
              </div>
              <div className="post__headerDescription">
                <p>I challenge you to build twiter</p>
              </div>
            </div>
            <div className="post__footer">
              
            </div>
        </div>
    </div>
  );
}

export default Post;