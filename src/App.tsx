import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from './containers/MainPage';
import HomePage from './containers/HomePage';
import SignUpPage from './containers/SignUpPage';



function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
        </Routes>
    </div>
  );
}

export default App;
