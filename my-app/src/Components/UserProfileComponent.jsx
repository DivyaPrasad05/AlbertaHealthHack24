import React from 'react';

const UserProfileComponent = () => {
    return (
        <div className="flex items-center justify-center bg-ocean-teal">
            <img src="/images/31.png" alt="Po" class="my-2 pb-4 pr-28 w-full max-w-xs" />
            <div class="flex-col">
                <h1 className="font-Baloo2 text-blue-words font-bold py-2 px-4 rounded text-4xl">Hello Jimmy!</h1>
                <h6 className="font-Baloo2 text-blue-words font-bold py-2 px-4 rounded text-2xl">Joined: July 27, 2024</h6>
            </div>
        </div>

    );
};

export default UserProfileComponent;