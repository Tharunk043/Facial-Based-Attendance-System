import {React,useEffect,useState,useRef} from "react";
import Alert from "./Alert";
import SuccessAlert from "./Login";
import GoogleSignInButton from "./GoogleSignInButton";
import LoginImg from "./Login";
import Button from "./Button";
import SuccessAlert from "./SuccessAlert";
import OTPInput from "./OtpInput";
const App = () => {
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
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
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
        requestAnimationFrame(animateParticles);
      }
  
      initParticles();
      animateParticles();
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
    setMessage(""); // Clear normal alerts first
    setSuccessMessage(""); // Clear any previous success messages
  
    try {
      const response = await fetch("http://localhost:8080/api/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ email, otp }).toString(),
      });
  
      const result = await response.json();
  
      if (result.status === "success") {
        setMessage(""); // Clear any error message
        setSuccessMessage("OTP Verified Successfully!");
  
        // Redirect after showing success alert
        setTimeout(() => {
          window.location.href = "http://localhost:8080/faceAttend";
        }, 3000);
      } else {
        setMessage(result.message); // Show error message
        setSuccessMessage(""); // Clear success message
      }
    } catch (error) {
      setMessage("Error verifying OTP: " + error.message);
      setSuccessMessage(""); // Ensure no success message
    }
  };
  
  
  return (
    <div className="app-container">
      <canvas ref={canvasRef} className="background-canvas"></canvas>
  
      <h2>Email OTP Verification</h2>
  
      {/* Show SuccessAlert only if successMessage exists */}
      {successMessage ? (
        <SuccessAlert message={successMessage} onClose={() => setSuccessMessage("")} />
      ) : (
        message && <Alert message={message} onClose={() => setMessage("")} />
      )}
  
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
              <Button />
              <GoogleSignInButton />
            </form>
          </div>
        ) : (
          <OTPInput length={6} onSubmit={handleOtpVerification} />
        )}
      </div>
    </div>
  );
  
  }  
export default App;  