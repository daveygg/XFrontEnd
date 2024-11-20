import React from 'react';
import './WhoToFollow.css';
import { Avatar, Button } from '@mui/material';

function Happening({ displayName, userName, avatar }) {
    return (
      <article className="whoToFollow">
        <div className="wtfLeft">
        <div className="iconContainer">
            <Avatar className="whoToFollowAvatar" src={avatar} />
        </div>
        <div className="userDetailsContainer">
            <div className='wtfDisplayName'>
                {displayName}
            </div>
            <div className='wtfUsername'>
                @{userName}
            </div>
        </div>
        </div>        
        <div className="followButtonContainer">
            <Button className='wtfFollowButton'>Follow</Button>
        </div>
      </article>
    );
  };
export default Happening;