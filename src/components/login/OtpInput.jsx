import React, { useState, useRef } from "react";

const OTPInput = ({ length = 6, onSubmit }) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (/^\d$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Add animation class
      inputs.current[index].classList.add("bounce-green");

      // Remove the class after animation ends
      setTimeout(() => {
        inputs.current[index].classList.remove("bounce-green");
      }, 5000);

      if (index < length - 1) inputs.current[index + 1].focus();
      if (newOtp.every((digit) => digit !== "")) onSubmit(newOtp.join(""));
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      if (otp[index] !== "") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-input">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputs.current[index] = el)}
            className="otp-box"
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
