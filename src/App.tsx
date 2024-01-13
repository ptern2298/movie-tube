import './App.css';
import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from './containers/MainPage';
import HomePage from './containers/HomePage';
import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {selectUser, SignIn, SignOut} from "./utils/userSlice";
import {auth} from "./utils/firebase-config";
import ProfilePage from "./containers/ProfilePage";




function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();


    useEffect( () => {
        const logout = auth.onAuthStateChanged(userAuth => {
            if(userAuth) {
                dispatch(SignIn( {
                    uid: userAuth.uid,
                    email: userAuth.email,
                }));
            } else {
                dispatch(SignOut())
            }
        });

        return logout;
    }, [dispatch])

  return (
    <div className="app-container">
        {!user ? (
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/signup" element={<SignUpPage/>} />
                <Route path="/signin" element={<SignInPage/>} />
            </Routes>
        ) : (
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/profile" element={<ProfilePage/>} />
            </Routes>
        ) }
    </div>
  );
}

export default App;
