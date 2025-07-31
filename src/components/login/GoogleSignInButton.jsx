import React, { useEffect, useCallback } from "react";
import styled from "styled-components";

const GoogleSignInButton = () => {
  const handleCredentialResponse = useCallback((response) => {
    console.log("Google Sign-In Response:", response);
    const { credential } = response;
    authenticateWithBackend(credential);
  }, []);

  const authenticateWithBackend = async (idToken) => {
    try {
      const backendResponse = await fetch("http://localhost:8080/api/google-auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const result = await backendResponse.json();
      console.log("Backend Response:", result);

      if (result.status === "success") {
        alert("Google Sign-In Successful!");
        window.location.href = result.redirectUrl;
      } else {
        alert("Google Sign-In Failed: " + result.message);
      }
    } catch (error) {
      console.error("Error authenticating with backend:", error);
      alert("Error authenticating with backend.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: "57739503068-bcos64b4srof5itkcr9l3l9t8fb9p9ji.apps.googleusercontent.com",
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("gButton"),
        {
          theme: "outline",
          size: "large",
          text: "continue_with",
          shape: "pill",
          logo_alignment: "left",
        }
      );

      window.google.accounts.id.prompt();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, [handleCredentialResponse]);

  return (
    <StyledWrapper>
      <button className="button" id="gButton">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 262" className="svg">
          <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" className="blue" />
          <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" className="green" />
          <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" className="yellow" />
          <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" className="red" />
        </svg>
        <span className="text">Continue with Google</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    padding: 10px;
    font-weight: bold;
    display: flex;
    position: relative;
    overflow: hidden;
    border-radius: 35px;
    align-items: center;
    border: solid black 2px;
    outline: none;
    cursor: pointer;
  }

  .svg {
    height: 25px;
    margin-right: 10px;
  }

  .button .text {
    z-index: 10;
    font-size: 14px;
  }

  .button:hover .text {
    animation: text forwards 0.3s;
  }

  @keyframes text {
    from { color: black; }
    to { color: white; }
  }
`;

export default GoogleSignInButton;