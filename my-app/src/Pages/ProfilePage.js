import React from 'react';
import UserProfileComponent from '../Components/UserProfileComponent.jsx';
import UserStreakComponent from '../Components/UserStreakComponent.jsx';
import NavBar from '../Components/NavBar.js';

const ProfilePage = () => {
    return (
        <>
            <NavBar />
            <UserProfileComponent />
            <UserStreakComponent />
        </>
    );
};

export default ProfilePage;