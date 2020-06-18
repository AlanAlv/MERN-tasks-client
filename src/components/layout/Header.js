import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Header = () => {

    // Destructure auth data
    const authContext = useContext(AuthContext);
    const { user, authenticatedUser, logOut } = authContext;

    useEffect(() => {
        authenticatedUser();
    }, []);


    return ( 
        <header className="app-header">
            {user
                ?
                    <p className="username">
                        Hello <span>{user.name}</span>
                    </p>
                :
                    null
            }   

            <nav className="nav-main">
                <button 
                    className="btn btn-blank close-session"
                    onClick={() => logOut()}
                >
                    Log Out
                </button>
            </nav>
        </header>
     );
}
 
export default Header;