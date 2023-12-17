import './App.css';
import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from './containers/MainPage';




function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<MainPage/>} />
        </Routes>
    </div>
  );
}

export default App;
