import React, { useState, useRef, useEffect } from "react";
import "./Login.css";
import Alert from "./Alert";
import SuccessAlert from "./SuccessAlert";
import OTPInput from "./OtpInput";
import Button from "./Button";
import GoogleSignInButton from "./GoogleSignInButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 100;
    let animationFrameId;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 6 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1; // Fix direction bug
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = "rgba(54, 170, 255, 0.5)";
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function initParticles() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    return () => cancelAnimationFrame(animationFrameId); // Cleanup animation
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending OTP...");
    try {
      const response = await fetch("http://localhost:8080/api/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email }).toString(),
      });
      const result = await response.json();
      setMessage(result.message);
      if (result.status === "success") setShowOtpInput(true);
    } catch (error) {
      setMessage("Error sending OTP: " + error.message);
    }
  };

  const handleOtpVerification = async (otp) => {
    setMessage("Verifying OTP...");
    try {
      const response = await fetch("http://localhost:8080/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, otp }).toString(),
      });
      const result = await response.json();
      setMessage(result.message);

      if (result.status === "success") {
        setSuccessMessage("OTP Verified Successfully!");
        setTimeout(() => {
          window.location.href = "http://localhost:8080/faceAttend";
        }, 3000);
      }
    } catch (error) {
      setMessage("Error verifying OTP: " + error.message);
    }
  };

  return (
    <div className="app-container">
      <canvas ref={canvasRef} className="background-canvas"></canvas>
      <h2>Email OTP Verification</h2>
      {message && <Alert message={message} onClose={() => setMessage("")} />}
      <div className="form-container">
        <LoginImg />
        {!showOtpInput ? (
          <div className="card">
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
              <Button type="submit" />
              <GoogleSignInButton />
            </form>
          </div>
        ) : (
          <OTPInput length={6} onSubmit={handleOtpVerification} />
        )}
      </div>
      {successMessage && <SuccessAlert message={successMessage} onClose={() => setSuccessMessage("")} />}
    </div>
  );
};

const LoginImg = () => {
  return (
    <div className="LoginImg">
      <img src="https://arkca.com/assets/img/login.gif" alt="loginimg" width="500px" />
    </div>
  );
};

export default Login;
