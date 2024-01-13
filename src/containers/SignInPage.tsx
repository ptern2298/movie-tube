import React from 'react';
import {useNavigate} from "react-router-dom";
import logo from "../icons/MovieTube-logo.png";
import '../style/SignIn.css';
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase-config";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    email: string,
    password: string,
}

function SignInPage() {

    const { register, handleSubmit } = useForm<Inputs>();
    const onSignIn: SubmitHandler<Inputs> = async (formData)=> {
        try {
            if(formData.password !== '' || formData.password != null) {
                signInWithEmailAndPassword(auth, formData.email, formData.password);
                navigate('/');
                console.log(`Account login attempt email: ${formData.email} password: ${formData.password}`);
            }
        } catch (error) {
            console.error('Error signing in!');
        }
    }

    const navigate = useNavigate()
    return(
        <div className='signIn-container'>
            <div>
                <img className='signIn-logo-icon' src={logo} alt='logo'/>
                <button className='signIn-button' onClick={() => {
                    navigate('/')
                    }}>Login
                </button>
                <div className='signIn-gradient'/>
            </div>

            <div className='signIn-content'>
                <h1>Sign In</h1>
                <div className='signIn-form'>
                    <form onSubmit={handleSubmit(onSignIn)}>
                        <input {...register('email')} type='email' placeholder='Email'/>
                        <input {...register('password')} type='password' placeholder='Password'/>
                        <button type='submit' className='signIn-submit-button'>Login</button>
                        <h5>Don't have account yet?
                            <span className='signIn-bold' onClick={() => {
                                navigate('/signup')
                                }}>Sing Up!
                            </span>
                        </h5>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignInPage;