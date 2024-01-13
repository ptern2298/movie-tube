import React from 'react';
import PageHeader from "../components/PageHeader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../utils/userSlice";
import { auth } from "../utils/firebase-config";
import '../style/Profile.css'

interface User {
    email: string;
}

function ProfilePage() {
    const user: User | null = useSelector(selectUser);
    const navigate = useNavigate();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className='profile-container'>
            <PageHeader/>
            <div className='profile-content'>
                <h1>Edit Profile</h1>
                <div className='profile-info'>
                    <div className='profile-image'>
                        <img
                            className='profile-avatar'
                            src='https://www.citypng.com/public/uploads/small/31634946729ohd4odcijurvd40v45hl8lft4w1qmw8bx6fpldgscjmqvhptmmk00uh8j1ol5e20u2vd13ewb2ojyzg60xau3z3mkymxo7ydaql1.png'
                            alt='avatar'
                        />
                    </div>
                    <div className='profile-data'>
                        <h2>{user.email}</h2>

                        <div className='profile-membership'>
                            <h3>Membership Plans</h3>
                            <button className='profile-signOut-btn' onClick={() => {
                                auth.signOut();
                                navigate('/');
                            }}>Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;