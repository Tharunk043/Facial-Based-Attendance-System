import React, { useEffect, useState } from "react";

const Alert = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);
  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    setVisible(true);
    
    setTimeout(() => {
      setShowTick(true);
    }, 3000); // Tick animation appears after a short delay

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 500); // Ensures animation completes before closing
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`alert-container ${visible ? "show" : "hide"}`}>
      <div className="loader"></div>
      <div className="alert-box">
        <div className={`tick-container ${showTick ? "tick-show" : ""}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#36aaff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 173l-5-5"></path>
          </svg>
        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
