// ProgressBar.js
import React from 'react';
import '../../style/progress.css';

const ProgressBar = ({ progress }) => {
  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
