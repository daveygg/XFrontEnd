import {React, useState, useEffect }from "react";
import "./mainPage/MainPage.js";
import MainPage from "./mainPage/MainPage.js";
import LoginPage from "./loginPage/LoginPage.js";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      checkAuthentication();
    }, []);

    const checkAuthentication = () => {
        setIsAuthenticated(false);
    }

  return (
    <div>
      {isAuthenticated ? <MainPage /> : <LoginPage setIsAuthenticated={setIsAuthenticated}/>}
    </div>
  );
}
export default App;