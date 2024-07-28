import React from 'react';
import UserProfileComponent from '../components/UserProfileComponent';
import UserStreakComponent from '../components/UserStreakComponent';

const ProfilePage = () => {
    return (
        <>
            <UserProfileComponent />
            <UserStreakComponent />
        </>
    );
};

export default ProfilePage;