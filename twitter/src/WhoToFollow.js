import React from 'react';
import './WhoToFollow.css';

function Happening({ User, UserName, Icon }) {
    return (
      <article className="happening">
        <div className="iconContainer"></div>
        <div className="userDetailsContainer"></div>
        <div className="followButtonContainer"></div>
      </article>
    );
  };
export default Happening;