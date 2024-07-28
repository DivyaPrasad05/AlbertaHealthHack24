import React from 'react';
import UserProfileComponent from '../components/UserProfileComponent';
import UserStreakComponent from '../components/UserStreakComponent';
import NavBar from '../components/NavBar';

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