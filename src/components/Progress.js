import React, { useEffect, useState } from 'react';
import './Progress.css';
import PropTypes from 'prop-types';

const Progress = ({
  value, radius, stroke, showCompletedText,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(value);
  }, [value]);

  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="circular-progress">
      <svg width={2 * radius} height={2 * radius}>
        <circle
          className="progress-ring-circle"
          strokeWidth="6"
          stroke={stroke}
          fill="transparent"
          r={radius}
          cx={radius}
          cy={radius}
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      <div className="progress-value">
        {showCompletedText && (
        <p>
          {progress}
          %
        </p>
        )}
        {showCompletedText && <span>Completed</span>}
      </div>
    </div>
  );
};

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  radius: PropTypes.number,
  stroke: PropTypes.string,
  showCompletedText: PropTypes.bool,
};

Progress.defaultProps = {
  radius: 40,
  stroke: '#007bff',
  showCompletedText: true,
};

export default Progress;
