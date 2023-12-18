import React from 'react';
import '../style/Main.css'
import {useNavigate} from "react-router-dom";
import logo from '../icons/MovieTube-logo.png';

function MainPage() {
    const navigate = useNavigate()
    return(
        <div className='main-container'>
            <div>
                <img className='main-logo-icon' src={logo} alt='logo'/>
                <button className='main-button' onClick={() => {
                    navigate('/signin')
                }}>Sing In
                </button>
                <div className='main-gradient'/>
            </div>
            <div className='main-content'>
                <h1>Unlimited movies, TV shows, and more</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <h3>Enter email to become a member</h3>
                <div className='main-form'>
                    <form>
                        <input type='email' placeholder='Email'/>
                        <button className='main-member-btn' onClick={() => navigate('/signup')}>GET MEMBERSHIP</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
