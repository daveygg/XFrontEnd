import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './TopHappening.css';

function TopHappening({ category, topic, amountOfInteractions, image }) {
    return (
      <article className="topHappening">
        <img className="topHappeningImage" src={image} alt="" />
        <div className="topHappeningText">
          <div className="topHappeningCategory">
            {category}
            <div className="buttonContainer">
              <MoreHorizIcon className="moreButtonTopHappening" />
            </div>
          </div>
          <div className="topHappeningTopic">{topic}</div>
          <div className="topAmountOfInteractions">{amountOfInteractions}</div>
        </div>
      </article>
    );
  };
export default TopHappening;