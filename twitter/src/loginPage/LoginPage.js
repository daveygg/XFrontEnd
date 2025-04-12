import React, { useEffect, useState, useRef } from "react";
import "./LoginPage.css";
import "../fonts/Chirp-Regular.ttf";
import XIcon from "@mui/icons-material/X";
import { Button } from "@mui/material";

function LoginPage({ setIsAuthenticated }) {
  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false);
  const [isRegisterPopupVisible, setIsRegisterPopupVisible] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
  
    const username = loginRef.current.value;
    const password = passwordRef.current.value;
  
    try {
      
      const url = `https://localhost:7108/api/users/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  
      const response = await fetch(url, {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
  
      if (data != "") {
        setIsAuthenticated(true);
        setIsLoginPopupVisible(false);
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  const handleRegister = async (event) => {
    event.preventDefault();
  
    const username = registerUsernameRef.current.value;
    const password = registerPasswordRef.current.value;
  
    try {
      
      const url = `https://localhost:7108/api/users/register?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
  
      const response = await fetch(url, {
        method: 'POST',
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
  
      if (data != "") {
        setIsAuthenticated(true);
        setIsLoginPopupVisible(false);
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Something went wrong. Please try again later.');
    }
  };
  

  const handleOpenLoginPopup = () => {
    setIsLoginPopupVisible(true);
  };

  const handleCloseLoginPopup = () => {
    setIsLoginPopupVisible(false);
  };

  const handleOpenRegisterPopup = () => {
    setIsRegisterPopupVisible(true);
  };

  const handleCloseRegisterPopup = () => {
    setIsRegisterPopupVisible(false);
  };

  const loginRef = useRef(null);
  const passwordRef = useRef(null);
  const registerUsernameRef = useRef(null);
  const registerPasswordRef = useRef(null);

  const [loginFocused, setLoginFocused] = useState(null);
  const [passwordFocused, setPasswordFocused] = useState(null);

  useEffect(() => {
    if(isLoginPopupVisible){
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
  
      return () => {
        loginElement.removeEventListener("focus", handleFocus);
        loginElement.removeEventListener("blur", handleBlur);
      };
    }
    
    }
  }, [isLoginPopupVisible]);

  useEffect(() => {
    if(isLoginPopupVisible){
      const passwordElement = passwordRef.current;
  
    if (passwordElement) {
      const handlePasswordFocus = () => {
        setPasswordFocused(true);
      };
  
      const handlePasswordBlur = () => {
        setPasswordFocused(false);
      };
  
      passwordElement.addEventListener("focus", handlePasswordFocus);
      passwordElement.addEventListener("blur", handlePasswordBlur);
  
      return () => {
        passwordElement.removeEventListener("focus", handlePasswordFocus);
        passwordElement.removeEventListener("blur", handlePasswordBlur);
      };
    }
    
    }
  }, [isLoginPopupVisible]);

  useEffect(() => {
      
      if (loginFocused === true) {
        loginRef.current.style.color = 'rgba(29, 155, 240, 1)';
        loginRef.current.style.outline = '1px solid rgba(29, 155, 240, 1)';
        loginRef.current.style.border = '1px solid rgba(29, 155, 240, 1)';
        loginRef.current.style.backgroundColor = 'black';
      } else if (loginFocused == false) {
        loginRef.current.style.color = 'gray';
        loginRef.current.style.outline = '0px solid rgb(118, 118, 118)';
        loginRef.current.style.border = '1px solid rgb(118, 118, 118)';
        loginRef.current.style.backgroundColor = 'black';
        
      }
    }, [loginFocused]);

    useEffect(() => {
      
      if (passwordFocused === true) {
        passwordRef.current.style.color = 'rgba(29, 155, 240, 1)';
        passwordRef.current.style.outline = '1px solid rgba(29, 155, 240, 1)';
        passwordRef.current.style.border = '1px solid rgba(29, 155, 240, 1)';
        passwordRef.current.style.backgroundColor = 'black';
      } else if (passwordFocused == false) {
        passwordRef.current.style.color = 'gray';
        passwordRef.current.style.outline = '0px solid rgb(118, 118, 118)';
        passwordRef.current.style.border = '1px solid rgb(118, 118, 118)';
        passwordRef.current.style.backgroundColor = 'black';
        
      }
    }, [passwordFocused]);
  

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
            onClick={handleOpenRegisterPopup}
            className="loginPage__createAccountBtn"
          >
            Create account
          </Button>
        </div>
        <div className="loginPage__alreadyAccount">
          Already have an account?
        </div>
        <div className="loginPage__signIn">
          <Button onClick={handleOpenLoginPopup} className="loginPage__signInBtn">
            Sign in
          </Button>
          <div class="input-container">
  <input type="text" id="name" placeholder=" " required />
  <label for="name">Username</label>
</div>
<div class="input-container">
  <input type="password" id="password" placeholder=" " required />
  <label for="name">Password</label>
</div>
        </div>
      </div>

      {isLoginPopupVisible && (
        <div className="popup">
          <div className="popup__content">
            <button className="popup__closeBtn" onClick={handleCloseLoginPopup}>
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

{isRegisterPopupVisible && (
        <div className="popup">
          <div className="popup__content">
            <button className="popup__closeBtn" onClick={handleCloseRegisterPopup}>
              X
            </button>
            <XIcon className="loginPage__loginform__xIcon2" />
            <div className="popup__login">
              <h2>Create your account</h2>
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
              <form onSubmit={handleRegister}>
                <input
                  ref={registerUsernameRef}
                  id="input"
                  type="text"
                  placeholder="Username"
                  className="popup__input"
                  required
                />
                <input
                  ref={registerPasswordRef}
                  type="password"
                  placeholder="Password"
                  className="popup__input"
                  required
                />
                <Button type="submit" className="popup__submitBtn">
                  Register
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
