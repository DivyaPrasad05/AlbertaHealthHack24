import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="p-4 h-20 flex justify-between items-center" style={{ backgroundColor: '#257CBB' }}>
            {/* Left section: Project logo and Streak */}

            <div className="flex items-center">
                <NavLink to="/">
                    <img src="/myBuddyLogo.png" alt="MyBuddy Logo" className="h-12 md:h-20" />
                </NavLink>
                <div className="flex items-center">
                    <span className="text-white text-lg flex items-center">
                        <img src="/streakFlame.png" alt="Streak" className="h-6 mr-1" />
                        7
                    </span>
                </div>
            </div>

            {/* Center section: Icon selection */}
            <div>
                <img src="/poNavBar.png" alt="Panda" className="h-14" />
            </div>

            {/* Right section: Profile pic */}

            <div>
                <NavLink to="/">
                    <img src="/profilePic.png" alt="User Avatar" className="h-12 rounded-full" />
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;
