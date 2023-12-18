import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from "../icons/MovieTube-logo.png";
import '../style/SignUp.css';

function SignUpPage() {
    const navigate = useNavigate()
    return(
        <div className='signUp-container'>
            <div>
                <img className='signUp-logo-icon' src={logo} alt='logo'/>
                <button className='signUp-button' onClick={() => {
                    navigate('/')
                    }}>Login
                </button>
                <div className='signUp-gradient'/>
            </div>
            <div className='signUp-content'>
                <h1>Sign Up</h1>
                <div className='signUp-form'>
                    <form>
                        <input type='email' placeholder='Email'/>
                        <input type='password' placeholder='Password'/>
                        <input type='password' placeholder='Confirm password'/>
                        <button type='submit' className='signUp-submit-button'>Create Account</button>
                        <h5>Already have an account?
                            <span className='signUp-bold' onClick={() => {
                                navigate('/signin')
                            }}>Sing In!</span>
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;