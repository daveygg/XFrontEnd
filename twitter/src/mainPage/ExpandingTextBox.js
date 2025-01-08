import React, { useState, useEffect } from 'react';
import "./ExpandingTextBox.css";

const ExpandingTextBox = ({ onTextChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onTextChange(event.target.value);
  };

  const resetText = () => {
    setValue('');
  }

  useEffect(() => {
    const textarea = document.querySelector('.expanding-textbox textarea');
    textarea.style.height = '0px';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [value]);

  return (
    <div className="expanding-textbox">
      <textarea value={value} onChange={handleChange} placeholder='What is happening?!'/>
    </div>
  );
};

export default ExpandingTextBox;