import React, { useEffect, useState, useRef } from "react";
import "./LoginPage.css";
import "../fonts/Chirp-Regular.80fda27a.ttf";
import XIcon from "@mui/icons-material/X";
import { Button } from "@mui/material";

function LoginPage({ setIsAuthenticated }) {
  const [isPopupVisible, setIsPopupVisible] = useState(false); // State to control popup visibility

  const handleLogin = (event) => {
    event.preventDefault();
    setIsAuthenticated(true);
    setIsPopupVisible(false); // Close the popup after successful login
  };

  const handleOpenPopup = () => {
    setIsPopupVisible(true); // Open the popup when Sign In or Create Account is clicked
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false); // Close the popup
  };

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const [loginFocused, setLoginFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  useEffect(() => {
    const loginElement = loginRef.current;
  
    if (loginElement) {
      const handleFocus = () => {
        setLoginFocused(true);
      };
  
      const handleBlur = () => {
        setLoginFocused(false);
      };
  
      loginElement.addEventListener("focus", handleFocus);
      loginElement.addEventListener("blur", handleBlur);
  
      // Cleanup function to remove event listeners when component unmounts
      return () => {
        loginElement.removeEventListener("focus", handleFocus);
        loginElement.removeEventListener("blur", handleBlur);
      };
    }
  }, []);  // Empty dependency array ensures the effect runs once after the component mounts
  

  return (
    <div className="loginPage">
      <div className="loginPage__leftHalf">
        <XIcon className="loginPage__xIcon" />
      </div>
      <div className="loginPage__rightHalf">
        <div className="loginPage__happeningNow">Happening now</div>
        <div className="loginPage__joinToday">Join today.</div>
        <div className="loginPage__buttons">
          <Button className="loginPage__signInGoogleBtn">
            <svg
              className="googleSvg"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Sign up with Google
          </Button>
          <div className="line-container">
            <div className="line"></div>
            <p>or</p>
            <div className="line"></div>
          </div>
          <Button
            onClick={handleOpenPopup}
            className="loginPage__createAccountBtn"
          >
            Create account
          </Button>
        </div>
        <div className="loginPage__alreadyAccount">
          Already have an account?
        </div>
        <div className="loginPage__signIn">
          <Button onClick={handleOpenPopup} className="loginPage__signInBtn">
            Sign in
          </Button>
        </div>
      </div>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup__content">
            <button className="popup__closeBtn" onClick={handleClosePopup}>
              X
            </button>
            <XIcon className="loginPage__loginform__xIcon2" />
            <div className="popup__login">
              <h2>Sign in to X</h2>
              <Button className="loginPage__loginForm__signInGoogleBtn">
                <svg
                  className="googleSvg"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
                Sign in with Google
              </Button>
              <div className="loginForm__line-container">
                <div className="line"></div>
                <p>or</p>
                <div className="line"></div>
              </div>
              <form onSubmit={handleLogin}>
                <input
                  ref={loginRef}
                  id="input"
                  type="text"
                  placeholder="Username"
                  className="popup__input"
                  required
                />
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  className="popup__input"
                  required
                />
                <Button type="submit" className="popup__submitBtn">
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
