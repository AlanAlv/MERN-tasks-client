import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const Header = () => {

    // Destructure auth data
    const authContext = useContext(AuthContext);
    const { user, authenticatedUser } = authContext;

    useEffect(() => {
        authenticatedUser();
    }, []);


    return ( 
        <header className="app-header">
            {user
                ?
                    <p className="username">
                        Hello <span>{user}</span>
                    </p>
                :
                    null
            }   

            <nav className="nav-main">
                <a href="#!">Sign Out</a>
            </nav>
        </header>
     );
}
 
export default Header;