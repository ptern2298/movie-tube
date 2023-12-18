import './App.css';
import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from './containers/MainPage';
import HomePage from './containers/HomePage';
import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';



function App() {
    //const [userInfo, setUserInfo] = useState<any | null>(null)
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/signin" element={<SignInPage/>} />
        </Routes>
    </div>
  );
}

export default App;
