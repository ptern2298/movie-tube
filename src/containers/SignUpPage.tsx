import React from 'react';
import '../style/SignUp.css';
import {useNavigate} from "react-router-dom";
import logo from "../icons/MovieTube-logo.png";
import { auth } from'../utils/firebase-config';
import { useForm, SubmitHandler } from "react-hook-form";
import { createUserWithEmailAndPassword } from 'firebase/auth';


type Inputs = {
    email: string,
    password: string,
    passwordConf: string
}

function SignUpPage() {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSignUp: SubmitHandler<Inputs> = async (formData)=> {
        try {
            if(formData.password === formData.passwordConf) {
                createUserWithEmailAndPassword(auth, formData.email, formData.password).then().catch((error) => {alert(error.message)});
                console.log('passwords matches');
                console.log(`Account creation attempt email: ${formData.email} password: ${formData.password} and password: ${formData.passwordConf}`);
            }
        } catch (error) {
            console.error('Error creating user!');
        }
    }
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
                    <form onSubmit={handleSubmit(onSignUp)}>
                        <input {...register('email')} type='email' placeholder='Email'/>
                        <input {...register('password')} type='password' placeholder='Password'/>
                        <input {...register('passwordConf')} type='password' placeholder='Confirm password'/>
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