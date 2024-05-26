import React from 'react';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Happening.css';

function Happening({ category, topic, amountOfInteractions }) {
    return (
      <article className="happening">
        <div className="happeningText">
          <div className="happeningCategory">
            {category}
            <div className="buttonContainer">
              <MoreHorizIcon className="moreButton" />
            </div>
          </div>
          <div className="happeningTopic">{topic}</div>
          <div className="amountOfInteractions">{amountOfInteractions}</div>
        </div>
      </article>
    );
  };
export default Happening;