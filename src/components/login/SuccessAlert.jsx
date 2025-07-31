import React, { useEffect, useState } from "react";
import "./SuccessAlert.css";
const SuccessAlert = ({ message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(onClose, 500); // Wait for animation to complete before closing
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`scroll-alert ${visible ? "show" : "hide"}`}>
      <div className="loader"></div>
      <p>{message}</p>
    </div>
  );
};

export default SuccessAlert;
